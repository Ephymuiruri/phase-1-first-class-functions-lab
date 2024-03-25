// Code your solution in this file!
let drivers=["Antonia", "Nuru", "Amari", "Mo"];
const returnFirstTwoDrivers = function (drivers)  {
    return drivers.slice(0,2)
}
const returnLastTwoDrivers = function (drivers)  {
    return drivers.slice(-2)
}
   // Return an array containing the two elements //
const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers];
let multiplier;
function createFareMultiplier(multiplier){
return( (fare)=>{return fare*multiplier})}
const Doubler = (fare)=>{
    createFareMultiplier(multiplier=2)
    return fare*multiplier}
function fareDoubler (fare){
    return Doubler(fare)
}
console.log(fareDoubler(6))
const  tripler = (fare)=>{
    createFareMultiplier(multiplier=3)
    return fare*multiplier}
function fareTripler (fare){
    return tripler(fare)
}
console.log(fareTripler(3))
function selectDifferentDrivers(drivers, callbackFunction) {
    if (callbackFunction === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(drivers);
    } else {
        return returnLastTwoDrivers(drivers);
    }
}

