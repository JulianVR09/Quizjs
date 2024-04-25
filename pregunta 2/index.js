// llega a la sala de espera, y revisa su maleta que no cumple con el tamaño de maleta de mano, la aerolínea tiene el tamaño normal para las maletas de mano, 55 cm (alto) x 40 cm (largo) x 20 cm (ancho), y Hildebrando que va a abordar tiene una maleta de 60 cm (alto) x 40 cm (largo)x 20x cm.



alert("Tu maleta no cumple con las condiciones para abordar como equipaje de mano.");
alert("Para solucionar este problema lo recomendable es: ");

const arr = [];
let height = (55 / 60); 
console.log(height);
arr.push(height);

let width = (20 / 20);
console.log(width);
arr.push(width);

let length = (40 / 40);
console.log(length)
arr.push(length);

let shoort = Math.min(...arr);

alert("EL valor mas pequeño es: "+shoort);

let newheight = (55 * shoort);
let newWidth = (20 * shoort);
let newLength = (40 * shoort);

alert("Las nuevas dimensiones serian: " + Math.round(newLength) +", " + Math.round(newWidth) + " y " + Math.round(newheight))

