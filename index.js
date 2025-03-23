// Code your solution here
// index.js
function findMatching(drivers, name) {
  return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

function fuzzyMatch(drivers, prefix) {
  return drivers.filter(driver => driver.toLowerCase().startsWith(prefix.toLowerCase()));
}

function matchName(drivers, name) {
  return drivers.filter(driver => driver.name === name);
}

