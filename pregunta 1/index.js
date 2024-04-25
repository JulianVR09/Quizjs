let money = 2500000;

let question = prompt("Que deseas comprar:\
\n1) Almojábana con gaseosa: 15000\
\n2) Subway con gaseosa: 23000\
\n3) Nada");

switch (question){
    case "1" : {
        console.log("La comida te cayó mal y te dejo con hambre.");
        console.log("Su dinero actual ahora es: " + money-15000);
        break;
    };
    case "2" : {
        console.log("La comida te dejo satisfecho y te cayó bien.");
        console.log("Su dinero actual ahora es: " + money-23000);
        break;
    };
    case "3" : {
        console.log("Te tocara comprar comida en Medellín");
        console.log("Su dinero actual ahora es: " + money);
        break;
    };
    question = false;
};