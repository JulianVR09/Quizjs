function random(a, b){
    return Math.floor(Math.random()*(a - b + 1))+ b;
};

let num = random(3, 1);
console.log(num)