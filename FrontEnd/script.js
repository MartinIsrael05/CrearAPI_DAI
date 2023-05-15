function LimpiarPantalla(){
    
    document.querySelector("#contenedor").innerHTML="";
        
}

function CargarDatosPorId(){
    console.log("entra a cargar datos por ID");
    url='http://localhost:3000/';
    id=document.getElementById('idPizza').value;
    console.log("id: " + id);
    axios
        .get(url+id)
        .then((result)=>{
            document.querySelector("#contenedor").innerHTML="";
            document.querySelector("#contenedor").innerHTML+=`
            <ul>
                <li>Id: ${result.data.Id}</li>
                <li>Nombre: ${result.data.Nombre}</li>
                <li>Libre de gluten: ${result.data.LibreGluten}</li>
                <li>Importe: $${result.data.Importe}</li>
                <li>Descripción: ${result.data.Descripcion}</li>
            </ul>`;
            
        })
    .catch((error)=>{
        console.log(error);
    });
}

function CargarDatos(){
    console.log("entra a cargar datos");
    url='http://localhost:3000/';
    axios
        .get(url)
        .then((result)=>{
            const pizzas = result.data;
            pizzas.map((pizza, index)=>{
                
                document.querySelector("#contenedor").innerHTML+=`
                    <ul>
                        <li>Id: ${pizza.Id}</li>
                        <li>Nombre: ${pizza.Nombre}</li>
                        <li>Libre de gluten: ${pizza.LibreGluten}</li>
                        <li>Importe: $${pizza.Importe}</li>
                        <li>Descripción: ${pizza.Descripcion}</li>
                     </ul>`;
            }
            )          
        })
    
    .catch((error)=>{
        console.log(error);
    });
}

function BorrarPizza(){
    console.log("entra a borrar pizza");
    url='http://localhost:3000/delete/';
    id=document.getElementById('idPizzaBorrar').value;
    console.log("id: " + id);

    axios
        .delete(url+id)
        .then((result)=>{

                document.querySelector("#contenedor").innerHTML+=`
                <p> se borró la pizza</p>`;
         
        })
    
    .catch((error)=>{
        console.log(error);
    });
}

function UpdatePizza(){
    /*console.log("entra a borrar pizza");
    url='http://localhost:3000/delete/';
    id=document.getElementById('idPizzaBorrar').value;
    console.log("id: " + id);

    axios
        .delete(url+id)
        .then((result)=>{

                document.querySelector("#contenedor").innerHTML+=`
                <p> se borró la pizza</p>`;
         
        })
    
    .catch((error)=>{
        console.log(error);
    });*/
}