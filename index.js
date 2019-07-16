function logDriverNames(array) {
    for (const person of array){
      console.log(person.name)
    }
}

function logDriversByHometown(array, location) {
  for (const person of array) {
    if (person.hometown === location) {
      console.log(person.name)
    }
  }
}

function driversByRevenue(array) {
  let newArray = array.slice()
  return newArray.sort(function (a, b) {
    return a.revenue - b.revenue;
  })
}

function compare(a, b) {
  const name1 = a.name.toUpperCase();
  const name2 = b.name.toUpperCase();

  let comparison = 0;
  if (name1 > name2) {
    comparison = 1;
  } else if (name1 < name2) {
    comparison = -1;
  }
  return comparison;
}

function driversByName(array) {
  let newArray = array.slice()
  return newArray.sort(compare)
}

function totalRevenue(array) {
  return array.reduce( function(total, currentValue) {
    return total + currentValue.revenue
  }, 0)
}

function  averageRevenue(array) {
  return totalRevenue(array) / array.length
}
