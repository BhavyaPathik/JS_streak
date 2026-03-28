let posts = [];

const feed = document.getElementById("feed");
const userInput = document.getElementById("userInput");
const textInput = document.getElementById("textInput");
const postBtn = document.getElementById("postBtn");

function render() {
  feed.textContent = "";

  posts.forEach(post => {
    const div = document.createElement("div");
    div.textContent = post.user + ": " + post.text + " ❤️ " + post.likes;
    feed.appendChild(div);
  });
}

fetch("data.json")
  .then(res => res.json())
  .then(data => {
    posts = data;
    render();
  });

postBtn.addEventListener("click", () => {
  const user = userInput.value;
  const text = textInput.value;

  if (!user || !text) return;

  const newPost = {
    id: Date.now(),
    user: user,
    text: text,
    likes: 0
  };

  posts.unshift(newPost);

  userInput.value = "";
  textInput.value = "";

  render();
});
