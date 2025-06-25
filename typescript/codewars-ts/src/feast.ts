export function feast(beast:string, dish:string):boolean {
  // Your Code
  if (beast[0] && dish[0] == beast.charAt(beast.length-1) && dish.charAt(dish.length-1)) {
    return true
  }
  else {
    return false
  }
}