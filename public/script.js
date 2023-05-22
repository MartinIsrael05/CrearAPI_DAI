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
    document.querySelector("#contenedor").innerHTML="";
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
    url='http://localhost:3000/api/pizzas/delete/';
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
    document.querySelector("#contenedor").innerHTML="";
    console.log("entra a update pizza");
    url='http://localhost:3000/api/pizzas/update/';

    let id=document.getElementById('id').value;
    let nombre=document.getElementById('nombre').value;
    let libreGluten=document.getElementById('libreGluten').value;
    let importe=document.getElementById('importe').value;
    let descripcion=document.getElementById('descripcion').value;
    
    const params = {
        "id": id,
        "nombre": nombre,
        "libreGluten": libreGluten,
        "importe": importe,
        "descripcion": descripcion
    };

    /*const options = {
        method: 'PUT',
        url: 'http://localhost:3000/api/pizzas/update/'+id,
        headers:
        {
            'content-type':'application/json',
            'X-RapidAPI-Host':'microsoft-translator-text.p.rapidapi.com',
        },
        data:params
    }*/

    axios
        .put(url+id,params)
        .then((result)=>{
                console.log(params);
                document.querySelector("#contenedor").innerHTML+=`
                <p>Se actualizó la pizza</p>`;
         
        })
    
    .catch((error)=>{
        console.log(error);
    });
}

function InsertPizza(){
    document.querySelector("#contenedor").innerHTML="";
    console.log("entra a insert pizza");
    let nombre=document.getElementById('nombre2').value;
    let libreGluten=document.getElementById('libreGluten2').value;
    let importe=document.getElementById('importe2').value;
    let descripcion=document.getElementById('descripcion2').value;
    console.log(importe);

    const params = ({
        "nombre": nombre,
        "libreGluten": libreGluten,
        "importe": importe,
        "descripcion": descripcion
    });

    const options = {
        method: 'POST',
        url: 'http://localhost:3000/api/pizzas/insert/',
        headers:
        {
            'content-type':'application/json',
            'X-RapidAPI-Host':'microsoft-translator-text.p.rapidapi.com',
        },
        data:params
    }

    axios
        .request(options)
        .then((result)=>{

                document.querySelector("#contenedor").innerHTML+=`
                <p>Se creó la pizza</p>`;
         
        })
    
    .catch((error)=>{
        console.log(error);
    });
}