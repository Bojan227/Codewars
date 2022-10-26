/* 
Sort the given array of strings in alphabetical order, case insensitive. For example:

["Hello", "there", "I'm", "fine"]  -->  ["fine", "Hello", "I'm", "there"]
["C", "d", "a", "B"])              -->  ["a", "B", "C", "d"]

*/

// input: names - unsorted strings
// output: case-agnostic sort
sortme = function (names) {
    if (names.length === 0) return [];
    if (names.length === 1) return names;
  
    return names.sort((a, b) => {
      if (a.toLowerCase() >= b.toLowerCase()) {
        return 1;
      } else {
        return -1;
      }
    });
  };