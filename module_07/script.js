//DOM is Document object model, this is where javascript controls the html

const title = document.getElementById("title");
const button = document.getElementById("togglebutton");

button.addEventListener("click", function(){
    if (title.textContent === "OFF"){
        title.textContent = "ON";
        title.style.color = "green";
    }
    else {
        title.textContent = "OFF";
        title.style.color = "red";
    }
});

//this way the javascript can interact with the html