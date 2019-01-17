class Car {
    constructor(name, make, price, model, desc) {
      this.name = name;
      this.make = make;
      this.model = model;
      this.price = price;
      this.desc = desc;
    }
    static display() {
      const item = JSON.parse(localStorage.getItem("cars"));
      // console.log(item);
      if (item != null) {
        for (let i = 0; item.length > i; i++) {
          const list = document.getElementById("data");
          const row = document.createElement("tr");
          row.innerHTML = `
            <td>${item[i].name} </td>
            <td>${item[i].make} </td>
            <td>${item[i].model} </td>
            <td>${item[i].price}</td>
            <td>${item[i].desc}</td>
            <td><button class="cancel">[x]</button></td>

            
          `;
          list.appendChild(row);
          console.log(list);
        }
      } else {
        localStorage.setItem("cars", JSON.stringify([]));
      }

    }}

  
  class Store extends Car {
    constructor(name, make, price, model, desc) {
      super(name, make, price, model, desc);
    }
    insertCars(car) {
      console.log(car);
      let cars;
      if (localStorage.getItem("cars") === null) {
        cars = [];
      } else {
        cars = JSON.parse(localStorage.getItem("cars"));
      }
      cars.push(car);
      localStorage.setItem("cars", JSON.stringify(cars));
    }
  
  }
  Car.display();
  document.body.addEventListener("submit", function(e) {
    const name = document.getElementById("name").value;
    // console.log(name);
    const make = document.getElementById("make").value;
    const price = document.getElementById("price").value;
    const model = document.getElementById("model").value;
    const desc = document.getElementById("desc").value;
    // console.log(desc);
    e.preventDefault();
    const obj = new Store(name, make, price, model, desc);
    console.log(obj);
    obj.insertCars(obj);
  });
