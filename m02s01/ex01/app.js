// syntatic sugar
// js nu are clase

class Car {
  // notatia 1
  topSpeed = 160;
  topReverseSpeed = -50;

  constructor(make, color, wheels, speed) {
    this.make = make;
    this.color = color;
    this.wheels = wheels;
    this.speed = speed;
    this.isTrunkOpen = false;
    this.areLightsOn = false;
  }

  accelerate() {
    this.speed++;
  }
  decelerate() {
    this.speed--;
  }

  stop() {
    this.speed = 0;
    console.log(`Viteza noua este: ${this.speed}.`);
  }

  setSpeed(speed) {
    if (speed > this.topSpeed) {
      speed = this.topSpeed;
    }

    if (speed < this.topReverseSpeed) {
      speed = this.topReverseSpeed;
    }

    this.speed = speed;
  }

  openTrunk(isTrunkOpen) {
    this.isTrunkOpen = true;
  }

  closeTrunk(isTrunkOpen) {
    this.isTrunkOpen = false;
  }

  turnLightsOn(areLightsOn) {
    this.areLightsOn = true;
  }

  turnLightsOff(areLightsOn) {
    this.areLightsOn = false;
  }

  flashLights() {
    this.turnLightsOn();
    window.setTimeout(() => {
      this.turnLightsOff();
    }, 2000);
  }
}

const audi = new Car('Audi', 'black', 4, 50);
const opel = new Car('Opel', 'red', 4, 3);

const cars = [audi, opel];
cars.forEach((car) => {
  for (let i = 0; i < 5; i++) {
    car.decelerate();
  }
  console.log(`Viteza noua este ${car.speed} km/h.`);
});
