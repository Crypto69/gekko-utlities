
//Check if we Crossed under a line
function CrossedUnder(xCur, xPrev, yCur, yPrev) {
  if ((xCur < yCur) && (xPrev > yPrev)) {
    return true;
  } else {
    return false;
  }
}
//Check if we Crossed over a line
function CrossedOver(xCur, xPrev, yCur, yPrev) {
  if ((xCur > yCur) && (xPrev < yPrev)) {
    return true;
  } else {
    return false;
  }
}
