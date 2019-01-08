
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