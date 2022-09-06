
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



 // Utilizamos el metodo index of para buscar entre los productos

let buscar = prompt("Ingrese el Marca del Auto que desea Buscar !");
let encontrado = auto.includes(`${buscar}`);
if(encontrado == false){
    prompt("No se encontro");
}else{
    prompt("Si existe");
}



