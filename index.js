import express from "express";
import cors from "cors";
//import Pizza from "./src/models/pizza.js";
import PizzaService from "./src/services/pizzas-services.js";

const app = express();

const port = 3000;

app.use(cors());
app.use(express.json());

app.get('/', async (req,res)=>{   
    try {
        let svc = new PizzaService();
        let respuesta = await svc.getAll();
        res.send(respuesta);
    } catch (error) {
        res.status(404).send("error");
    }
})

app.get('/:id', async (req,res)=>{   
    try{
        let svc = new PizzaService();
        let respuesta = await svc.getById(req.params.id);
        res.send(respuesta);
    }catch(error){
        res.status(404).send("error");
    }
})

app.delete('/delete/:id', async (req,res)=>{   
    try{
        let svc = new PizzaService();
        let respuesta = await svc.deleteById(req.params.id);
        res.send(respuesta);
        console.log("se borró el objeto");
    }catch(error){
        res.status(404).send("error");
    }
})

app.put('/update/:id/:nombre/:libregluten/:importe/:descripcion', async (req,res)=>{   
    try{
        let svc = new PizzaService();
        let respuesta = await svc.update(req.params.id, req.params.nombre, req.params.libregluten, req.params.importe, req.params.descripcion);
        res.send(respuesta);
        res.send("se actualizó el objeto");
    }catch(error){
        res.status(404).send("error");
    }
})

app.post('/insert/:nombre/:libregluten/:importe/:descripcion', async (req,res)=>{   
    try{
        let svc = new PizzaService();
        let respuesta = await svc.insert(req.params.nombre, req.params.libregluten, req.params.importe, req.params.descripcion);
        res.send(respuesta);
        res.send("se creó el objeto");
    }catch(error){
        res.status(404).send("error");
    }
})

app.listen(port, () =>{
    console.log(`La app escucha el puerto ${port}`)
})