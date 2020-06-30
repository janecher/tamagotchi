export class Tamagotchi {
  constructor() {
    this.hunger = 5; 
    this.health = 10; 
    this.sleep = 7; 
    this.happiness = 2; 
    this.cleanliness = 10; 
    this.isSick = false;
    this.isDead = false;
  }

  setHunger() {
    let hungerInterval = setInterval(() => {
        this.hunger--;
    }, 5000);
    if (this.hunger <= 0) {
      clearInterval(hungerInterval);
    }
  }

  setSleep() {
   let sleepInterval = setInterval(() => {
        this.sleep--;
    }, 10000);
    if (this.sleep <= 0) {
      clearInterval(sleepInterval);
    }
  }

  setHappiness() {
    let happinessInterval = setInterval(() => {
        this.happiness--;
    }, 5000);
    if(this.happiness <= 0) {
      clearInterval(happinessInterval);
    }
  }

  setCleanliness() {
    let cleanlinessInterval = setInterval(() => {
      if((this.isSick) && (this.cleanliness - 2 > 0)) {
        this.cleanliness -= 2;
      } else {
        this.cleanliness --;
      }
    }, 7000);
    if(this.cleanliness <= 0) {
      clearInterval(cleanlinessInterval);
    }
  }

  setHealth() {
    let healthInterval = setInterval(() => {
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
    if (this.isDead) {
      clearInterval(healthInterval);
    }
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

  setIsDead() {
    setInterval(() => {
      if(this.health <=0) {
        this.isDead = true;
        // this.hunger = 0;
        this.sleep = 0;
        this.happiness = 0;
        this.cleanliness = 0;
        this.health = 0
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

