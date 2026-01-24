const input = document.getElementById("empInput");
const button = document.getElementById("button");
const result = document.getElementById("result");

button.addEventListener("click", () => {
    const value =   input.value ; 
    result.textContent = value;
});

//we via this function here get value of input via user into value const and then using result.textContent get it on page 