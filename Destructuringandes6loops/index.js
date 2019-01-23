// let {  name: username,  age: userage}= user;
// console.log(username,userage);
let user={  name: "Sara",  age: 24 ,score:{ math: 45, physics: 634}};

let{ name: username,age: userage, dob= "1-1-199"}=user;
console.log(username,userage,dob);
let{ name, age,score: { math, physics,islamiat=80}}=user;
console.log(math,physics,islamiat);
let word=  [{name:"loren", Age: 2},
  {name: "Brice", Age:5}];

for(let value of word){
  console.log(value);
}
const obj = {
    a: 1,
    b: {nickname: "nicki",lastName: "whatever"},
    c: 3,
    d: 4
    }
    for (let elem in obj) {
    console.log( obj[elem] )
    };

const pets=[{ name: "tomy", age: 12, favoritefood: "dogfood"},
{name:"jasper", age: 5, favoritefood: "catfood"},
{ name: "miranda",age: 23, favoritefood:"grass"}];
pets.forEach(function(index){
    console.log(index.name);

});
// const arr = ['cat', 'dog', 'fish'];
// arr.forEach(element => {
// console.log(element);
// });
const pet=[{ name: "tomy", age: 12, favoritefood: "dogfood"},
{name:"jasper", age: 5, favoritefood: "catfood"},
{ name: "miranda",age: 23, favoritefood:"grass"}];
for(let item in pet){
  console.log(pet[item].age);
}