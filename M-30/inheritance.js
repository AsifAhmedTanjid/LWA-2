class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    console.log(`${this.name} is eating`);
  }
}

class Dog extends Animal {
  constructor(name, breed, age) {
    // this.name=name;
    // this.age=age;
    super(name, age);
    this.breed = breed;
  }
  //   eat() {
  //     console.log(`${this.name} is eating`);
  //   }

  bark() {
    console.log(`${this.name} is barking`);
  }
}
class Cat extends Animal {
  constructor(name, color, age) {
    // this.name = name;
    // this.age = age;
    super(name, age);
    this.color = color;
  }
//   eat() {
//     console.log(`${this.name} is eating`);
//   }
  meow() {
    console.log(`${this.name} is meowing`);
  }
}
class Bird extends Animal{
  constructor(name, species, age) {
    // this.name = name;
    // this.age = age;
    super(name,age);
    this.species = species;
  }
//   eat() {
//     console.log(`${this.name} is eating`);
//   }
  fly() {
    console.log(`${this.name} is flying`);
  }
}

const dog1 = new Dog("coffee", "deshi", 5);
console.log(dog1);
dog1.eat();

const cat1 = new Cat("sp", "white", 2);
console.log(cat1);
cat1.eat();
const bird1 = new Bird("tia", "deshi", 1);
console.log(bird1);
bird1.eat();
