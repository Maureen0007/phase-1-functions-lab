function distanceFromHqInBlocks(destination) { 
    let hQ= 42;
    if (destination >= hQ) {
        return destination - hQ;
    }
    else {
        return hQ - destination
}
distanceFromHqInBlocks(43)
distanceFromHqInBlocks(50)
distanceFromHqInBlocks(34)
}
function distanceFromHqInFeet(destination) {
    let hQ = 42;
    if (destination >= hQ) {
        return (destination - hQ)*264;
    }
    else{
        return (hQ-destination)*264
    }
    
}
distanceFromHqInFeet(43)
distanceFromHqInFeet(50)
distanceFromHqInFeet(34)

let distanceTravelledInFeet = function (a, b) {
    if (a >= b) {
        return (a-b)*264
        
    }
    else{
        return (b-a)*264
    }
    
}
distanceTravelledInFeet(43, 48)
distanceTravelledInFeet(50, 60)
distanceTravelledInFeet(34, 28)

function calculatesFarePrice(start, destination) {
    let dist = distanceTravelledInFeet(start, destination)
    if (dist < 400) {
        return 0
    }
    else if (dist < 2000) {
        return (dist - 400)*0.02;
        
    }
    else if (dist <=2500) {
        return 25
        
    }
    else{
        return 'cannot travel that far';
    }

    
    
}
calculatesFarePrice(43, 48)
calculatesFarePrice(50,60)
calculatesFarePrice(34, 28)