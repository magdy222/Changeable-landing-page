const main = document.getElementById("main");
const container = document.querySelector(".container")

function replace(color){
    main.src = color;
}
function background(background){
    container.style.background = background
}