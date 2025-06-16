class Animal {
  speak() {
    console.log("Animal speaks");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Dog barks");
  }
}

class Cat extends Animal {
  speak() {
    console.log("Cat meows");
  }
}

const a = new Animal();
const d = new Dog();
const c = new Cat();

a.speak();
d.speak(); 
c.speak(); 
