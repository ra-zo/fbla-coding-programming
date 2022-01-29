let locationMatchingLocations
let priceMatchingLocations
let placeMatchingLocations
let allAgesMatchingLocations

var attractionsObjectList = [
  {index: 1, name: "Keller Chophouse", type: 'resturant', location: 'Keller', price: '$$$', outdoors: 'no', address: "124 S Main St", description: 'A fine dining steakhouse restaurant', kidFriendly: 'yes'}, 
  {index: 2, name: "Alex's Pizza and Pasta Keller", type: 'resturant', location: 'Keller', price: '$$', outdoors: 'no', address: "5800 N Tarrant Pkwy #110", description: 'An italian restaurant', kidFriendly: 'yes'}, 
  {index: 3, name: "Tio Carlos Restaurant Keller", type: 'resturant', location: 'Keller', price: '$$', outdoors: 'no', address: "314 N Main St", description: 'A traditional mexican restaurant', kidFriendly: 'yes'}, 
  {index: 4, name: "Mango's Breakfast Brunch Keller", type: 'resturant', location: 'Keller', price: '$$', outdoors: 'no', address: "900 S Main St #305", description: 'A breakfast restaurant', kidFriendly: 'yes'}, 
  {index: 5, name: "Joe's Pasta & Pizza", type: 'resturant', location: 'Keller', price: '$$', outdoors: 'no', address: "6024 Denton Hwy", description: 'An italian restaurant', kidFriendly: 'yes'}, 
  {index: 6, name: "Martha's Mexican Cocina", type: 'resturant', location: 'Keller', price: '$$', outdoors: 'no', address: "4240 Heritage Trace Pkwy", description: '', kidFriendly: 'yes'}, 
  {index: 7, name: "King Wok Chinese", type: 'resturant', location: 'Keller', price: '$', outdoors: 'no', address: "1229 Woodhaven Blvd", description: 'A traditional chinese restaurant', kidFriendly: 'yes'}, 
  {index: 8, name: "Texas Roadhouse", type: 'resturant', location: 'Keller', price: '$$', outdoors: 'no', address: "5250 Endicott Ave", description: 'A chain steakhouse restaurant', kidFriendly: 'yes'}, 
  {index: 9, name: "Keller Town Center", type: 'shopping', location: 'Keller', price: '$', outdoors: 'yes', address: "101 Town Center Ln", description: 'A small shopping mall', kidFriendly: 'yes'}, 
  {index: 10, name: "The Capital Grille", type: 'resturant', location: 'Fort Worth', price: '$$$', outdoors: 'no', address: "800 Main St", description: 'An upscale steakhouse restaurant', kidFriendly: 'yes'}, 
  {index: 11, name: "Texas de Brazil", type: 'resturant', location: 'Fort Worth', price: '$$$', outdoors: 'no', address: "101 N Houston St", description: 'A Brazilian steakhouse eatery', kidFriendly: 'yes'}, 
  {index: 12, name: "Velvet Taco", type: 'resturant', location: 'Fort Worth', price: '$$', outdoors: 'no', address: "2700 W 7th St", description: 'A taco restaurant', kidFriendly: 'yes'}, 
  {index: 13, name: "Whataburger", type: 'resturant', location: 'Fort Worth', price: '$', outdoors: 'no', address: "3701 West Fwy", description: 'A fast food restaurant', kidFriendly: 'yes'}, 
  {index: 14, name: "Modern Art Museum of Fort Worth", type: 'museum', location: 'Fort Worth', price: '$', outdoors: 'no', address: "3200 Darnell St", description: 'An acclaimed modern art museum', kidFriendly: 'yes'}, 
  {index: 15, name: "Kimbell Art Museum", type: 'museum', location: 'Fort Worth', price: '$', outdoors: 'no', address: "3333 Camp Bowie Blvd", description: 'A renowned Asian/European museum', kidFriendly: 'yes'}, 
  {index: 16, name: "Fort Worth Nature Center & Refuge", type: 'nature', location: 'Fort Worth', price: '$', outdoors: 'yes', address: "9601 Fossil Ridge Rd", description: 'A Tarrant County nature preserve', kidFriendly: 'yes'}, 
  {index: 17, name: "Eagle Mountain Lake", type: 'nature', location: 'Fort Worth', price: '$', outdoors: 'yes', address: "11601 Morris Dido Newark Rd", description: 'A reservoir', kidFriendly: 'yes'}, 
  {index: 18, name: "La Gran Plaza de Fort Worth", type: 'shopping', location: 'Fort Worth', price: '$', outdoors: 'no', address: "4200 South Fwy", description: 'A hispanic themed shopping mall', kidFriendly: 'yes'}, 
  {index: 19, name: "Fort Worth Stockyards", type: 'landmark', location: 'Fort Worth', price: '$$', outdoors: 'yes', address: "131 E Exchange Ave", description: 'A historical business district', kidFriendly: 'yes'}, 
  {index: 20, name: "Fort Worth Water Gardens", type: 'landmark', location: 'Fort Worth', price: '$', outdoors: 'yes', address: "1502 Commerce St", description: 'A tourist oasis', kidFriendly: 'yes'}, 
  {index: 21, name: "Pappas Bros. Steakhouse", type: 'resturant', location: 'Dallas', price: '$$', outdoors: 'no', address: "10477 Lombardy Ln", description: 'A fine dining steakhouse', kidFriendly: 'yes'}, 
  {index: 22, name: "Cafe 43", type: 'resturant', location: 'Dallas', price: '$$$', outdoors: 'no', address: "2943 SMU Boulevard", description: 'An american restaurant', kidFriendly: 'yes'}, 
  {index: 23, name: "Cindi's NY Deli & Restaurant", type: 'resturant', location: 'Dallas', price: '$', outdoors: 'no', address: "3565 Forest Ln", description: 'An italian/jewish restaurant', kidFriendly: 'yes'}, 
  {index: 24, name: "Yardbird Table & Bar", type: 'resturant', location: 'Dallas', price: '$', outdoors: 'no', address: "2121 N Pearl St St 170", description: 'An industrial american restaurant', kidFriendly: 'no'}, 
  {index: 25, name: "Oak Cliff Nature Preserve", type: 'nature', location: 'Dallas', price: '$', outdoors: 'yes', address: "2875 Pierce St", description: 'A nature reserve', kidFriendly: 'yes'}, 
  {index: 26, name: "NorthPark Center", type: 'shopping', location: 'Dallas', price: '$$', outdoors: 'no', address: "8687 N Central Expy", description: 'An upscale, enclosed shopping mall', kidFriendly: 'yes'}, 
  {index: 27, name: "Galleria Dallas", type: 'shopping', location: 'Dallas', price: '$$$', outdoors: 'no', address: "13350 Dallas Pkwy", description: 'A large, enclosed shopping mall', kidFriendly: 'no'}, 
  {index: 28, name: "Dallas Museum of Art", type: 'museum', location: 'Dallas', price: '$$', outdoors: 'no', address: "1717 N Harwood St", description: 'An art museum', kidFriendly: 'yes'}, 
  {index: 29, name: "The Grassy Knoll", type: 'landmark', location: 'Dallas', price: '$', outdoors: 'yes', address: "411 Elm St", description: 'Historical landmark where JFK was shot', kidFriendly: 'no'}, 
  {index: 30, name: "Reunion Tower", type: 'landmark', location: 'Dallas', price: '$$$', outdoors: 'no', address: "300 Reunion Blvd E", description: 'A large observation tower', kidFriendly: 'yes'}, 
  {index: 31, name: "Vic & Anthony's Steakhouse", type: 'resturant', location: 'Houston', price: '$$$', outdoors: 'no', address: "1510 Texas Ave", description: 'A fine dining steakhouse', kidFriendly: 'yes'}, 
  {index: 32, name: "Frenchy's Chicken", type: 'resturant', location: 'Houston', price: '$', outdoors: 'no', address: "4646 Scott St", description: 'A fast food chicken resturant', kidFriendly: 'yes'}, 
  {index: 33, name: "Timmy Chan", type: 'resturant', location: 'Houston', price: '$', outdoors: 'no', address: "5426 Antoine Dr", description: 'A no-frills chinese resturant', kidFriendly: 'yes'}, 
  {index: 34, name: "El Tiempo Cantina", type: 'resturant', location: 'Houston', price: '$$', outdoors: 'no', address: "322 Westheimer Rd", description: 'A Tex-Mex resturant', kidFriendly: 'yes'}, 
  {index: 35, name: "Children's Museum of Houston", type: 'museum', location: 'Houston', price: '$', outdoors: 'no', address: "1500 Binz St", description: 'A family musueum', kidFriendly: 'yes'}, 
  {index: 36, name: "Houston Arboretum & Nature Center", type: 'nature', location: 'Houston', price: '$', outdoors: 'yes', address: "4501 Woodway Dr", description: 'An arboretum and nature center', kidFriendly: 'yes'}, 
  {index: 37, name: "Houston Museum of Natural Science", type: 'museum', location: 'Houston', price: '$$', outdoors: 'no', address: "5555 Hermann Park Dr", description: 'A natural science musueum', kidFriendly: 'yes'}, 
  {index: 38, name: "The Galleria", type: 'shopping', location: 'Houston', price: '$$$', outdoors: 'no', address: "5085 Westheimer Rd,", description: 'A large upscale shopping mall', kidFriendly: 'no'}, 
  {index: 39, name: "Memorial City Mall", type: 'shopping', location: 'Houston', price: '$$', outdoors: 'no', address: "303 Memorial City Way", description: 'A large shopping mall', kidFriendly: 'yes'}, 
  {index: 40, name: "Minute Maid Park", type: 'landmark', location: 'Houston', price: '$$', outdoors: 'yes', address: "501 Crawford St", description: 'A ballpark', kidFriendly: 'yes'}, 
  {index: 41, name: "North Italia", type: 'resturant', location: 'Austin', price: '$$$', outdoors: 'no', address: "1917 Manor Rd", description: 'An italian restaurant', kidFriendly: 'yes'}, 
  {index: 42, name: "Salty Sow", type: 'resturant', location: 'Austin', price: '$$', outdoors: 'no', address: "1917 Manor Rd", description: 'An american resturant', kidFriendly: 'yes'}, 
  {index: 43, name: "ATX Cocina", type: 'resturant', location: 'Austin', price: '$$$', outdoors: 'no', address: "110 San Antonio St #170", description: 'A mexican resturant', kidFriendly: 'yes'}, 
  {index: 44, name: "Roaring Fork", type: 'resturant', location: 'Austin', price: '$', outdoors: 'no', address: "701 Congress Ave", description: 'An american resturant', kidFriendly: 'yes'}, 
  {index: 45, name: "Bullock Texas State History Museum", type: 'museum', location: 'Austin', price: '$', outdoors: 'no', address: "1800 Congress Ave", description: 'A history museum', kidFriendly: 'yes'}, 
  {index: 46, name: "LBJ Presidential Library", type: 'museum', location: 'Austin', price: '$', outdoors: 'no', address: "2313 Red River St", description: 'A presidential library and museum', kidFriendly: 'no'}, 
  {index: 47, name: "Barton Creek Square", type: 'shopping', location: 'Austin', price: '$$', outdoors: 'no', address: "2901 S Capital of Texas Hwy", description: 'An enclosed shopping mall', kidFriendly: 'yes'}, 
  {index: 48, name: "Mayfield Park and Nature Preserve", type: 'nature', location: 'Austin', price: '$', outdoors: 'yes', address: "3505 W 35th St", description: 'A nature preserve', kidFriendly: 'yes'}, 
  {index: 49, name: "Texas State Capitol", type: 'landmark', location: 'Austin', price: '$$', outdoors: 'no', address: "1100 Congress Ave", description: 'The capitol of Texas', kidFriendly: 'yes'}, 
  {index: 50, name: "Congress Avenue Bridge", type: 'landmark', location: 'Austin', price: '$', outdoors: 'yes', address: "Congress Ave", description: 'An arch bridge known for bats', kidFriendly: 'no'}, 
]

