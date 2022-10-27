//Pizzas

const pizzaMuzzarella = {
    nombre: "Pizza de Muzzarella",
    id: 1,
    ingredientes: [" Sus ingredientes son", "muzzarella","oregano","aceitunas"],
    precio: "Su precio es: $750"
}

const pizzaCebolla = {
    nombre: "Pizza de Cebolla",
    id:2,
    ingredientes: [ " Sus ingredientes son", "muzzarella", "cebolla"],
    precio: "Su precio es: $800"
}

const pizzaCuatroQuesos = {
    nombre: "Pizza de 4 quesos",
    id:3,
    ingredientes: [ " Sus ingredientes son","queso Fontina", "queso Muzzarella", "queso Azul", "queso Parmesano"],
    precio: "Su precio es: $1100"
}

const pizzaDeAnchoas = {
    nombre:"Pizza  de Anchoas",
    id:4,
    ingredientes: [ " Sus ingredientes son","Muzzarella", "tomate", "morron", "anchoas"],
    precio:"Su precio es: $1150"
}

const pizzaDePanceta = {
    nombre: "Pizza de Panceta",
    id:5,
    ingredientes: ["Sus ingredientes son:","queso", "panceta", "tomate"],
    precio:"Su precio es: $1320"
}

const pizzaBomba = {
    nombre: "Pizza Bomba",
    id: 6,
    ingredientes: ["Sus ingredientes son:", "Muzzarella","Cebolla","Jamon","Morron","Panceta","Palmito","Anchoas", "Aceitunas"],
    precio: "Su precio es: $2000"
}
/// Ejercicio A

const pizzas = [
    pizzaMuzzarella,
    pizzaCebolla,
    pizzaCuatroQuesos,
    pizzaDeAnchoas,
    pizzaDePanceta,
    pizzaBomba
]
console.log(pizzas)

pizzas.forEach((id) => {
    if(id % 2 === 1){
        console.log( `${id} es impar`)
    }
})


//Hola No pude terminar la entrega, xq me falta mas practica todavia para cumplir los requerimiento que pdieron. Todavia tengo los conceptos muy sueltos. Disculpen y gracias.



