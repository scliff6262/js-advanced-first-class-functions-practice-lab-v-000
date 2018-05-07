function logDriverNames(drivers){
  drivers.forEach(function(obj, index){
    console.log(obj.name)
  }
 )
}

function logDriversByHometown(drivers, location){
  const filteredByHometown = drivers.filter(function(driver){return driver.hometown === location})
  filteredByHometown.forEach(function(obj){console.log(obj.name)})
}
