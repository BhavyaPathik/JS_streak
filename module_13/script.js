const data = [];

const input = document.getElementById("nameInput");
const button = document.getElementById("addBtn");
const list = document.getElementById("list");

function render() {
  list.textContent = "";

  data.forEach(emp => {
    const div = document.createElement("div");
    div.textContent = emp;
    list.appendChild(div);
  });
}

button.addEventListener("click", () => {
  const value = input.value;

  if (!value) return;

  data.push(value);
  input.value = "";

  render();
});


//this logic uses input by user and shows the data as a list on screen