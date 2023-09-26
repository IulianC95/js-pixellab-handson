const car = {
  make: 'Peugeot',
  color: 'black',
  wheels: 4,
  speed: 50,
  isTrunkOpen: false,
  areLightsOn: false,

  accelerate: function () {
    this.speed++;
  },
  decelerate: function () {
    this.speed--;
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
