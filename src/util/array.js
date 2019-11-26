
/**
 * Shuffles array in place.
 * @param {Array} a items An array containing the items.
 */
export function shuffle(a) {
  a = a.slice();
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}

/*
 * Remove consecutive elements from an array.
 * @param {Array} a items An array containing the items.
 */
export function removeConsecutiveMatches(a) {
  return a.filter(function(item, i){
    // Always keep the 0th element as there is nothing before it
    // Then check if each element is different than the one before it
    return i === 0 || item !== a[i-1];
  });
}
