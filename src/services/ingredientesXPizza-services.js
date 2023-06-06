import config from '../../dbconfig.js';
import sql from 'mssql';

export default class IngredientesXPizzaService {
    getAll = async () => {
        let returnAll = null;
        console.log("Estoy en: ingredientesXPizzaService.getAll()")
        try {
            let pool = await sql.connect(config)
            let result = await pool.request()
            .query(`SELECT 
                        IngredientesXPizzas.Id AS Id,
                        Ingredientes.Id	AS IdIngrediente,
                        Ingredientes.Nombre	AS Nombre,
                        IngredientesXPizzas.Cantidad AS Cantidad,
                        Unidades.Id AS IdUnidad,
                        Unidades.Nombre AS Unidad
                    
                    FROM IngredientesXPizzas
                    INNER JOIN Ingredientes ON IngredientesXPizzas.IdIngrediente=Ingredientes.Id
                    INNER JOIN Unidades ON IngredientesXPizzas.IdUnidad=Unidades.Id`);
            returnAll = result.recordsets[0];
        }
        catch (error) {
            console.log(error);
        }
        return returnAll;
    }

    getByIdPizza = async (idPizza) => {
        let returnEntity = null;
        console.log('Estoy en: ingredientesXPizzaService.GetById(id)');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                                    .input('pIdPizza', sql.Int, idPizza)
                                    .query(`SELECT 
                                            IngredientesXPizzas.Id AS Id,
                                            Ingredientes.Id	AS IdIngrediente,
                                            Ingredientes.Nombre	AS Nombre,
                                            IngredientesXPizzas.Cantidad AS Cantidad,
                                            Unidades.Id AS IdUnidad,
                                            Unidades.Nombre AS Unidad
                                        
                                        FROM IngredientesXPizzas
                                        INNER JOIN Ingredientes ON IngredientesXPizzas.IdIngrediente=Ingredientes.Id
                                        INNER JOIN Unidades ON IngredientesXPizzas.IdUnidad=Unidades.Id
                                        WHERE IngredientesXPizzas.IdPizza = @pIdPizza`);
            returnEntity = result.recordsets[0];
            //HAYQ QUE: INYECTAR A UNIDAD SU ID Y SU NOMBRE, MEDIANTE UNIDADES SERVICE(HAY Q CREARLO)
            //returnEntity = result.recordset;
        } catch (error) {
            console.log(error);
        }
        return returnEntity;
    }

    insert = async (ingredientesXPizza) => {
        let returnEntity = null;
        console.log('Estoy en: ingredientesXPizzaService.insert')
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()

            .input('pIdPizza', sql.Int, ingredientesXPizza.IdPizza)
            .input('pIdIngrediente', sql.Int, ingredientesXPizza.IdIngrediente)
            .input('pCantidad', sql.Int, ingredientesXPizza.Cantidad)
            .input('pIdUnidad', sql.Int, ingredientesXPizza.IdUnidad)
            .query('INSERT INTO IngredientesXPizzas (IdPizza, IdIngrediente, Cantidad, IdUnidad) VALUES(@pIdPizza, @pIdIngrediente, @pCantidad, @pIdUnidad)');
            returnEntity = result.rowsAffected;
            
        } catch (error){
            console.log(error);
        }
        return returnEntity;
    }

    update = async (id, ingredientesXPizza) => {
        let updateReturn = null;
        console.log('Estoy en: ingredientesXPizzaService.update');
        console.log(ingredientesXPizza);
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
               .input('pId', sql.Int, id)
               .input('pIdPizza', sql.Int, ingredientesXPizza.IdPizza)
               .input('pIdIngrediente', sql.Int, ingredientesXPizza.IdIngrediente)
               .input('pCantidad', sql.Int, ingredientesXPizza.Cantidad)
               .input('pIdUnidad', sql.Int, ingredientesXPizza.IdUnidad)
               .query('UPDATE IngredientesXPizzas set IdPizza = @pIdPizza, IdIngrediente = @pIdIngrediente, Cantidad = @pCantidad, IdUnidad = @pIdUnidad WHERE id = @pId;');
            updateReturn = result.rowsAffected;
        } catch (error) {
            console.log(error);
        }
        return updateReturn;
    }

    deleteById = async (id) => {
        let rowsAffected = 0;
        console.log('Estoy en: ingredientesXPizzaService.deleteById(id)');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pId', sql.Int, id)
                .query('DELETE FROM IngredientesXPizzas WHERE id = @pId');
            rowsAffected = result.rowsAffected;
        } catch (error) {
            console.log(error);
        }
        return rowsAffected;
    }
}