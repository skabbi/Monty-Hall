'use strict';

let montyHall = function () {
  let selectRandomDoor = () => Math.floor(Math.random() * 3); // => 0, 1 or 2

  let generateDoors = function () {
    let doors = ['goat', 'goat', 'goat'];
    let doorWithPrize = selectRandomDoor();
    doors[doorWithPrize] = 'car';
    return doors;
  };

  let findNoPrizeDoorToOpen = function (doors, firstDoor) {
    let doorToOpen = selectRandomDoor();

    if (doorToOpen === firstDoor || doors[doorToOpen] === 'car') {
      return findNoPrizeDoorToOpen(doors, firstDoor) // Is not an unpicked 'goat' door. Trying again.
    }
    return doorToOpen;
  };

  let findLastDoor = function (firstDoor, secondDoor) {
    let sumOfDoors = 3;                                     // The doors numbers are 0, 1 and 2, i.e. 0+1+2=3
    let unopenedDoor = sumOfDoors - firstDoor - secondDoor; // E.g if the unopened door is number 1, 3-0-2=1
    return unopenedDoor;
  };

  let doors = generateDoors();                                            // Will generate 3 doors
  let chooseFirstDoor = selectRandomDoor();                               // Contestant picks a door  
  let openSecondDoor = findNoPrizeDoorToOpen(doors, chooseFirstDoor);     // Host opens a door with a goat
  let switchToThirdDoor = findLastDoor(chooseFirstDoor, openSecondDoor);  // Contestant switches door
  let whatIsBehindThirdDoor = doors[switchToThirdDoor];                   // Contestant sees what is behind the door
  return whatIsBehindThirdDoor;                                           // Will return 'car' or 'goat'
};

let runMontyHallSimulation = function (iterations) {
  let results = {
    "car": 0,
    "goat": 0
  };

  for (let i = 0; i < iterations; i++) {
    results[montyHall()]++
  };

  console.log('Iterations      :', iterations)
  console.log('Percent of car  :', ((results.car / iterations) * 100).toFixed(2), '%')
  console.log('Percent of goat :', ((results.goat / iterations) * 100).toFixed(2), '%')
}

let iterations = process.argv[2] || 1000;
runMontyHallSimulation(iterations);