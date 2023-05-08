import express from "express";
import cors from "cors";
//import Pizza from "./src/models/pizza.js";
import PizzaService from "./src/services/pizzas-services.js";

const app = express();

const port = 5000;

app.use(cors());
app.use(express.json());

app.get('/', async (req,res)=>{   
    let svc = new PizzaService();
    let respuesta = await svc.getAll();
    res.send(respuesta);
})

app.get('/:id', async (req,res)=>{   
    let svc = new PizzaService();
    let respuesta = await svc.getById(req.params.id);
    res.send(respuesta);
})

app.listen(port, () =>{
    console.log(`La app escucha el puerto ${port}`)
})