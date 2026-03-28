// an object looks like this

const user = {
    name : "Decon",
    age: 33
}

// but an jason looks similar but different 
// no const naming 

// {
//     "name" : "Decon"
//     "age" : "43"
// }

// a fake data json would look like the file data.json 

fetch("data.json")
  .then(res => res.json())
  .then(data => {
    console.log(data);
  });

// so this is to fetch an json data

// api can be in object json form or be in array form which have multiple objects inside them