const data = [
    {
        Name: "Danny",
        age: 33,
        place: "new york"
    },
    {
        Name: "pramod",
        age: 22,
        place: "delhi"
    }
]
//here inside the array we have put multiple vlaues for opbjects hence giving multiple records can be used for data.

//to access the information 

console.log(data[1].age) //as per array indexing this will give the age of the second object hence 22.

//if you were to add new detalis in this then treating it like an array 

data.push({
    Name: "Samantha",
    age: 23,
    place: "Luxemburg"
})
//push will add this at the end 

data.unshift ({
    Name: "Max",
    age: 32,
    place: "Neatherland"
}) //should add infront of the array

console.log(data);