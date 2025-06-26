
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



let $name=document.getElementById("name")
let $lastname=document.getElementById("lastname")
let $email=document.getElementById("email")
let $age=document.getElementById("number")
let $clan=document.getElementById("clan")
let $day=document.getElementById("day")
let $button=document.getElementById("button")







$button.addEventListener("click",function(){
    

    let coder = {
        
        nombre: $name,
        apellido:$lastname,
        email:$email,
        edad: $age,
        clan:$clan,
        jornada:$day,
    }
    coders.push(coder)
    console.clear()
    console.table(coders)
    Toast.fire({
        icon: "success",
        title: "Usuario agregado"
    });
})


