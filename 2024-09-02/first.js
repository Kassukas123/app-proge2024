console.log(1+2)
console.log("hello world")
console.log("1"+1)

//halb n2ide
function addNumber(){
    console.log(1+1);
}

function addNumbers(num1,num2){
    return num1 + num2;
}

console.log(addNumbers(1, 2));



//ylesanne 1
const numbers = [1,2,3,4,5];

function findIndex(numbers, num){
    return numbers.indexOf(num);
}

console.log(findIndex(numbers, 5));

//ylesanne 2
function addNumbersFn(num1, num2){
    return num1 + num2;
}
console.log(addNumbersFn(1,20));

//ylesanne 3
const addNumbersArrowFn = (num1, num2) => {
    return num1+num2;
};

console.log(addNumbersArrowFn(10,20))

//ylesanne 4
const addNumbersArrowFnShort = (num1, num2) =>  num1+num2;

console.log(addNumbersArrowFnShort(10,20))
// () => { return ... } vajab loogelisi sulgusid
// () => (return) ...

//ylesanne 5
function addNumbersNested(num1){
     return function (num2) {
        return num1 + num2;
     };
}

console.log(addNumbersNested(3)(8));

//ylesanne 6
const addNumbersNestedArrow = (num1) => num2 => num1 + num2;

console.log(addNumbersNestedArrow(9)(102));