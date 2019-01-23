// //arr.forEach
// const items = (item)=>{
//     if(item%2==0){
//         console.log(item);
//     }
// }
// arr = [1,2,34,45,456,345,7776,444,3445,566];
// arr.forEach(items);


// //arrow functions

// var item = ()=>{return(2+2)};
// item();

// //.filter method

// let newArry = arr.filter((item)=>item > 5);
// console.log(newArry);

// //.reduce method
// let newArr = arr.reduce((total,item)=>{
// return total+item;
// },16);
// console.log(newArr);
// const arrayTwo = [{name:"Jammes", age: 56, occupation: "actor"},
// { name: "Fahad", age:34, occupation: "joker"},
// {name: "olivia", age: 28, occupation:"chef"}];

// const occupation_list = arrayTwo.map(item=>item.occupation);
// console.log(occupation_list);
// const name_list = arrayTwo.map(item=>item.name);
// console.log(name_list);
// const food = [{name: "banana", color: "yellow",isHeathy:"yes"},
// {name: "burger",color:"determined by ingredients",isHeathy:"No"},
// {name: "red Beans", color:"red",isHeathy:"yes"}
// ];
// const healthy_list = food.filter(item=>item.isHeathy=="yes");
// console.log(healthy_list);
// //find 
// const check_name = food.find(item=>item.color=="red");
// console.log(check_name);
// //some
// const check_length = food.some(item=>item.name.length > 4);
// console.log(check_length);
// //every
//  const check_color = food.every(item=>item.color=="red");
//  console.log(check_color);

//  //reduce
//  const isParenComplete = (str) =>
// (!str.split("").reduce((prev, char) => {
// if(prev < 0) {
// return prev
// }
// if (char === "(") {
// return ++prev
// }
// if (char === ")") {
// return --prev
// }
// return prev
// }, 0));
// console.log( isParenComplete("()()()()") );
// console.log( isParenComplete("()()((()") );
// console.log( isParenComplete(")(((()))") );


const Http = new XMLHttpRequest();
const url = "https://jsonplaceholder.typicode.com/posts";
Http.open("GET",url);
Http.send();
Http.onreadystatechange = function(){
    if(this.readyState ==4 && this.status==200){
        console.log(Http.responseText);
    }
}
function myHomerWOrk(subject,callback){
    console.log(`I am doing my ${subject} homework`);
    callback();

}

function myPendingHomework(subject){

    console.log(`home work of ${subject} is pending`);
}


myHomerWOrk("Math",myCallback);
myPendingHomework("Physics");


function myCallback(){
    console.log("Nothing is pending,,, Yayy");
}

// let myPromise = new Promise((resolve,reject)=>{
//     let totalPromises = 1;
//     if(totalPromises> 0){
//         resolve("Promise yet to be completed");
//     }
//     else{
//         reject("No promises pending");
//     }
// });
// myPromise
