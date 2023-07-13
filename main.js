function bienvenida () {
    let nombre = prompt("¿Cómo deberíamos llamarlo?")
    alert("Bienvenido " + nombre)

}

bienvenida ()



function elegir(){
    let Opciones = prompt("Que servicio desea contratar? masajes o uñas")
    

    
    if(Opciones === masajes){
        return prompt("Nos contactaremos para agendar un turno")    }
        else{
            prompt("Podes acercar al local para hacerte las uñas")
        }
        while(Opciones != "masajes" || "uñas"){
            alert("Elija una de las dos opciones validas")
}
}


elegir ()
