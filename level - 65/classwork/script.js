// JS

const person = {
    name: "gio", // key'ს შემთხვევაში ბრჭყალები არ ჭირდება
    age: 17,
    race : "white"
};
console.log(person.name); // გამოსატანად ვიყენებთ .key

//PY

// person = {
//     "name": "gio", // key'ს შემთხვევაში ბრჭყალები ჭირდება
//     "age": 17,
//     "race" : "white"
// }
// print(person["name"]) // გამოსატანად ვიყენებთ [key]

const phone = {
    brand : "IPhone" ,
    storage : 128 ,
    usage : function (){
        this.storage--;
    }
}
console.log(phone.storage);
phone.usage();
console.log(phone.storage);

// ფუნქცია გამოიყენება თითქმის ყველა მონამცეთა ტიპზე 
// ფუნქცია იწერება: function(var)

// მეთოდი გამოიყენება 1 ან 2 მონაცემთა ტიპზე
// მეთოდი იწერება : var.method()

function Person(name, age, race) {
    this.Name = name;
    this.Race = race;
    this.age = age;
  }

  function Car(brand, idk, year, color, horsePower) {
    this.brand = brand;
    this.idk = idk;
    this.year = year;
    this.color = color;
    this.horsePower = horsePower;
    
    this.increaseHorsePower = function() {
        this.horsePower += 100;
    };
}

const myCar = new Car('Toyota', 'ford', 2022, 'Red', 300);
console.log(myCar.horsePower);
myCar.increaseHorsePower();
console.log(myCar.horsePower);

