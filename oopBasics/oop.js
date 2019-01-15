// function Student(name,gender,dob,isEmployeed) {
//     this.name = name;
//     this.gender = gender;
//     this.dob=dob;
//     this.isEmployeed=isEmployeed;
// }

// var studentTwo = new Student("shazia","f","1996","true");
// console.log(studentTwo.name);
// console.log(studentTwo.gender);
// console.log(studentTwo.dob);
// console.log(studentTwo.isEmployeed);


// Student.prototype.greet= function(){
// alert("Hi");
// };

// Student.prototype.age = function(dob){

//     let age = Number(2019 - this.dob);
//     console.log(age);
    

// };

// var studentOne = new Student("yasha",14);

// studentOne.greet();
// studentTwo.greet();
// studentTwo.age();

// Student.prototype.employmentStatus = function(isEmployeed){
//     let emp = this.isEmployeed;
//     if(emp){
//         console.log("Employeed");

//     }
//     else{
//         console.log("Not Employeed");
//     }

// };
// studentTwo.employmentStatus();

const ul = document.querySelector('ul');
// const add = document.querySelector('.add');
const btn = document.getElementsByTagName('button');
const input = document.getElementById('item');

function toD0(){

}
let items;
toD0.prototype.addItems = function(){
    if(localStorage.getItem('items')){
        items=JSON.parse(localStorage.getItem('items'))
        }
        else{
            items=[];
        }
        const list=(text)=>{
            const li =document.createElement('li');
            li.textContent=text;
        ;
        
        
        ul.appendChild(li);
        }
        const form = document.querySelector('form');
        form.addEventListener("submit",function(e){
            e.preventDefault();
            items.push(input.value);
            localStorage.setItem('items',JSON.stringify(items));
            list(input.value);
            input.value="";
            console.log("test");
        });

}
toD0.prototype.getItems = function(){
    console.log(localStorage.getItem('items'));
    // data.forEach(item=>{
    //     list(item);
    // });
}
toD0.prototype.removeItems = function(){
btn.addEventListener("click",function(){
localStorage.clear();
console.log("test2");
while(ul.firstChild){
    ul.removeChild(ul.firstChild);
}
});

}


add = new toD0();
add.addItems();
add.getItems();
