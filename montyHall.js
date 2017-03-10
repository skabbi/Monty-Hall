'use strict';

const montyHall = function () {
  const selectRandomDoor = () => Math.floor(Math.random() * 3); // => 0, 1 or 2

  const generateDoors = function (doorWithPrize) {
    let doors = ['goat', 'goat', 'goat'];
    doors[doorWithPrize] = 'car';
    return doors;
  };

  const findNoPrizeDoorToOpen = function (doors, firstDoor) {

    const findRoomNumberOfValidDoors = function(value, key) {
      const alreadySelectedDoor = this;
      return (key === alreadySelectedDoor || value === "car") ? value : key;
    }
    const removeInvalidDoors = (value) => Number.isInteger(value);
    const selectFirstValidDoor = (val) => val;

    // => MAP:    If the door can be opened; replaces value, i.e. "car"/"goat", for the door number, i.e. 0-2
    // => FILTER: Removes all values, leaving only room numbers
    // => REDUCE: Returns the first door number available
    const doorToOpen = doors.map(findRoomNumberOfValidDoors, firstDoor).filter(removeInvalidDoors).reduce(selectFirstValidDoor);
    return doorToOpen;
  };

  const findLastDoor = function (firstDoor, secondDoor) {
    const sumOfDoors = 3;                                     // The doors numbers are 0, 1 and 2, i.e. 0+1+2=3
    const unopenedDoor = sumOfDoors - firstDoor - secondDoor; // E.g if the unopened door is number 1, 3-0-2=1
    return unopenedDoor;
  };

  const doorWithPrize = selectRandomDoor();                                 // Randomly select a door containing the prize
  const doors = generateDoors(doorWithPrize);                               // Generate 3 doors. Behind one door is a car; behind the others, goats
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
    results[montyHall()]++
  };

  console.log('Iterations      :', iterations)
  console.log('Percent of car  :', ((results.car / iterations) * 100).toFixed(2), '%')
  console.log('Percent of goat :', ((results.goat / iterations) * 100).toFixed(2), '%')
}

const iterations = process.argv[2] || 1000;
runMontyHallSimulation(iterations);