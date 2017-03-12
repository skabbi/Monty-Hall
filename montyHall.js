'use strict';

const montyHall = function () {
  const selectRandomDoor = () => Math.floor(Math.random() * 3); // => 0, 1 or 2

  const generateDoors = function (doorWithPrize) {
    let doors = ['goat', 'goat', 'goat'];
    doors[doorWithPrize] = 'car';
    return doors;
  };

  // Checks if a door is an unpicked 'goat' door. Searches each door until it does, by default starts with door number 0.
  const findNoPrizeDoorToOpen = function (doors, firstDoor, checkDoorNumber = 0) {
    if (checkDoorNumber === firstDoor || doors[checkDoorNumber] === 'car') {
      return findNoPrizeDoorToOpen(doors, firstDoor, ++checkDoorNumber) // Is not an unpicked 'goat' door. Checking next door.
    }
    return checkDoorNumber;
  };

  const findLastDoor = function (firstDoor, secondDoor) {
    const sumOfDoors = 3;                                     // The doors numbers are 0, 1 and 2, i.e. 0+1+2=3
    const unopenedDoor = sumOfDoors - firstDoor - secondDoor; // E.g if the unopened door is number 1, 3-0-2=1
    return unopenedDoor;
  };


  // Preparing doors
  const doorWithPrize = selectRandomDoor();                                 // Randomly select a door containing the prize
  const doors = generateDoors(doorWithPrize);                               // Generate 3 doors. Behind one door is a car; behind the others, goats
  
  // Game show starts
  const chooseFirstDoor = selectRandomDoor();                               // Contestant randomly picks a door
  const openSecondDoor = findNoPrizeDoorToOpen(doors, chooseFirstDoor);     // Host opens a door with a goat
  const switchToThirdDoor = findLastDoor(chooseFirstDoor, openSecondDoor);  // Contestant switches door
  const whatIsBehindThirdDoor = doors[switchToThirdDoor];                   // Contestant sees what is behind the door
  return whatIsBehindThirdDoor;                                             // Will return 'car' or 'goat'
};

const runMontyHallSimulation = function (iterations) {
  let results = {
    "car": 0,
    "goat": 0
  };

  for (let i = 0; i < iterations; i++) {
    results[montyHall()]++;
  };

  console.log(`Iterations      : ${iterations}`);
  console.log(`Percent of car  : ${((results.car / iterations) * 100).toFixed(2)} %`);
  console.log(`Percent of goat : ${((results.goat / iterations) * 100).toFixed(2)} %`);
}

const iterations = process.argv[2] || 1000;
console.time(`Execution time  `);
runMontyHallSimulation(iterations);
console.timeEnd(`Execution time  `);