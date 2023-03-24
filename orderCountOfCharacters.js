/* 
Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. For empty output return (an empty list).

Consult the solution set-up for the exact data structure implementation depending on your language.

Example:

orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]

*/

const orderedCount = function (text) {
  // Implement me!
  let cache = new Map();

  text.split("").forEach((value) => {
    if (!cache.has(value)) {
      cache.set(value, 0);
    }
    cache.set(value, cache.get(value) + 1);
  });

  const keys = Array.from(cache.keys());

  return [
    ...Array.from({ length: keys.length }, (_, i) => [
      keys[i],
      cache.get(keys[i]),
    ]),
  ];
};
