function divide(){
    return 2000/100;
}
const add = (parameter1, parameter2) => parameter1 + parameter2;{

}
const  square = (num) => {
    return num * num;
};

console.log("Result of divide(2000,100):", divide(2000,100));
console.log("Result of square(4)", square(4));
console.log("Result of add(3, 2):", add(3, 2));

module.exports = {
    divide,
    add,
    square,
};
