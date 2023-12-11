/**
 * filename: complexCodeExample.js
 * 
 * This code demonstrates a complex and elaborate JavaScript program.
 * It simulates a virtual zoo with different types of animals, their behaviors, and interactions.
 */

// Animal class representing a generic animal
class Animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }

  eat() {
    console.log(`${this.name} is eating.`);
  }

  sleep() {
    console.log(`${this.name} is sleeping.`);
  }
}

// Mammal class inheriting from Animal
class Mammal extends Animal {
  constructor(name, species) {
    super(name, species);
    this.isWarmBlooded = true;
  }

  giveBirth() {
    console.log(`${this.name} is giving birth.`);
  }
}

// Bird class inheriting from Animal
class Bird extends Animal {
  constructor(name, species) {
    super(name, species);
    this.canFly = true;
  }

  layEggs() {
    console.log(`${this.name} is laying eggs.`);
  }
}

// Tiger class inheriting from Mammal
class Tiger extends Mammal {
  constructor(name) {
    super(name, "Tiger");
    this.sound = "roar";
  }

  makeSound() {
    console.log(`${this.name} says ${this.sound}!`);
  }
}

// Eagle class inheriting from Bird
class Eagle extends Bird {
  constructor(name) {
    super(name, "Eagle");
    this.sound = "screech";
  }

  makeSound() {
    console.log(`${this.name} says ${this.sound}!`);
  }
}

// Snake class inheriting from Animal
class Snake extends Animal {
  constructor(name) {
    super(name, "Snake");
    this.isVenomous = true;
  }

  makeSound() {
    console.log(`${this.name} hisses!`);
  }
}

// Create some animal instances
const tiger = new Tiger("Leo");
const eagle = new Eagle("Aquila");
const snake = new Snake("Slytherin");

// Perform various actions on the animals
tiger.eat();
eagle.eat();
snake.eat();
console.log();

tiger.makeSound();
eagle.makeSound();
snake.makeSound();
console.log();

tiger.sleep();
eagle.sleep();
snake.sleep();
console.log();

tiger.giveBirth();
eagle.layEggs();
console.log();

console.log(`Is ${tiger.name} warm-blooded? ${tiger.isWarmBlooded}`);
console.log(`Can ${eagle.name} fly? ${eagle.canFly}`);
console.log(`Is ${snake.name} venomous? ${snake.isVenomous}`);
