// Code your solution in this file!
const returnFirstTwoDrivers = function (arr) {
  // let newArr = [...arr];
  // return newArr.splice(0, 2);
  return arr.slice(0, 2);
};

const returnLastTwoDrivers = function (arr) {
  // return arr.slice(arr.length - 2);
  return arr.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (num) {
  return function(fare) {
    return fare * num;
  };
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (arr, fn) {
  return fn(arr);
}
