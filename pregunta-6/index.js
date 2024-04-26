import { budget } from "../pregunta-1/index.js";

let live = 0;
let dead = 0;

while (live < 4){
    let color = parseInt(prompt("Ingrese el numero del color que vas a usar hoy:\
                                \n1) Amarillo.\
                                \n2)Verde.\
                                \n3)Rojo.\
                                \n4)Azul."));
    switch(color){
        case 1 : {
            let question = parseInt(prompt("El agua huele raro, Deseas ingresar?\
            \n1)Entrar en la piscina.\
            \n2)No entrar."));
            if(question === 1){
                alert("empiezas a sentirte ahogado, Mucho cloro tenia la piscina, has muerto");
                dead = live;
                live = 5;
            }else{
                alert("No ha pasado nada.");
                live ++;
            };
            break
        };
        case 2 : {
            let question = parseInt(prompt("Hay una caminata larga, pero el final es hermoso, que deseas?\
            \n1)Ir toda la caminata.\
            \n2)Llegar hasta cierto punto."));
            if(question === 2){
                alert("Llegaste hasta cierto punto, te toco devolverte solo, se hizo de noche y te perdiste");
                dead = live;
                live = 5;
            } else{
                alert("Llegaste hasta una cascada hermosa, donde te tomaste muchas fotos.");
                live ++;
            };
            break
        };
        case 3 : {
            let question = parseInt(prompt("Fuiste a la playa, que deseas hacer?\
            \n1)Jugar voleibol.\
            \n2)nadar en el mar.\
            \n3)Tomar cocteles y recibir sol."))
            if(question === 3){
                alert("Parece que lo que estas tomando no es bueno, te duele la cabeza y estas perdiendo la visión(chirrinchi adulterado)");
                dead = live;
                live = 6;
            } else if(question === 2){
                alert("Nadas en el mar, incluso montas en motoacuatica.");
                live ++;
            } else {
                alert("Juegas voleibol con gente que habia en la playa, la pasas genial.");
                live ++;
            };
            break
        };
        case 4 : {
            let question = parseInt(prompt("Te quedas en el hotel, hay actividades, que deseas hacer?\
            \n1)Jugar BINGO.\
            \n2)Bailar.\
            \n3)Ir al casino."));
            if(question === 3){
                alert("Perdiste todo el dinero en el casino, solo te quedan los pasajes de vuelta a casa.");
                dead = live;
                live = 6;
            } else if(question === 2){
                alert("Vas a la pista de baile y te la pasas genial con todos.");
                live ++;
            }else{
                alert("Es tu dia de suerte, te has ganado un bingo.");
                live ++;
            };
            break
        };
    };
};

if(live === 4){
    console.log("Se han acabado las vacaciones has estado en Macondo Hildebrando " + live + " dias.");
    console.log("Has regresado vivo.");
}

if(live === 5){
    console.log("Se han acabado las vacaiones has estado en Macondo Hildebrando " + dead + " dias.");
    console.log("Estas muertos");
}

if(live === 6){
    console.log("Se han acabado las vacaciones has estado en Macondo Hildebrando " + dead + " dias.");
    console.log("Has regresado antes de tiempo");
}



console.log("El dinero que te quedo fue: " + budget);