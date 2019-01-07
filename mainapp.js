let element = document.getElementById("head");
//checks for existance of attribute id
let isValid = element.hasAttribute('id');
console.log(isValid);
element.setAttribute("name","userName");
//sets a new attribute name with value userName
//gets the attribute named name
console.log(element.getAttribute("name"));
console.log(element);
//sets a new attribute named randomAttribute
element.setAttribute("randomAttribute","random");
console.log(element);
//removes the mentioned atttribute
// element.removeAttribute("randomAttribute");
// console.log(element);
 
let links = document.querySelectorAll('a');
console.log(links);
for (let link of links) {
    let href = link.getAttribute('href');
    if (!href) continue; // no attribute
  
    if (!href.includes('://')) continue; // no protocol
  
    if (href.startsWith('http://internal.com')) continue; // internal
  
    link.style.color = 'orange';
  }

  let inputs = document.querySelectorAll('input');
  console.log(inputs);
  inputs[0].setAttribute("username","currentUser");
  
  inputs[1].setAttribute("password","password");

  inputs[2].setAttribute("Age","age");
  console.log(inputs[0].getAttribute("username"));
  console.log(inputs[1].getAttribute("password"));
  console.log(inputs[2].getAttribute("Age"));
  console.dir(inputs);
  