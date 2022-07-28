/* 
Some new cashiers started to work at your restaurant.

They are good at taking orders, but they don't know how to capitalize words, 
or use a space bar!

All the orders they create look something like this:

"milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza"

The kitchen staff are threatening to quit, because of how difficult it is to 
read the orders.

Their preference is to get the orders as a nice clean string with spaces and 
capitals like so:

"Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke"

The kitchen staff expect the items to be in the same order as they appear in 
the menu.

The menu items are fairly simple, there is no overlap in the names of the 
items:

1. Burger
2. Fries
3. Chicken
4. Pizza
5. Sandwich
6. Onionrings
7. Milkshake
8. Coke

*/

function getOrder(input) {
    const cache = {
      0: 'Burger',
      1: 'Fries',
      2: 'Chicken',
      3: 'Pizza',    
      4: 'Sandwich',    
      5: 'Onionrings',    
      6: 'Milkshake',    
      7: 'Coke',    
    }
    
    const length = Object.keys(cache).length
    let result = ''
    for(let i = 0; i < length; i++){
      const split = input.split(cache[i].toLowerCase())
      if(input.includes(cache[i].toLowerCase())){
        result += `${cache[i]} `.repeat(split.length - 1)
        
      }
    }
    return result.trim()
    }