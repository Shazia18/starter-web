
document.querySelector(".one").addEventListener("click",function(){
    console.log("one");
});
document.querySelector(".two").addEventListener("click",function(){
    console.log("two");
});
document.querySelector(".three").addEventListener("click",function(){
    console.log("three");
});
document.querySelector(".four").addEventListener("click",function(){
    console.log("four");
});
document.querySelector(".five").addEventListener("click",function(event){
    console.log("five");
    // event.stopPropagation();
    // event.stopImmediatePropagation();
    
    if (document.getElementById("check").checked) {
        // event.stopPropagation();
        event.stopImmediatePropagation();
        
      }
        
    
   
});
 document.querySelector(".five").addEventListener("click",function(event){
     console.log("mouse over fifth div");
    //  event.stopPropagation();
    //  event.stopImmediatePropagation();
   
 });

