"use strict";
// Code your solution in this file!
function logDriverNames(drivers) {
    for (let idx = 0; idx < drivers.length; ++idx) {
        console.log(drivers[idx].name);
    }
}

function logDriversByHometown(drivers, hometown) {
    for (let idx = 0; idx < drivers.length; ++idx) {
        if (drivers[idx].hometown == hometown) {
            console.log(drivers[idx].name);
        }
    }
}

function driversByRevenue(driversIn) {
    let drivers = Object.assign([], driversIn);
    drivers.sort(function(leftDriver, rightDriver) {
        return leftDriver.revenue - rightDriver.revenue;
    })
    return drivers;
}

function driversByName(driversIn) { 
    let drivers = Object.assign([], driversIn);
    drivers.sort(function(left, right) {
        if (left.name < right.name) {
            return -1;
        }
        if (left.name > right.name) {
            return 1;
        }
        return 0
    });
    // console.log(drivers);
    return drivers;
}

function totalRevenue(drivers) {
    let initialValue = 0;
    return drivers.reduce(function(accumulator, currentValue) {
        return accumulator + currentValue.revenue;
    }, initialValue);
}

function averageRevenue(drivers) {
    return totalRevenue(drivers) / drivers.length
}