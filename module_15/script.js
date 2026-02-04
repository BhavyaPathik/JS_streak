const employees = [];

const input = document.getElementById("nameInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("list");

function render() {
  list.textContent = "";

  employees.forEach((emp, index) => {
    const div = document.createElement("div");

    const nameSpan = document.createElement("span");
    nameSpan.textContent = emp.name;

    const likeBtn = document.createElement("button");
    likeBtn.textContent = emp.liked ? "❤️" : "🤍";

    likeBtn.addEventListener("click", () => {
      emp.liked = !emp.liked;
      render();
    });

    div.appendChild(nameSpan);
    div.appendChild(likeBtn);
    list.appendChild(div);
  });
}

addBtn.addEventListener("click", () => {
  const value = input.value;
  if (!value) return;

  employees.push({
    name: value,
    liked: false
  });

  input.value = "";
  render();
});
