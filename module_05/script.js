// function is a code that can be reusable via calling it for eg

function hello() {
    console.log("hello");
} //defining the function 

hello(); //calling the function

function say_hello(name){
    console.log("hello "+ name);
}
say_hello("Ravi"); //adds ravi in name 

function addition(a, b){
    return a + b;
}

let sum = addition(2, 3);
console.log(result);

// well these are functions but in morderns js arrow functions are used for eg a normal squaring function would look like

function square(n) {
    return n*n;
}
result = square(5)
console.log(result);

//but this same function in the form of an arrow function would look like (2 ways to do it)

const square = (n) => {
    return n*n;
};

const square = (n) => n*n; //significantly shortening the function code 


const isPass = (marks) => marks <= 27;
let marks = [27, 55, 12, 2, 78, 99]
for (i = 0; i < marks.length; i++){
    if (isPass(marks[i])){
        console.log("pass", marks[i]);
    }
    else {
        console.log("fail", marks[i]);
    }
}
// function used inside a loop