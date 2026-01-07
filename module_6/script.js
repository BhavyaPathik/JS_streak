//object is grouping related data together for example grouping of a persons data, like 

const data = {
    name: "Gourdan",
    age: 33,
    ISadult: true
}
// all information about gourdon is in the same place. 

//to access these values we can 

console.log(data.age);
console.log(data.name);

//for eg if the name (the key) has spaces 

const data2 = {
    name: "heneray the fourth"
}
//to access this we have to use brackets 
 
console.log(data2["name"]);

//to update a value 

data.age = 44; //updates the value 

//to add new values

data.place = "New york";

//function inside a object is called method 

const car = {
    brand: "BMW",
    model: "X5",
    year: 2023
}

for (let key in car) {
    console.log(key, car[key]);
}
//this will print "read" the object 