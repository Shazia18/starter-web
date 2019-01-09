
let list = document.getElementById("list");
let btn1  = document.getElementById('success');
btn1.addEventListener("click", onClick);
function onClick(){
let newLi = document.createElement("li");
newLi.textContent = "Hello, world!";
list.appendChild(newLi);

}

let btn2 = document.getElementById("primary").addEventListener("click",removeLi);

function removeLi(){
    let list = document.querySelector("li");

   list.remove();

}
let btn3= document.getElementById('danger');
btn3.addEventListener("mouseover",mouseOver);
function mouseOver(){
    btn3.style.color="black";
}
let btn4= document.getElementById('info');
btn4.addEventListener("mousedown",onMouseDown);
function onMouseDown(){
    btn4.style.backgroundColor="green";
    setTimeout(() => {
        btn4.style.backgroundColor="blue";
    }, 1000);
}
let btn5= document.getElementById('warning');
btn5.addEventListener("mousemove",onMouseMove);
function onMouseMove(){
    btn5.style.display="none";
    // this.hidden=true;
    setTimeout(() => {
    btn5.style.display="inline";

},1000);
}
let btn6 = document.getElementById('warn');
btn6.addEventListener("contextmenu", onContextMenu);
function onContextMenu(){
btn6.style.width= "300px";
}