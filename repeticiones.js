console.log("V60")
console.log("Kyoto drip")
console.log("Siphon")
console.log("Prensa Francesa")

//lista demetodos se llaman array
const metodos = ["V60", "Kyoto drip", "Siphon", "Prensa Francesa"];

//instruccion que recorre lalista y que hace algo con cada elemento

for (const metodo of metodos){

console.log(metodo)
}

console.log("Fin delprograma")

//ejemplodebucledereservasenun dia

const reservaDia = [2, 1,2,1,2];
let totalTazas = 0;

for (const cantidad of reservaDia){
    totalTazas = totalTazas + cantidad;
}

console.log(totalTazas)