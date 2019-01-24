let submitbtn = document.getElementById("btns");

submitbtn.addEventListener("click",function(){
let userName = document.getElementById("item").value;
// console.log(userName);
let completeUrl = `https://api.github.com/users/${userName}/repos`;
// console.log(completeUrl);
class myRepo{
    constructor(){
        this.http = new XMLHttpRequest();
    }
    getRepo(url){
        return new Promise((resolve,reject)=>{
            this.http.open("GET",url,true);
            this.http.onload=()=>{
                if(this.http.status===200){
                    let arrayData=[];
                     arrayData = JSON.parse(this.http.responseText);
                    // document.write(arrayData);
                    // let myRepo=[];
                    // arrayData.forEach(function(user){
                    //     myRepo.push(user.name);
                    // });
                    // console.log(myRepo);
                    let myRepo = arrayData.map(item=>item.name);
                    console.log(myRepo);
                    myRepo.forEach((names=>{
                        let newLi = document.createElement("li");
                        newLi.textContent = names;

                        let list = document.getElementById("list");
                        list.appendChild(newLi);
                    }));
                    
                    resolve("Repos added to ul successfully");
                }
                else if(this.http.status==500){
                    reject("Please Check your internet connection");
                }
                else{
                    reject("Something went wrong");
                }
            };
            this.http.send();
        });
    }
}
const obj = new myRepo();
obj.getRepo(completeUrl).then(res=>console.log(res)).catch(err=>console.log(err));

});
