//create a new div using createElement
let div_one =document.createElement("div");
console.log(div_one);
//create a class within a div
div_one.className="alert alert-success";
//a para within class alert
div_one.innerHTML="<p>This class is created in javascript</p>";
//newly created div appended to body
document.body.appendChild(div_one);
//p class created in div-one
let para_one=document.createElement("p");
console.log(para_one);
para_one.innerHTML="<h2>This heading is created in javascript</h2>";
console.log(para_one);
//inserts the heading into begining of div-one
div_one.prepend(para_one);

let newLi = document.createElement('li');
newLi.innerHTML="XCode";

// list.insertBefore(newLi,list.children[1]);
// console.log(list);

list.replaceChild(newLi, list.lastChild);
let prepend =document.createElement('li');
prepend.innerHTML="prepended";
//inserts a new li element at begining of list
list.prepend(prepend);
// inserts an element at end of the li element
list.after(prepend);
//inserts an element at the begining of li element
// list.before(prepend);
console.log(list);

let para = document.getElementById('para');
para.insertAdjacentHTML('beforebegin','<p>section 3</p>');
para.insertAdjacentHTML('afterbegin','<p>Hello World</p>');
para.insertAdjacentHTML('beforeend',"<h3>I dont know where it will appear :D </h3>");
para.insertAdjacentHTML('afterend',"<h3>Same info about this</h3>");

let div_two=div_one.cloneNode(true);
console.log(div_two);
let div_three=div_one.cloneNode(false);
console.log(div_three);

//home work

// let div = document.createElement('div');
// div.className="alert alert-primary";
// div.innerHTML="<p>This is a primary element</p>";
// document.body.appendChild(div);
// console.log(div);

// let _list= document.createElement('ol');
// _list.innerHTML="<li>MyJava</li><li>MyKotlin</li><li>MyJavaScript</li><li>MyPHP</li>"
// newli=document.createElement('li');
// newli.innerHTML="MyLanguages";
// _list.appendChild(newLi);
// _list.insertBefore(newLi,_list.firstChild);
// _list.removeChild(_list.children[2]);
// _list.remove();
