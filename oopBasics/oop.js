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

let userInput = document.getElementById('myInput');
// console.log(userInput);
// alert("sdfijer");
let submitButton = document.getElementById('submit');

function Todo(){

}
Todo.prototype.addItems = function(){
  submitButton.addEventListener('click',onClick);

  let newLi = document.createElement("li");
  let list = document.getElementById("list");
  function onClick(){
    let inputValue = userInput.value;
   console.log(inputValue);
  
  list.style.backgroundColor="khaki";
  
  // list.insertAdjacentHTML("afterend", '<button class="remove-button">[x]</button>');
  
  let newLi = document.createElement("li");
  newLi.className="pane";
  
  newLi.innerHTML=inputValue;
  
    list.appendChild(newLi);
    console.log("test 1");

    let cbtn = document.createElement('button');
  cbtn.className="cross-btn";
  cbtn.innerHTML="[x]";
  newLi.appendChild(cbtn);

  userInput.value=" ";
  // newLi.insertAdjacentHTML("afterend", '<bu9tton class="remove-button">[x]</button>');

cbtn.addEventListener("click",onCancel);
function onCancel(){
// newLi.style.display="none";
newLi.remove();
}

}
}

Todo.prototype.removeItem = function(){
  let btnCancel = document.getElementById('cancelList');
  btnCancel.addEventListener("click",onRemove);
  function onRemove(){
    let list = document.getElementById('list');
    list.remove();
  }
}
    
toadd = new Todo();
toadd.addItems();
toadd.removeItem();





