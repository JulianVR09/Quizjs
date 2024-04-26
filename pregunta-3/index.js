
import { budget } from "../pregunta-1/index.js";

console.log(budget);

let ElPassEs = "01110010_01101001_01110111_01101001";

let newArr = ElPassEs.split("_");

let decimal = []; 

newArr.forEach(e => decimal.push(parseInt(e, 2)));

let password = [];

for(let i = 0; i < decimal.length; i++){
    password.push(String.fromCharCode(decimal[i]));
}

console.log("La contraseña es: " + password.join(""));

let question = parseInt(prompt("Usar el wifi cuesta: 50000 ¿Deseas Usarlo?\
\n1)Si\
\n2)No"));

if(question === 1){
    console.log("Has activado el wifi, tienes una hora de wifi de tu presupuesto actual se restaron: 50000 ");
    budget = budget-50000;
} else{
    console.log("No has activado el wifi");
};