import { Tamagotchi } from './../src/tamagotchi.js';

describe('create Tamagotchi object', () => {

  test('should create Tamagotchi object', () => {
    const tamagotchi = new Tamagotchi();
    expect(tamagotchi).toMatchObject({
      hunger: 5, 
      health: 10, 
      sleep: 7, 
      happiness: 2, 
      cleanliness: 10, 
      isSick: false
    });
  });
});