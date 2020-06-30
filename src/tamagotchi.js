export class Tamagotchi {
  constructor() {
    this.hunger = 5; 
    this.health = 10; 
    this.sleep = 7; 
    this.happiness = 2; 
    this.cleanliness = 10; 
    this.isSick = false;
  }

  setHunger() {
    setInterval(() => {
      this.hunger--;
    }, 5000);
  }

  setSleep() {
    setInterval(() => {
      this.sleep--;
    }, 10000);
  }

  setHappiness() {
    setInterval(() => {
      this.happiness--;
    }, 5000);
  }

  setCleanliness() {
    setInterval(() => {
      if(this.isSick) {
        this.cleanliness -=2;
      } else {
        this.cleanliness--;
      }
    }, 7000);
  }

  setHealth() {
    setInterval(() => {
      if (this.hunger <= 0) {
        this.health--;
      }
      if (this.sleep <= 0) {
        this.health--;
      }
      if (this.happiness <= 0) {
        this.health--;
      }
      if (this.cleanliness <= 0) {
        this.health--;
      }
    }, 5000);
  }

  setIsSick() {
    setInterval(() => {
      if(this.hunger <= 0 || this.sleep <= 0 || this.happiness <= 0 || this.cleanliness <= 0) {
        this.isSick = true;
      } else {
        this.isSick = false;
      }
    }, 1000);
  }

  feed() {
    if (this.hunger + 3 <= 10) {
      this.hunger += 3;
    } else {
      this.hunger += (10 - this.hunger);
    }
  }

  putToBed() {
    if (this.sleep + 3 <= 10) {
      this.sleep += 3;
    } else {
      this.sleep += (10 - this.sleep);
    }
  }

  play() {
    if (this.happiness + 5 <= 10) {
      this.happiness += 5;
    } else {
      this.happiness += (10 - this.happiness);
    }
  }

  wash () {
    if (this.cleanliness <= 10) {
      this.cleanliness = 10;
    }
  }
}

