// Creamos primero la clase constructora para crear objetos de nuestros productos y añadir
// sus especificaiones de forma dinamica.

class Productos{
    constructor(info){
        this.modelo = info.modelo;
        this.año = info.año;
        this.precio = info.precio;
        this.cantidad = info.cantidad;
        this.vendido = false;
    }
    vender(){
        this.cantidad = this.cantidad - 1;
        this.vendido = true;

    }
} 


// Incorporamos un nuevo objeto que seria un modelo especifico de Auto

let car1 = new Productos({
    modelo: "Reno",
    año: 2005,
    precio: 15000,
    cantidad: 5,
})



// Verificamos la el metodo vender dentro del Objeto

console.log(car1);
car1.vender();
car1.vender();
console.log(car1);


// Creamos un Array del Producto Auto vacio, y con un ciclo for para hacerlo mas dinamico
// creamos un objeto con los items que tiene cada Auto, a partir de los datos ingresado. 

const auto = [];
for(i = 0; i < 3; i++){
    let modelo = prompt("Ingrese el modelo del Auto a vender:");
    let año = prompt("Ingrese el Año del Auto a vender:");
    let precio = prompt("Ingrese el precio del Auto a vender:");
    let cantidad = prompt("Ingrese el stock de Autos a vender:");
    let autos = {
        modelo: modelo,
        año: año,
        precio: precio,
        cantidad: cantidad,
    }   
    auto.push(autos);
}

// Mostramos el array creado con los datos ingresados.
console.log(auto);

 // Utilizamos el metodo index of para buscar entre los productos

let buscar = prompt("Ingrese el Marca del Auto que desea Buscar !");
let encontrado = auto.includes(`${buscar}`);
if(encontrado == false){
     alert("No se encontro");
}else{
    alert("Encontrado");
}



