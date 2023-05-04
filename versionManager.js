const vm = function (initialValue) {
  let majorValue = 0;
  let minorValue = 0;
  let patchValue = 1;

  let rollbacks = [];

  setVersion();

  function checkParsing(value) {
    if (isNaN(parseInt(value))) return false;
    return true;
  }

  function rollback() {
    if (rollbacks.length === 0) throw new Error("Cannot rollback!");
    const versions = rollbacks.pop();
    majorValue = versions[0];
    minorValue = versions[1];
    patchValue = versions[2];
    return this;
  }

  function release() {
    return `${majorValue}.${minorValue}.${patchValue}`;
  }

  function major() {
    rollbacks.push([majorValue, minorValue, patchValue]);

    majorValue = majorValue += 1;
    minorValue = 0;
    patchValue = 0;

    return this;
  }

  function minor() {
    rollbacks.push([majorValue, minorValue, patchValue]);

    minorValue += 1;
    patchValue = 0;
    return this;
  }

  function patch() {
    rollbacks.push([majorValue, minorValue, patchValue]);

    patchValue += 1;
    return this;
  }

  function setVersion() {
    if (!initialValue) return;

    const versions = initialValue.split(".").slice(0, 3);

    const parsing = versions.map((version) => checkParsing(version));

    if (parsing.some((value) => value === false))
      throw new Error("Error occured while parsing version!");

    switch (versions.length) {
      case 1:
        majorValue = parseInt(versions[0]);
        minorValue = 0;
        patchValue = 0;
        break;
      case 2:
        majorValue = parseInt(versions[0]);
        minorValue = parseInt(versions[1]);
        patchValue = 0;
        break;
      case 3:
        majorValue = parseInt(versions[0]);
        minorValue = parseInt(versions[1]);
        patchValue = parseInt(versions[2]);
        break;
      default:
        break;
    }
  }

  return {
    release,
    major,
    minor,
    patch,
    rollback,
  };
};
