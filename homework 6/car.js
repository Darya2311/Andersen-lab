class Car {
  #brand;

  set brand(value) {
    if(typeof(value) === 'string' && value.length >=1 && value.length <= 50) {
      this.#brand = value;
    } else {
        throw new Error('Произошла ошибка');
    };
  };

  get brand () {
    return this.#brand;
  };



  #model;

  set model(value) {
    if(typeof(value) === 'string' && value.length >=1 && value.length <= 50) {
      this.#model = value;
    } else {
        throw new Error('Произошла ошибка');
    };
  };

  get model () {
    return this.#model;
  };

  

  #yearOfManufacturing;

  set yearOfManufacturing(value) {
    let currentTime = new Date();
    let year = currentTime.getFullYear();
    if(typeof value === 'number' && value >= 1900 && value <= year) {
      this.#yearOfManufacturing = value;
    } else {
        throw new Error('Произошла ошибка');
    };
  }
  get yearOfManufacturing() {
    return this.#yearOfManufacturing;
  }


  #maxSpeed;

  set maxSpeed(value) {
    if(typeof value === 'number' && value >= 100 && value <= 300) {
      this.#maxSpeed = value;
    } else {
        throw new Error('Произошла ошибка');
    };
  };

  get maxSpeed () {
    return this.#maxSpeed;
  };



  #maxFuelVolume;

  set maxFuelVolume(value) {
    if(typeof value === 'number' && value >= 5 && value <= 20) {
      this.#maxFuelVolume = value;
    } else {
        throw new Error('Произошла ошибка');
    };
  };

  get maxFuelVolume () {
    return this.#maxFuelVolume;
  };



  #fuelConsumption;

  set fuelConsumption(value) {
    if(typeof value === 'number' && value > 0) {
      this.#fuelConsumption = value;
    } else {
        throw new Error('Произошла ошибка');
    };
  };

  get fuelConsumption () {
    return this.#fuelConsumption;
  };


  

  #currentFuelVolume = 0;

  get currentFuelVolume () {
    if(typeof(this.#currentFuelVolume) === 'number' && this.#currentFuelVolume >= 0) {
      return this.#currentFuelVolume;
    } else {
    throw new Error('Произошла ошибка');
    };
  };



  #isStarted = false;

  get isStarted () {
    return this.#isStarted;
  };



  #mileage = 0;

  get mileage () {
    if(typeof(this.#mileage) === 'number' && this.#mileage >= 0) {
      return this.#mileage;
    } else {
    throw new Error('Произошла ошибка');
    };
  };
  


  start() {
    if(this.#isStarted) {
      throw new Error ('Машина уже заведена');
    } else {
      return this.#isStarted = true;
    }
  };



  shutDownEngine() {
    if(this.#isStarted = false) {
      throw new Error ('Машина еще не заведена');
    } else {
      return this.#isStarted = false;
    }
  };



  fillUpGasTank(value) {
    if(typeof(value) !== 'number' || value <= 0) {
      throw new Error ('Неверное количество топлива для заправки');
    } else if ( value > this.#maxFuelVolume ) {
      throw new Error ('Топливный бак переполнен');
    } else {
      return this.#currentFuelVolume+= value;
    };
  };



  drive(speed, hours) {
    let distance = speed * hours;
    this.#fuelConsumption = this.#currentFuelVolume / distance * 100;
    let necFuel = distance / this.#fuelConsumption;
    if(typeof(speed) !== 'number' || speed <= 0) {
      throw new Error ('Неверная скорость');
    } else if(typeof(hours) !== 'number' || hours <= 0) {
      throw new Error ('Неверное количество часов');
    } else if (speed > this.#maxSpeed) {
      throw new Error( 'Машина не может ехать так быстро');
    } else if (this.#isStarted = false) {
      throw new Error('Машина должна быть заведена, чтобы ехать');
    } else if(this.#currentFuelVolume < necFuel) {
      throw new Error ('Недостаточно топлива')
    } else {
      this.#currentFuelVolume-= necFuel;
      this.#mileage+= distance; 
    };
  }
};




module.exports = { Car };


