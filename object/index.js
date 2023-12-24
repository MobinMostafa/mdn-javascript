function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

const myCar = new Car("Eagle", "Talon TSi", 1993)
const kenscar = new Car("Nissan", "300ZX", 1992);
const vpgscar = new Car("Mazda", "Miata", 1990);


console.log(myCar)
console.log(kenscar)
console.log(vpgscar)