let submitbtn = document.getElementById("btns");

const getRepo = async url=>{
    const res = await fetch(url);
    return await res.json();
    
}
submitbtn.addEventListener("click",function(e){
    let userName = document.getElementById("item").value;
    // console.log(userName);
    let completeUrl = `https://api.github.com/users/${userName}/repos`;
    // console.log(completeUrl);
    getRepo(completeUrl).then(res=>res.map(result=>result.name)).then(res=>{
        res.forEach((names=>{
            let newLi = document.createElement("li");
            newLi.textContent = names;

            let list = document.getElementById("list");
            list.appendChild(newLi);
        }));
    })
e.preventDefault();
});