// Code your solution in this file!

function logDriverNames(drivers) {
    drivers.forEach(
        function(driver){
            console.log(driver.name);
        }
    )
}

function logDriversByHometown(drivers, hmtwn) {
    logDriverNames(drivers.filter(
        function(driver){
            return driver.hometown === hmtwn
        }
    )
    )
}

function driversByRevenue(drivers) {
    let new_drivers = [...drivers]
    new_drivers.sort(
        function(driver1, driver2){
            return driver1.revenue - driver2.revenue
        }
    )
    return new_drivers;
}


function driversByName(drivers) {
    let new_drivers = [...drivers]
    new_drivers.sort(
        function(driver1, driver2){
            if (driver1.name < driver2.name){
                return -1;
            }
            if (driver1.name > driver2.name){
                return 1;
            }
            return 0;

        }
    )
    return new_drivers;
}

function totalRevenue(drivers){
    return drivers.reduce(
        function(accumulator, currentDriver){
            return accumulator + currentDriver.revenue
        }
    ,0)
}

function averageRevenue(drivers){
    return totalRevenue(drivers) / drivers.length;
}




