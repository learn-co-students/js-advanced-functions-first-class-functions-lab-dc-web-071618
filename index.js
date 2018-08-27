// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
  const newArr = [drivers[0], drivers[1]]
  return newArr
}

const returnLastTwoDrivers = function(drivers){
  const newArr = [drivers[drivers.length-2], drivers[drivers.length-1]]
  return newArr
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]


const createFareMultiplier = function (multiplier){
  return function(num){
    return num * multiplier
  }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function (drivers, aFunction) {
  return aFunction(drivers);
}
