const logDriverNames = function(driver){
    return driver.map(function(driver){
        console.log(driver.name);
    });
}

const logDriversByHometown = function(driver, place){
    driver.map(function(driver){
        if(driver.hometown === place){

            console.log(driver.name);
        }
    });   
}

const driversByRevenue = function(drivers){
    return drivers.slice().sort(function (driverOne, driverTwo) {
        return driverOne.revenue - driverTwo.revenue;
      });
 }

const driversByName = function(drivers){
    return drivers.slice().sort(function (driverOne, driverTwo) {
        return driverOne.name.localeCompare(driverTwo.name);
      });
}

const totalRevenue = function(drivers){
    return drivers.reduce(function (total, currentDriver) {
        return currentDriver.revenue + total;
      }, 0);
}

const  averageRevenue = function(drivers){
    return totalRevenue(drivers)/ drivers.length;
}
