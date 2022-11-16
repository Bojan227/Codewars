/* 
Given a node object representing a binary tree:

public class Node
{  
    public int Value;  
    public Node Left;  
    public Node Right;
    
    public Node(int value, Node left = null, Node right = null)
    {
      Value = value;
      Left = left;
      Right = right;
    }
}  
write a function that returns the sum of all values, including the root. Absence of a node will be indicated with a null value.

Examples:

10
| \
1  2
=> 13

1
| \
0  0
    \
     2
=> 3

*/


// return the sum of all values in the tree, including the root
function sumTheTreeValues(root) {
    const queue = [root];
  
    let sum = 0;
  
    while (queue.length > 0) {
      const current = queue.shift();
      sum += current.value;
      if (current.left !== null) queue.push(current.left);
      if (current.right !== null) queue.push(current.right);
    }
  
    return sum;
  }