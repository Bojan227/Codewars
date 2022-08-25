/* 
Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

For instance:

"hello case".camelCase() => HelloCase
"camel case word".camelCase() => CamelCaseWord

*/


String.prototype.camelCase = function () {
    if (this === '') return '';
  
    return this.split(' ')
      .map((word) => word.slice(0, 1).toUpperCase() + word.slice(1))
      .join('');
  };