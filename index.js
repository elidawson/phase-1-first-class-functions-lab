const returnFirstTwoDrivers = array => {
    return array.slice(0, 2)
}

const returnLastTwoDrivers = function(driversArray) {
    return driversArray.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(i) {
    return function(fare) {
      return fare * i;
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function(driversArray, driversFunction) {
    return driversFunction(driversArray);
  };