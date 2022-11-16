const productos = [
    { 
    categoria: "Pizza",  
    id: 1,
    nombre: "Pepperoni" ,
    precio: 1000,
    ingredientes: ["Salsa", "queso muzzarella", "pepperoni"],
    },

    { 
    categoria: "Pizza", 
    id: 2,
    nombre: "Margarita" ,
    precio: 700,
    ingrendientes: ["salsa", "queso muzzarella", "albahaca fresca"],
    },

    { 
    categoria: "Pizza", 
    id: 3,
    nombre: "Veggie" ,
    precio: 850,
    ingredientes: ["salsa", "queso paparela", "berenjena salteada"],
    },

    { 
    categoria: "Pizza",  
    id: 4,
    nombre: "Napolitana", 
    precio: 900,
    ingredientes: ["salsa", "queso muzzarella", "tomate, ajo", "aceitunas verdes"],
    }, 

    { 
    categoria: "Pizza",  
    id: 5,
    nombre: "Especial" ,
    precio: 800,
    ingredientes: ["salsa", "jamon cocido", " queso muzzarella", "morrones", "aceitunas verdes"],
    } ,

    { 
    categoria: "Pizza", 
    id: 6,
    nombre: "Fugazzeta",
    precio: 700,
    ingredientes: ["salsa", " queso muzzarella", "cebolla", "aceitunas negras"],
    },

    { 
    categoria: "Pizza", 
    id: 7,
    nombre: "Cuatro Quesos", 
    precio: 1050,
    ingredientes: ["salsa", " queso muzzarella", "roquefort", "provolone", "sardo"],
    },
]; 
    const idImpares = productos.filter ( (producto) => {
        return producto.id % 2 === 1;
       
    });

    idImpares.forEach ( (producto) => {
        console.log(`El producto ${producto.nombre} tiene id impar`)
    }); 


const productoMenorA = (precio) => {
    return productos.some ( (producto) => {
        return producto.precio < precio; 
    }) 
    ? console.log("Si")
    :console.log("No hay pizza con precio menor a $600");
}; 

productoMenorA (600);

 const productosFiltrados = productos.filter (objetoPizza => {
    return objetoPizza.nombre == "Pepperoni" && objetoPizza.precio > "1050"
});

console.log(`La pizza ${objetoPizza.nombre} tiene el precio de $${objetoPizza.precio}`); 
