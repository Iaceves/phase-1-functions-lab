// Code your solution in this file!
// input: 
function distanceFromHqInBlocks(someValue) {
let hqLocation = 42;

let numberOfBlocks = Math.abs(someValue - hqLocation);
  return numberOfBlocks;
}

function distanceFromHqInFeet(blocks){
  let numberOfBlocks = distanceFromHqInBlocks(blocks)
  let distanceInFeet = 264;
  let totalDistance = distanceInFeet * numberOfBlocks;

  return totalDistance;
}

function distanceTravelledInFeet(start, end){

 let numberOfBlocks = Math.abs(start - end);
 let distanceTravel = Math.abs(numberOfBlocks * 264);

 return distanceTravel;
}

function calculatesFarePrice(start, destination){
  let freeTravelDistance = 400;
  let travelDistance = distanceTravelledInFeet(start, destination);
  let totalCharge 
  
  if (400 < travelDistance){
   totalCharge = travelDistance * 2;
  
  }
  return totalCharge
}