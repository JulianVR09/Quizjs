let budget = 2500000;
export {budget};

let question = prompt("Que deseas comprar:\
\n1) Almojábana con gaseosa: 15000\
\n2) Subway con gaseosa: 23000\
\n3) Nada");

switch (question){
    case "1" : {
        console.log("La comida te cayó mal y te dejo con hambre.");
        budget = budget-15000;
        console.log("Su dinero actual ahora es: " + budget);
        break;
    };
    case "2" : {
        console.log("La comida te dejo satisfecho y te cayó bien.");
        budget = budget-23000;
        console.log("Su dinero actual ahora es: " + budget);
        break;
    };
    case "3" : {
        console.log("Te tocara comprar comida en Medellín");
        console.log("Su dinero actual ahora es: " + budget);
        break;
    };
    question = false;
};