// Find matching attractions based on user critera
// If else statements
async function getList() {

  var typeSelect = document.getElementById("type-select");
  var typeValue = typeSelect.value;

  // Search for attractions type 
  if (typeValue == 'all') {
    typeMatchingLocations = attractionsObjectList.filter(x => x.type === 'resturant' || x.type === 'nature' || x.type === 'shopping' || x.type === 'museum' || x.type === 'landmark');
    console.log(typeMatchingLocations)
  } else if (typeValue == 'Resturant') {
    typeMatchingLocations = attractionsObjectList.filter(x => x.type === 'resturant');
    console.log(typeMatchingLocations)
  } else if (typeValue == 'Nature') {
    typeMatchingLocations = attractionsObjectList.filter(x => x.type === 'nature');
    console.log(typeMatchingLocations)
  } else if (typeValue == 'Shopping') {
    typeMatchingLocations = attractionsObjectList.filter(x => x.type === 'shopping');
    console.log(typeMatchingLocations)
  } else if (typeValue == 'Museums') {
    typeMatchingLocations = attractionsObjectList.filter(x => x.type === 'museum');
    console.log(typeMatchingLocations)
  } else if (typeValue == 'Landmarks') {
    typeMatchingLocations = attractionsObjectList.filter(x => x.type === 'landmark');
    console.log(typeMatchingLocations)
  }        

  var locationSelect = document.getElementById("location-select");
  var locationValue = locationSelect.value;

  // Search for attractions type 
  if (locationValue == 'all') {
    locationMatchingLocations = typeMatchingLocations.filter(x => x.location === 'Keller' || x.location === 'Fort Worth' || x.location === 'Dallas' || x.location === 'Houston' || x.location === 'Austin');
    console.log(locationMatchingLocations)
  } else if (locationValue == 'Keller') {
    locationMatchingLocations = typeMatchingLocations.filter(x => x.location === 'Keller');
    console.log(locationMatchingLocations)
  } else if (locationValue == 'Fort Worth') {
    locationMatchingLocations = typeMatchingLocations.filter(x => x.location === 'Fort Worth');
    console.log(locationMatchingLocations)
  } else if (locationValue == 'Dallas') {
    locationMatchingLocations = typeMatchingLocations.filter(x => x.location === 'Dallas');
    console.log(locationMatchingLocations)
  } else if (locationValue == 'Houston') {
    locationMatchingLocations = typeMatchingLocations.filter(x => x.location === 'Houston');
    console.log(locationMatchingLocations)
  } else if (locationValue == 'Austin') {
    locationMatchingLocations = typeMatchingLocations.filter(x => x.location === 'Austin');
    console.log(locationMatchingLocations)
  }
  
  var priceSelect = document.getElementById("price-select");
  var priceValue = priceSelect.value;

  // Search for attraction price range (EX: $$$)
  // $ = >$10
  // $$ = >$20
  // $$$ = $30+
  if (priceValue == 'all') {
    priceMatchingLocations = locationMatchingLocations.filter(x => x.price === '$' || x.price === '$$' || x.price === '$$$');
    console.log(priceMatchingLocations)
  } else if (priceValue == '$$') {
    priceMatchingLocations = locationMatchingLocations.filter(x => x.price === '$' || x.price === '$$');
    console.log(priceMatchingLocations)
  } else if (priceValue == '$') {
    priceMatchingLocations = locationMatchingLocations.filter(x => x.price === '$');
    console.log(priceMatchingLocations)
  } else if (priceValue == '$$$') {
    priceMatchingLocations = locationMatchingLocations.filter(x => x.price === '$$$');
    console.log(priceMatchingLocations)
  }

  var placeSelect = document.getElementById("place-select");
  var placeValue = placeSelect.value;

  // Search for attraction place (EX: Outdoors)
  if (placeValue == 'all') {
    placeMatchingLocations = priceMatchingLocations.filter(x => x.outdoors === 'yes' || x.outdoors === 'no');
    console.log(placeMatchingLocations)
  } else if (placeValue == 'Outdoors') {
    placeMatchingLocations = priceMatchingLocations.filter(x => x.outdoors === 'yes');
    console.log(placeMatchingLocations)
  } else if (placeValue == 'Indoors') {
    placeMatchingLocations = priceMatchingLocations.filter(x => x.outdoors === 'no');
    console.log(placeMatchingLocations)
  }

  var allAgesSelect = document.getElementById("allAges-select");
  var allAgesValue = allAgesSelect.value;

  // Search for attraction ages
  if (allAgesValue == 'all') {
    allAgesMatchingLocations = placeMatchingLocations.filter(x => x.kidFriendly === 'yes' || x.kidFriendly === 'no');
    console.log(allAgesMatchingLocations)
  } else if (allAgesValue == 'yes') {
    allAgesMatchingLocations = placeMatchingLocations.filter(x => x.kidFriendly === 'yes');
    console.log(allAgesMatchingLocations)
  } else if (allAgesValue == 'no') {
    allAgesMatchingLocations = placeMatchingLocations.filter(x.kidFriendly === 'no');
    console.log(allAgesMatchingLocations)
  }

  // Send attraction that match critera to list.html to be displayed in generated div elements
  localStorage.setItem('locations', JSON.stringify(allAgesMatchingLocations));

}