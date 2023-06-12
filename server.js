import 'dotenv/config'
import express from "express";
import cors from "cors";
import PizzaRouter from "./src/controllers/pizzaController.js";
import IngredientesXPizzaRouter from "./src/controllers/ingredientesXPizzaController.js";
import UnidadesRouter from "./src/controllers/unidadesController.js";

const app  = express();
const port = 3000;

const horaMiddleware = function (req, res, next) {  
  console.log('Middleware (Antes): ' + new Date().toISOString());  
  next(); 
  console.log('Middleware (Despues): ' + new Date().toISOString()); } 
app.get('/algo', horaMiddleware , (req, res, next) => {  res.send('Respuesta del EndPoint!'); })

app.use(horaMiddleware);

app.use(cors());
app.use(express.json());
app.use('/front', express.static('public'));

//endpoint de los routers

app.use("/api/pizzas", PizzaRouter);
app.use("/api/ingredientesxpizzas", IngredientesXPizzaRouter);
app.use("/api/unidades", UnidadesRouter);

app.listen(port, () => {
  console.log(`"server" escuchando el en el puerto ${port} (http://localhost:${port}/)`);
});
