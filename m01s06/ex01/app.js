const car = {
  make: 'Peugeot',
  color: 'black',
  wheels: 4,
  speed: 50,
  isTrunkOpen: false,
  areLightsOn: false,
  topSpeed: 160,
  topReverseSpeed: -50,

  accelerate: function () {
    this.speed++;
  },
  decelerate: function () {
    this.speed--;
  },

  stop: function () {
    this.speed = 0;
  },

  setSpeed: function (newSpeed) {
    if (newSpeed >= this.topReverseSpeed && newSpeed <= this.topSpeed) {
      this.speed = newSpeed;
      console.log(`Viteza noua este ${this.speed} km/h.`);
    } else {
      console.log('Viteza nu este permisa');
    }
  },

  openTrunk: function () {
    this.isTrunkOpen = true;
  },

  closeTrunk: function () {
    this.isTrunkOpen = false;
  },

  turnLightsOn: function () {
    this.areLightsOn = true;
  },
  turnLightsOff: function () {
    this.areLightsOn = false;
  },

  flashLights: function () {
    // pastrarea keywordului this
    // metoda 1 inainte de 2016
    const self = this;
    this.turnLightsOn();

    window.setTimeout(function () {
      self.turnLightsOff();
    }, 1000 * 2);
  },
};

console.warn(
  `Afiseaza propozitia: "Masina era marca make si se deplasa cu speed km/h.".`,
);

console.log(`Masina era marca ${car.make} si se deplasa cu ${car.speed} km/h.`);

console.warn(`Decelereaza masina cu 5 unitati apoi afisaza propozitia:
"Viteza noua este speed km/h".
`);

for (let i = 0; i < 5; i++) {
  car.decelerate();
}

console.log(`Viteza noua este ${car.speed} km/h.`);
