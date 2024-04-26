//1) Para todos dos es piedra. 
//2) Para todos dos es papel.
//3) Para todos dos es tijeras.

import { budget } from "../pregunta-1/index.js";

function random(a, b){
    return Math.floor(Math.random()*(a - b + 1))+ b;
};

let num = random(3, 1);
console.log(num);

let user = parseInt(prompt("Ingrese el numero de lo que deseas sacat:\
                            \n1)Piedra.\
                            \n2)Papel\
                            \n3)Tijera"));  

if(num === 1){
    if(user === 1){
        console.log("Es un empate.");
        console.log("Se tiene que repetir el juego.");
    };
    if(user === 2){
        console.log("Has ganado.");
        console.log("No te has gastado nada en el taxi");
    };
    if(user === 3){
        console.log("Has perdido.")
        console.log("Te han restado: 300000");
        budget-=300000;
    };
}

if(num === 2){
    if(user === 1){
        console.log("Has perdido.")
        console.log("Te han restado: 300000");
        budget-=300000;
    };
    if(user === 2){
        console.log("Es un empate.");
        console.log("Se tiene que repetir el juego.");
    };
    if(user === 3){
        console.log("Has ganado.");
        console.log("No te has gastado nada en el taxi");
    };
}

if(num === 3){
    if(user === 1){
        console.log("Has ganado.");
        console.log("No te has gastado nada en el taxi");
    };
    if(user === 2){
        console.log("Has perdido.")
        console.log("Te han restado: 300000");
        budget-=300000;
    };
    if(user === 3){
        console.log("Es un empate.");
        console.log("Se tiene que repetir el juego.");
    };
}
