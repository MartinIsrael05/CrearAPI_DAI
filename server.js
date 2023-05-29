import 'dotenv/config'
import express from "express";
import cors from "cors";
import PizzaRouter from "./src/controllers/pizzaController.js";
import IngredientesXPizzaRouter from "./src/controllers/ingredientesXPizzaController.js";

const app  = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use('/front', express.static('public'));

//endpoint de los routers

app.use("/api/pizzas", PizzaRouter);
app.use("/api/ingredientesXPizzas", IngredientesXPizzaRouter);

app.listen(port, () => {
  console.log(`"server" escuchando el en el puerto ${port} (http://localhost:${port}/)`);
});
