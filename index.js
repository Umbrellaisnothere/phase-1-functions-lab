// Code your solution in this file!
function distanceFromHqInBlocks(pickup){
    const destinationBlock = 42;
    if (pickup > destinationBlock)
    {
        return pickup - destinationBlock
}else
    {
    return destinationBlock - pickup;
}
}

function distanceFromHqInFeet(pickup){
   const distanceInBlocks = distanceFromHqInBlocks(pickup)
    
   return distanceInBlocks * 264; 

}

function distanceTravelledInFeet(pickup, destinationBlock){
    if (pickup > destinationBlock) {
        return (pickup - destinationBlock) * 264;     
}else 
    {
        return (destinationBlock - pickup) *264
    }
}

function calculatesFarePrice(pickup, destinationBlock){
    const totalFeetTraveled = distanceTravelledInFeet (pickup, destinationBlock);
    if (totalFeetTraveled <= 400 ){
    return 0;}
    else if(totalFeetTraveled > 400 & totalFeetTraveled <=2000) {
        const excessFeet = totalFeetTraveled - 400;
return excessFeet * 0.02;
}else if (totalFeetTraveled > 2000 & totalFeetTraveled <=2500){
    return 25.0;
} else {
    return 'cannot travel that far';
}
}