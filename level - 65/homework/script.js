function Drink(brand, color,temp,bottle,expdate){
    this.brand = brand
    this.color = color
    this.temp = temp
    this.bottle = bottle
    this.date = expdate
}
const drinky = new Drink('Coca-Cola', 'Red', '5*', 'Glass', "05/10/25");
console.log(drinky)

function Moto(brand, speed, color, distance) {
    this.brand = brand;
    this.speed = speed;
    this.color = color;
    this.distance = distance;
    
    this.increasedistance = function() {
        this.distance += this.speed;
    };
}
const moto = new Moto('BMW', 50, "Black", 0);
moto.increasedistance()
moto.increasedistance()
console.log(moto.distance)