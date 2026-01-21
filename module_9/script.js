const users = [
  { 
    id: 1,
    name: "Aarav",
    role: "sender"
  },
  { 
    id: 2, 
    name: "Neha", 
    role: "receiver" 
  },
  { 
    id: 3, 
    name: "Rohit", 
    role: "sender"
  }
];

//to read this for users

users.forEach(function(user) {
 console.log(user.name)
});

//stuff like users.forEach the .forEach, .find, .filter these are called methods.

const findingUser = users.find(function(user){
  return user.id === 2;
});

console.log(users)



//we can use this method so that only senders can add files

function Access(user) {
  return user.role === "sender";
}

const user3 = users.find(function(user){
  return user.id === 3;
});

console.log(Access(user3));

// have to denfine user as user 3 or user 2 tried with id === 3 it works but it gives faluse for 3rd user where answer should be true.
// it gave false beace we didnt define the user 

const user2 = users.find(function(user){
  return user.id === 2;
});

console.log(Access(user2));