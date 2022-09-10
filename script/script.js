let contenedor = document.getElementById("contenedor");
let seccion = prompt("ingrese la seccion deseada");
let contenedorDos = document.getElementById("contenedorDos")

        
        if(seccion === "zapatillas"){
  
            contenedor.innerHTML = "<h2>Ofertas De Zapatillas</h2>";
             contenedor.className = "ofertas";
             let contenedorDos = document.getElementById("contenedorDos")
             let productos = [
             
             {id: 1, nombre:"zapatillas fila", precio: 9000 },
             {id: 2, nombre:"zapatillas adidas", precio: 9000 },
             {id: 3, nombre:"zapatillas nike", precio: 8000 },
             {id: 4, nombre:"zapatillas topper", precio: 1000 },
            ]
     
            let precio = parseInt(prompt("ingrese precio maximo"));
            let productosFiltrados = productos.filter(item =>item.precio <= precio);
     
            for( const producto of productosFiltrados){
             let item = document.createElement("div");
             item.innerHTML=`<h2> ID: ${producto.id}</h2>
                           <b class="zapatillas">Producto: ${producto.nombre}</b>
                           <p class="zapatillas">Precio$: ${producto.precio}</p>
                           <img class="fotos"src="/fotos/section/zapatillas-hombre-new-balance-3.jpg " alt="">`;
                           
                           
     
                           contenedorDos.append(item);                
     
            }
     
            
        }
        else if(seccion ==="remeras") {
            contenedor.innerHTML = "<h2>Ofertas De Remeras</h2>";
            contenedor.className = "ofertas";

           
            let contenedorDos = document.getElementById("contenedorDos")
            let productos = [
            
            {id: 1, nombre:"remeras fila", precio: 3000 },
            {id: 2, nombre:"remeras adidas", precio: 2500 },
            {id: 3, nombre:"remeras nike", precio: 2000 },
            {id: 4, nombre:"remeras topper", precio: 3000 },
           ]
    
           let precio = parseInt(prompt("ingrese precio maximo"));
           let productosFiltrados = productos.filter(item =>item.precio <= precio);
    
           for( const producto of productosFiltrados){
            let item = document.createElement("div");
            item.innerHTML=`<h2> ID: ${producto.id}</h2>
                          <b class="zapatillas">Producto: ${producto.nombre}</b>
                          <p class="zapatillas">Precio$: ${producto.precio}</p>
                          <img class="fotos"src="/fotos/section/zapatillas-hombre-new-balance-3.jpg " alt="">`;
                          
                          
    
                          contenedorDos.append(item);                
    
           }
    
        }
        else if(seccion ==="pantalones") {
            contenedor.innerHTML = "<h2>Ofertas De Pantalones</h2>";
            contenedor.className = "ofertas";

            let contenedorDos = document.getElementById("contenedorDos")
            let productos = [
            
            {id: 1, nombre:"pantalones fila", precio: 9000 },
            {id: 2, nombre:"pantalones adidas", precio: 9000 },
            {id: 3, nombre:"pantalones nike", precio: 8000 },
            {id: 4, nombre:"pantalones topper", precio: 8000 },
           ]
    
           let precio = parseInt(prompt("ingrese precio maximo"));
           let productosFiltrados = productos.filter(item =>item.precio <= precio);
    
           for( const producto of productosFiltrados){
            let item = document.createElement("div");
            item.innerHTML=`<h2> ID: ${producto.id}</h2>
                          <b class="zapatillas">Producto: ${producto.nombre}</b>
                          <p class="zapatillas">Precio$: ${producto.precio}</p>
                          <img class="fotos"src="/fotos/section/zapatillas-hombre-new-balance-3.jpg " alt="">`;
                          
                          
    
                          contenedorDos.append(item);                
    
           }
        }
        else{
            contenedor.innerHTML = "<h2>Super Ofertas</h2>";
            contenedor.className = "ofertas";

            let contenedorDos = document.getElementById("contenedorDos")
            let productos = [
            
            {id: 1, nombre:"remera fila", precio: 2000 },
            {id: 2, nombre:"pantalones adidas", precio: 8000 },
            {id: 3, nombre:"zapatilla nike", precio: 8000 },
            {id: 4, nombre:"boxer topper", precio: 1000 },
           ]
    
           let precio = parseInt(prompt("ingrese precio maximo"));
           let productosFiltrados = productos.filter(item =>item.precio <= precio);
    
           for( const producto of productosFiltrados){
            let item = document.createElement("div");
            item.innerHTML=`<h2> ID: ${producto.id}</h2>
                          <b class="zapatillas">Producto: ${producto.nombre}</b>
                          <p class="zapatillas">Precio$: ${producto.precio}</p>
                          <img class="fotos"src="/fotos/section/zapatillas-hombre-new-balance-3.jpg " alt="">`;
                          
                          
    
                          contenedorDos.append(item);   
        }
        }

        /*--------------------------------------------------------------


        let contenedorDos = document.getElementById("contenedorDos")
        let productos = [
        
        {id: 1, nombre:"zapatillas", precio: 9000 },
        {id: 2, nombre:"remeras", precio: 9000 },
        {id: 3, nombre:"pantalones", precio: 8000 },
        {id: 4, nombre:"medias", precio: 1000 },
       ]

       let precio = parseInt(prompt("ingrese precio maximo"));
       let productosFiltrados = productos.filter(item =>item.precio <= precio);

       for( const producto of productosFiltrados){
        let item = document.createElement("div");
        item.innerHTML=`<h2> ID: ${producto.id}</h2>
                      <b class="zapatillas">Producto: ${producto.nombre}</b>
                      <p class="zapatillas">Precio$: ${producto.precio}</p>`;
                      
                      

                      contenedorDos.append(item);                

       }

    */