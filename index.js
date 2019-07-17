// Code your solution in this file!
function logDriverNames(drivers){
    drivers.map (function(driver) {return console.log(driver.name)})
}

function logDriversByHometown(drivers, hometown){
    return drivers.map (function(driver) {
        if(driver.hometown === hometown) {
            return console.log(driver.name);
            }
        })
}

function driversByRevenue(drivers){
    let driversNew   = drivers.slice()
 return driversNew.sort(function(driver1, driver2){return driver1.revenue - driver2.revenue;});
}

function driversByName(drivers){
    let driversNew   = drivers.slice();
 return driversNew.sort(function(driver1, driver2){
     if(driver1.name > driver2.name){
        return 1;}

        else if(driver1.name < driver2.name){
            return -1;
        }
        else{
            return 0;
        }
        
     })
     
}

function totalRevenue(drivers){
    const reducer = (acc, current) => acc + current;
    return drivers.map(function(driver){return driver.revenue;}).reduce(reducer);
}

function averageRevenue(drivers){
    return totalRevenue(drivers)/drivers.length*1.00;
}