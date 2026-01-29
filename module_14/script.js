const employees = [];

const input = document.getElementById("nameInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("list");

function render() {
  list.textContent = "";

  employees.forEach((emp, index) => {
    const div = document.createElement("div");
    div.textContent = emp;

    const delBtn = document.createElement("button");
    delBtn.textContent = "❌";

    delBtn.addEventListener("click", () => {
      employees.splice(index, 1);
      render();
    });

    div.appendChild(delBtn);
    list.appendChild(div);
  });
}

addBtn.addEventListener("click", () => {
  const value = input.value;
  if (!value) return;

  employees.push(value);
  input.value = "";
  render();
});

// last module we learned to add an element into the data and present/render it
// this module we work on that and add the function to add and then remove the element (name) that we (user) inputted in. 