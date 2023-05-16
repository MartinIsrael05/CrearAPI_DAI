function LimpiarPantalla(){
    
    document.querySelector("#contenedor").innerHTML="";
        
}

function CargarDatosPorId(){
    console.log("entra a cargar datos por ID");
    url='http://localhost:3000/api/pizzas/';
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
    url='http://localhost:3000/api/pizzas/';
    axios
        .get(url)
        .then((result)=>{
            
            const pizzas = result.data;
            pizzas.map((pizza)=>{
                const{Id,Nombre,LibreGluten,Importe,Descripcion} = pizza;
                
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
    document.querySelector("#contenedor").innerHTML="";
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
    console.log("entra a update pizza");
    url='http://localhost:3000/update/';
    id=document.getElementById('id').value;
    nombre=document.getElementById('nombre').value;
    libreGluten=document.getElementById('libreGluten').value;
    importe=document.getElementById('importe').value;
    descripcion=document.getElementById('descripcion').value;
    console.log("gluten: " + libreGluten);

    url=url+id+'/'+nombre+'/'+libreGluten+'/'+importe+'/'+descripcion

    axios
        .put(url)
        .then((result)=>{

                document.querySelector("#contenedor").innerHTML+=`
                <p>Se actualizó la pizza</p>`;
         
        })
    
    .catch((error)=>{
        console.log(error);
    });
}

function InsertPizza(){
    console.log("entra a insert pizza");
    url='http://localhost:3000/insert/';
    nombre=document.getElementById('nombre2').value;
    libreGluten=document.getElementById('libreGluten2').value;
    importe=document.getElementById('importe2').value;
    descripcion=document.getElementById('descripcion2').value;

    url=url+nombre+'/'+libreGluten+'/'+importe+'/'+descripcion

    axios
        .post(url)
        .then((result)=>{

                document.querySelector("#contenedor").innerHTML+=`
                <p>Se creó la pizza</p>`;
         
        })
    
    .catch((error)=>{
        console.log(error);
    });
}