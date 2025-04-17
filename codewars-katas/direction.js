function isValidWalk(walk) {
    if (walk.length !== 10) return false;
  
    let north = 0;
    let south = 0;
    let east = 0;
    let west = 0;
  
    for (let direction of walk) {
      if (direction === 'n') north++;
      if (direction === 's') south++;
      if (direction === 'e') east++;
      if (direction === 'w') west++;
    }
  
    return north === south && east === west;
  }
console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']));