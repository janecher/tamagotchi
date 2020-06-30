# Tamagotchi

#### Tamagotchi game

#### By _**Evgeniya Chernaya, Mariel Hamson, Kate Skorija**_

## Description

_Long deiscription._

### Specification
| Behavior | Input | Output|
|----------|-------|-------|
| Create Tamagotchi class object with default levels of hunger, health, sleep, happiness, cleanliness, isSick | const tamagotchi = new Tamagotchi(); | tamagotchi {hunger: 5, health: 10, sleep: 7, happiness: 2, cleanliness: 10, isSick: false} |
| Decrease hunger property by 1 every 5 seconds | hunger: 5 | 5 sec later: hunger: 9 |
| Decrease sleep property by 1 every 10 seconds | sleep: 10 | 10 sec later: sleep: 9 |
| Decrease happiness property by 1 every 5 seconds | happiness: 5 | 5 sec later: happiness: 5 |
| Decrease cleanliness property by 1 every 7 seconds, if sick decrease by 2 | cleanliness: 10 | 7 sec later: cleanliness: 9 |
| Decrease health property by 1 for every property that has values less than 1, each 5 seconds | health: 10 | 5 sec later: health: 8, hunger: 0, sleep: 0 |
| Set isSick property to true if values of any other properties are < 1 | sleep = 0 | isSick = true |
| User can feed tamagotchi | hunger = 5 | feed(tamagotchi) => hunger += 3, but no more than level 10; |
| User can put to sleep tamagotchi (similiar to pause the game) | sleep = 3 | sleep(tamagotchi) => sleep += 1 for every 3 seconds; |
| User can play with tamagotchi | happiness = 3 | play(tamagotchi) => happiness += 5, but no more than level 10;|
| User can wash tamagotchi | cleanliness = 7 | clean(tamagotchi) => cleanliness = 10 |
| Game stop if health < 0 | health < 1 | game over |

## Setup/Installation Requirements

* _Visit the following link: _
* _Clone the repository to your desired directory._
* _OR_
* _Visit here: _


## Known Bugs

_ _
## Support and contact details

_Contact me at...._

## Technologies Used

_Technology!_

### License

*GPL license distribution*

Copyright (c) 2020 **_Your name(s)_**