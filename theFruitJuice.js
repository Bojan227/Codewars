function Jar() {
  // TODO
  this.juice = {};
}

Jar.prototype.add = function (amount, type) {
  // TODO

  if (!this.juice[type]) {
    this.juice[type] = 0;
  }
  this.juice[type] += amount;
};

Jar.prototype.pourOut = function (amount) {
  // TODO
  const keys = Object.keys(this.juice);

  const amountsToPourOut = keys.map(
    (key) => amount / (1 / this.getConcentration(key))
  );
  keys.forEach((key, i) => (this.juice[key] -= amountsToPourOut[i]));
};

Jar.prototype.getTotalAmount = function () {
  // TODO
  const keys = Object.keys(this.juice);
  return keys.reduce((acc, curr) => acc + this.juice[curr], 0);
};

Jar.prototype.getConcentration = function (type) {
  // TODO

  return this.juice[type] / this.getTotalAmount() || 0;
};

let jar = new Jar();
