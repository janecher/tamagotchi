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

describe('Property values over time', () => {
  jest.useFakeTimers();
  let tamagotchi;

  beforeEach(function() {
    tamagotchi = new Tamagotchi();
  });

  afterEach(function() {
    jest.clearAllTimers();
  });

  test('should decrease hunger property by 1 every 5 seconds', () => {
    jest.advanceTimersByTime(5000);
    expect(tamagotchi.hunger).toBe(4);
  });
});