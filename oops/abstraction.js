class Car {
  startEngine() {
    this.#injectFuel();
    this.#ignite();
    console.log("Engine started");
  }

 
  #injectFuel() {
    console.log("Fuel injected");
  }

  #ignite() {
    console.log("Spark plug ignited");
  }
}

const myCar = new Car();
myCar.startEngine(); 
