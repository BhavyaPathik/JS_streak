const data = [
  {
     name: "sam",
      emp_id: 1
  },
  {
     name: "emanuel", 
     emp_id: 2 
  },
  { 
    name: "pam", 
    emp_id: 3 
  },
  { 
    name: "nam",
    emp_id: 4 
  }
];

const input = document.getElementById("empInput");
const button = document.getElementById("btn");
const result = document.getElementById("result");

button.addEventListener("click", () => {
  const value = Number(input.value);

  if (!value) {
    result.textContent = "Please enter a valid ID";
    return;
  }

  const found = data.find(person => person.emp_id === value);

  if (found) {
    result.textContent = found.name;
  } else {
    result.textContent = "Employee not found";
  }
});

//this uses input value compares it to emp id and the from that data gives out the requested name of the requested emp id.