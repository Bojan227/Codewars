/*
Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321

 */

 using System;
using System.Linq;
using System.Collections.Generic;

public static class Kata
{
  public static int DescendingOrder(int num)
  {
    // Bust a move right here
    List<int> result = num.ToString().Select(c => int.Parse(c.ToString())).ToList();    
    
    var numsInDesc = result.OrderByDescending(c=>c);
    
    var number = int.Parse(string.Join("", numsInDesc));
    

    return number;
  }
}
