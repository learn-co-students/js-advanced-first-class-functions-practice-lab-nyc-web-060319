// Code your solution in this file!
// Code your solution in this file!

const logDriverNames = function(drivers){
  return drivers.map(function(driver)
    {console.log(driver.name)
  })
}

const logDriversByHometown = function(drivers, location){
  return drivers.filter(function(driver){
  if ( driver.hometown === location){
    console.log(driver.name);
  }
});
}

const driversByRevenue = function(drivers){
return drivers.slice().sort(function(driverOne, driverTwo){
  return driverOne.revenue - driverTwo.revenue;
})
}

const driversByName = function(drivers){return drivers.slice().sort(function(driverOne, driverTwo){
  return driverOne.name.localeCompare( driverTwo.name);
});
};

const totalRevenue = function(drivers) {
  return drivers.reduce(function(revenue, driver) {
      return driver.revenue + revenue; }, 0);
};

const averageRevenue = function(drivers) {
  return totalRevenue(drivers) / drivers.length
};
