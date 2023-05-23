
import express from "express";
import cors from "cors";
//import Pizza from "./src/models/pizza.js";
import PizzaService from "./src/services/pizzas-services.js";

const app = express();

const port = 3000;

app.use(cors()); 
app.use(express.json());
app.use('/front', express.static('public'));

app.get('/api/pizzas/', async (req,res)=>{   
    try {
        let svc = new PizzaService();
        let respuesta = await svc.getAll();
        res.send(respuesta);
    } catch (error) {
        res.status(404).send("error");
    }
})

app.get('/api/pizzas/:id', async (req,res)=>{   
    try{
        let svc = new PizzaService();
        let respuesta = await svc.getById(req.params.id);
        res.send(respuesta);
    }catch(error){
        res.status(404).send("error");
    }
})

app.delete('/api/pizzas/delete/:id', async (req,res)=>{   
    try{
        let svc = new PizzaService();
        let respuesta = await svc.deleteById(req.params.id);
        res.send(respuesta);
        console.log("se borró el objeto");
    }catch(error){
        res.status(404).send("error");
    }
})

app.put('/api/pizzas/update/:id', async (req,res)=>{   
    let svc = new PizzaService();
    try{
        let pizza = req.body;
        console.log(pizza);
        let respuesta = await svc.updateById(pizza);
        res.status(200).send(respuesta);
    }catch(error){
        console.log(error);
        res.status(500).send(error);
    }

})

app.post('/api/pizzas/insert/', async (req,res)=>{   
    let svc = new PizzaService();
    try{
        let pizza = req.body;
        let respuesta = await svc.insert(pizza);
        res.status(200).send(respuesta);
    }catch(error){
        console.log(error);
        res.status(500).send("error");
    }
})

app.listen(port, () =>{
    console.log(`La app escucha el puerto ${port}`)
})