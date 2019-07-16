function logDriverNames(drivers) {
    drivers.forEach(
        function(driver){
            console.log(driver.name);
        }
    );
}

function logDriversByHometown(drivers, location) {
    logDriverNames(drivers.filter(
        function(driver){
            return driver.hometown === location
        }
    )
    )
}

function driversByRevenue(drivers) {
    let newDrivers = [...drivers];
    newDrivers.sort(function (a, b) {
        return a.revenue - b.revenue;
      });
    return newDrivers;
}

function driversByName(drivers) {
    let newDrivers = [...drivers];
    newDrivers.sort(function(driverOne, driverTwo){
        return driverOne.name.localeCompare(driverTwo.name);
      });
    return newDrivers;
}

function totalRevenue(drivers) {
    let newDrivers = [...drivers];
    return newDrivers.reduce(function(revenue, driver) {
        return driver.revenue + revenue; 
    }, 0);
};

function averageRevenue(drivers) {
    return totalRevenue(drivers) / drivers.length;
}

