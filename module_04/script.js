//array is a list of elements for example rahter the let a = 1, let b = 2, let c = 3, let d = 4
//we can make array = [1,2,3,4,5] as a list of them with repetition 

//indexing in array starts from 0 not 1 for example array = [kid, dad, mother, uncle] here kid will be at index 0

let array = [ kid, father, mother, uncle];
console.log(array[0]); // will give element at 0 index
console.log(array.length); // will give the length of array 

// push() is used to add an element at the end of an array
// pop() is used to remove and element from the end of an array 
// shift() to remove first
// unshift() to add to the first 

const num = [1, 2, 3, 4, 5];
num.push(6); //will add six at end;
num.pop(); //will remove the last element 6
num.shift(); //removes the first element 
num.unshift(1); //will add 1 at the start 
console.log(num); //prints the array 

//arrays are aloowed to be of mixed data for example
const mix = [1, "mixing", false];

const marks = [22, 15, 44, 66, 89, 76];

for(i=0; i < marks.length; i++){
    if(marks[i]=27){
        console.log("pass", marks[i]);
    }
    else{
        console.log("fail", marks[i]);
    }
}
//this loop with array checks passing marks 

//last module i forgot to do do while loop well a do while loop is a loop that runs atleast once
//as the update is done first then the condition is checked 

//for example

const i = 1;
 
do {
    console.log(i);
    i++;
}
while (i <= 5);
//will print numbers till 5 so condition is checked later code will run first