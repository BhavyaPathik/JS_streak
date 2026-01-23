const data = [
  { 
    name: "sam",
    age: 33,
    emp_id: 1 
  },
  { 
    name: "emanuel", 
    age: 33, 
    emp_id: 2 
  },
  { 
    name: "pam", 
    age: 33, 
    emp_id: 3 
  },
  { 
    name: "nam", 
    age: 33, 
    emp_id: 4 
  }
];

const id_info = data.find(person => person.emp_id === 3);

const div = document.createElement("div");
div.textContent = id_info.name;
document.body.appendChild(div);

//we have some data and we take id and then using js print the name of the person related to the id on the html page