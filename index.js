const drivers = [
    { name: 'Bobby', hometown: 'Pittsburgh' },
    { name: 'Sammy', hometown: 'New York' },
    { name: 'Sally', hometown: 'Cleveland' },
    { name: 'Annette', hometown: 'Los Angeles' },
    { name: 'Bobby', hometown: 'Tampa Bay' }
  ];
  
  function findMatching(drivers, name) {
    if (!name) {
      return [];
    } else {
      return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
    }
  }
  
  function fuzzyMatch(drivers, letters) {
    if (!letters) {
      return [];
    } else {
      return drivers.filter(driver => driver.startsWith(letters));
    }
  }
  
  function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
  }