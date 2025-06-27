
import Swal from "sweetalert2";



const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
});






let coders=[]

console.log("¡Gestion de Datos con objetos, sets y maps!");


let $name=document.getElementById("name")
let $lastname=document.getElementById("lastname")
let $email=document.getElementById("email")
let $age=document.getElementById("number")
let $clan=document.getElementById("clan")
let $day=document.getElementById("day")
let $button=document.getElementById("button")







$button.addEventListener("click",function(){
    const email = $email.value;
       // Verifica si el email ya fue registrado
        if (emailsRegistrados.has(email)) {
            Toast.fire({
                icon: "warning",
                title: "Este usuario ya fue registrado"
            });
            return;
        }
    

    let coder = {
        
        nombre: $name.value,
        apellido: $lastname.value,
        email: $email.value,
        edad: $age.value,
        clan: $clan.value,
        jornada: $day.value,
    }
    coders.push(coder)

    console.clear()
    console.table(coders)
    Toast.fire({
        icon: "success",
        title: "Usuario agregado"
    });
})


const productos={
    1:{id:1,nombre: "play station4", precio: 2000},
    2:{id:2,nombre: "iphonexs", precio: 3000},
    3:{id:3,nombre: "tablet", precio: 4000}
    
};

console.log("Productos:", productos);

const setProductos = new Set(Object.values(productos).map(producto => producto.nombre));
console.log("Set de productos unicos:", setProductos);


const mapDeProductos = new Map([
    ["Electronica", "play station4"],
    ["Electronica", "iphonexs"],
    ["Electronica", "tablet"],
    
]);


console.log("Map de pruductos y categoria:", mapDeProductos);


for (const id in productos ){
 console.log(`Producto ID: ${id}, Detalles `, productos[id]);

}


for(const produc of setProductos){
    console.log("producto unico:", produc);

}

mapDeProductos.forEach((producto, categoria)=>{
    console.log(`Categoria: ${categoria}, preducto: ${producto}`);

});


console.log("prueba completas de gestion de datos:");
console.log("Lista de productos (Objetos):", productos);
console.log("Lista de productos unicos (Set):", setProductos);
console.log("Categorias y productos (Map):", mapDeProductos);