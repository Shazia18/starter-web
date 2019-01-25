let submitbtn = document.getElementById("btns");


class mRepo{
    constructor(){
        this.http = new XMLHttpRequest();

    }
    getRepo(cb,url){
        this.http.open("GET",url,true);
        this.http.onload=()=>{
            cb(this.http.responseText);
            if(this.http.status===200){
                let arrayData=[];
                 arrayData = JSON.parse(this.http.responseText);
              
                let myRepo = arrayData.map(item=>item.name);
                console.log(myRepo);
                myRepo.forEach((names=>{
                    let newLi = document.createElement("li");
                    newLi.textContent = names;

                    let list = document.getElementById("list");
                    list.appendChild(newLi);
                }));
        }
        else{
            console.log("errors found");
        }
    }
    this.http.send();

    }
}
submitbtn.addEventListener("click",function(){
    let userName = document.getElementById("item").value;
    // console.log(userName);
    let completeUrl = `https://api.github.com/users/${userName}/repos`;
    // console.log(completeUrl);
    
    const obj = new mRepo();
    obj.getRepo(response=>console.log(response),completeUrl);
    });