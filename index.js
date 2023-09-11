// Write a higher-order function that takes an array and a modifying function as arguments. The higher-order function should modify each element in the input and return a new array containing the modified elements.

const capitalWords = ["Hippopotamus", "King Cobra", "Giant Panda", "Crocodile"];

const convertToLowercase = (capitalString) => {
    return capitalString.toLowerCase();
};

const higherOrderFunc1 = (array, modifyingFunc) => {
    return array.map(modifyingFunc);
};
console.log(higherOrderFunc1(capitalWords, convertToLowercase));
