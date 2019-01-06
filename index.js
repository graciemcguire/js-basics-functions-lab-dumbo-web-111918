function  distanceFromHqInBlocks (block){
  const hq = 42
  let distance
    if (block < hq){
    distance = hq - block
    }
    else if(block > hq){
     distance = block - hq}
  return distance
}

function distanceFromHqInFeet(block){
  return distanceFromHqInBlocks(block)*264
}

function distanceTravelledInFeet(block1, block2){
  let distance
    if (block1 < block2){
    distance = block2 - block1
    }
    else if(block1 > block2){
     distance = block1 - block2 }
  return distance * 264
}

function calculatesFarePrice(block1, block2){
  let totalFeet = distanceTravelledInFeet(block1, block2);
  
  if (totalFeet > 2500) {
    return 'cannot travel that far'
  } else if (totalFeet <= 400){
    return 0
  }
  else if (totalFeet > 2000) {
    return 25
  } else {
    return (totalFeet - 400) * .02
  }
}
