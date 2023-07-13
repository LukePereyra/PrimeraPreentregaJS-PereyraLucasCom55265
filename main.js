function bienvenida () {
    let nombre = prompt("¿Cómo deberíamos llamarlo?")
    alert("Bienvenido " + nombre)

}

bienvenida ()



function elegir(){
    let Opciones = prompt("Que servicio desea contratar? masajes o uñas")

    while (Opciones !== "masajes" && Opciones !== "uñas"){
        alert ("Elija una opción válida")
        Opciones = prompt("Que servicio desea contratar? masajes o uñas")
    }
    if (Opciones === "masajes"){
        alert ("Nos contactaremos para fijar un turno")
    }
    else {
        alert ("Uñas está libre, acercate al local")
    }
}




elegir ()
