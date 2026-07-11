//"hazme una funcion para mi sitioweb de cafe que reciba la cantidad de tazas que un cliente 
// quiere reservar y me diga si puede reservar o no.la regla es que no se puede reservar mas 
// de 2 tazas por persona."

function puedeReservar(cantidad){
    if(cantidad > 2){
        return false;
    }
    return true;
}