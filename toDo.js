+

// console.log(userInput);
// alert("sdfijer");
let submitButton = document.getElementById('submit');
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

  let cbtn = document.createElement('button');
  cbtn.className="cross-btn";
  cbtn.innerHTML="[x]";
  newLi.appendChild(cbtn);

  userInput.value=" ";
  // newLi.insertAdjacentHTML("afterend", '<bu9tton class="remove-button">[x]</button>');

// cbtn.addEventListener("click",onCancel);
// function onCancel(){
// // newLi.style.display="none";
// newLi.remove();
// }

document.body.addEventListener("click",function(e){
  console.log(e.target);
  if(e.target.parentElement.className==="pane"){
    e.target.parentElement.remove();
  }
  });


}

// let btnCancel = document.getElementById('cancelList');
// btnCancel.addEventListener("click",onRemove);
// function onRemove(){
//   let list = document.getElementById('list');
//   list.remove();
// }



// document.body.addEventListener("click",function(e){
  
//   if(e.target.className==="custom"){
//     console.log(e.target);
//     e.target.previousElementSibling.remove();
//   }
//   });
 

   document.body.addEventListener("click",function(e){
  
        if(e.target.classList.contains('custom')){
          // console.log(e.target);
        let num = e.target.previousElementSibling.children;
        let i=0;
          while(i<num.length){
          console.dir(e.target.previousElementSibling.children[i].remove());

          }

          }
          


       

         
        


      
    
   });
 
      

