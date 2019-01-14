const form = document.querySelector('form');
const ul = document.querySelector('ul');
// const add = document.querySelector('.add');
const btn = document.getElementsByTagName('button');
const input = document.getElementById('item');
let items;
if(localStorage.getItem('items')){
items=JSON.parse(localStorage.getItem('items'))
}
else{
    items=[];
}
const list=(text)=>{
    const li =document.createElement('li');
    li.textContent=text
;


ul.appendChild(li);
}
form.addEventListener("submit",function(e){
    // e.preventDefault();
    items.push(input.value);
    localStorage.setItem('items',JSON.stringify(items));
    list(input.value);
    input.value=""; 

   
});
data.forEach(item=>{
    list(item);
});
btn.addEventListener('click', function(){
localStorage.clear();
while(ul.firstChild){
    ul.removeChild(ul.firstChild);
}
});
