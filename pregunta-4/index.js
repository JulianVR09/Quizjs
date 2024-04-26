let sentence = "Taxi me puede llevar al hotel mariposas amarillas";

let arr = sentence.slice("");

let newArr = [];

for(let i = 0; i < arr.length; i++){    
    if (arr[i] === "a" || arr[i] === "e" || arr[i] === "o" || arr[i] === "u"){
        newArr.push("i");
    } else {
        newArr.push(arr[i]);
    };
};

let newSentence = newArr.join("")
console.log(newSentence);

