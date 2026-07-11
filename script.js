function calcularPrecio(precioUnitario, cantidad){
    const total = precioUnitario * cantidad;
    return total;
}

//function puedeReservar (cantidad){
 //   return cantidad <= 2;
//}

function puedeReservar (tazasDisponibles){
    return tazasDisponibles > 0;
}

//const botonReservar = document.querySelector("#boton-reserva");

//botonReservar.addEventListener("click", function(){
   // console.log("El usuario hizo clic");
//});

const botonReservar = document.querySelector("#boton-reserva");
const contadorTazas = document.querySelector("#contador-tazas");

botonReservar.addEventListener("dblclick", function(){
   const tazasActuales= Number(contadorTazas.textContent);

   if(puedeReservar(tazasActuales)){
    contadorTazas.textContent = tazasActuales - 1;
    console.log("Reserva Registrada");
   }else{
    botonReservar.textContent = "Sin cupos";
    botonReservar.disabled = true;
    console.log("no hay cupos disponibles");
   }
});