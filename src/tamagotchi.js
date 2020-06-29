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
}

