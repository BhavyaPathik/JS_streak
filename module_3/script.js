//there are loops where we can run a condition multiple times that saves us from making conditions ladders

//for example a for loop 
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
//it checks the starting point, then the conditon and then the update in i (append here) the console prints 5 numbers

let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}
//here in while, the condition run till fulfilled it can run infinitely 
 
// break is used to stop the loop 

for (i = 1; i <=10; i++){
    if (i === 5) {
        break;
    }
    console.log(i);
}
// output will be till number 4 as at 5 loop will break.

//while break stops the loop, continue is used to skip one part or condition 

for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log(i);
}
//here when i=3 the appending won't happen.

for (let i=1; i <= 5; i++){
     let star = "";
    for(let j=1; j <=i; j++);
     star = "*";
    console.log(star);
}

//when there is a loop within a loop its a nested loop. this i will be used for rows of star and j for columns