import 'dotenv/config'
import express from "express";
import cors from "cors";
import PizzaRouter from "./src/controllers/pizzaController.js";
import IngredientesXPizzaRouter from "./src/controllers/ingredientesXPizzaController.js";
import UnidadesRouter from "./src/controllers/unidadesController.js";

const app  = express();
const port = 3000;

const horaMiddleware = function (req, res, next) {  
  let tiempo1 = new Date();
  console.log('Tiempo antes: ' + tiempo1.toISOString());  
  next(); 
  let tiempo2 = new Date();
  console.log('Tiempo después: ' + tiempo2.toISOString()); 
  console.log("Tiempo que tardó: " + (tiempo2 - tiempo1).toString() + " milisegundo/s");
} 


const checkApiKey = function  (req, res, next){
  if(req.headers.apikey != undefined && req.headers.apikey != null && req.headers.apikey == "123456789"){
      next();
  }else{
      res.status(401).send('NO está autorizado, necesita una ApiKey valida');
  }
}

const headerResponse = function (req, res, next){
  res.set('Created', 'Santiago,Luciano&Martin');
  next();
}

app.use(horaMiddleware);
app.use(checkApiKey);
app.use(headerResponse);

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
