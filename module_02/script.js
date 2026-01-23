// conditions like "if" and "else", these can work similar to English
// for eg if true do this else do that can be used inside loops.

const Adult_age = 18;
if (Adult_age >= 18) {
    console.log("you are an adult and can vote.");
}
// here it checks whether const age is 18 or not if true it prints otherwise nothing happens

// but if we were to put a condition of else so if the "if" condition was not true
// it would still print an appropriate result.
// for eg

const Young_age = 16;
if (Young_age >= 18) {
    console.log("you are an adult and can vote.");
} else {
    console.log("sorry you are not of the minimum age required to vote");
}
// here it will print the else message as the condition for "if" is not true.

// else if ladder is where multiple else if statements are used
// and it runs top to bottom

const AGE = 4;
if (AGE > 80) {
    console.log("you are a senior citizen.");
} else if (AGE >= 45) {
    console.log("you are in your late adulthood.");
} else if (AGE >= 20) {
    console.log("enjoy your 20s you are young adult.");
} else if (AGE === 18) {
    console.log("you are a new adult.");
} else {
    console.log("you are a child please log off the site.");
}
//this will checks multiple conditions 

//if we need to check 2 cnditions at a time we use logical operator  like AND(&&) and OR(||)

//for eg 

const ISdrinker = true;
const ISsmoker = false;

if (ISsmoker && ISdrinker) {
    console.log("person has an addiction")
}
//checks both condition if true prints the result, || (OR) needs only one correct condition

const ISaddict = false;

if (!ISaddict){
    console.log("person is not an addict")
}
//checks (!) weater the contion is false or not if false then moves ahead 
