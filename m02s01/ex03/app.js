const Car = {
  make: '',
  color: '',
  wheels: 0,
  speed: 0,
  areLightsOn: false,

  displaySpeed: function () {
    console.log(`Viteza curenta este: ${this.speed}.`);
  },

  accelerate: function () {
    this.speed++;

    this.displaySpeed();
  },

  decelerate: function () {
    this.speed--;

    this.displaySpeed();
  },

  turnLightsOn: function () {
    this.areLightsOn = true;
    console.log('Luminile sunt aprinse.');
  },

  turnLightsOff: function () {
    this.areLightsOn = false;
    console.log(`Luminile sunt stinse.`);
  },

  flashLights: function () {
    this.turnLightsOn();
    window.setTimeout(() => {
      this.turnLightsOff();
    }, 2000);
  },
};

const audi = Object.create(Car);
audi.make = 'Audi';
audi.color = 'black';
audi.wheels = 4;
audi.speed = 0;

console.log(audi);
