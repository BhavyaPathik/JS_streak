let posts = [];

const feed = document.getElementById("feed");

function render() {
  feed.textContent = "";

  posts.forEach(post => {
    const div = document.createElement("div");
    div.textContent = post.user + ": " + post.text; //this will give user and the text from the json (data) file
    feed.appendChild(div);
  });
}

fetch("data.json")
  .then(res => res.json()) //res = response object, converting json to js
  .then(data => {
    posts = data;
    render();
  });
