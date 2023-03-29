/*
Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"

 */

using System;
using System.Linq;

public static class Kata
{
  public static string ReverseWords(string str)
  {
		//Write your code here
    string[] stringArray = str.Split(" "); 
      
    string[] reversed = stringArray.Select(c=>string.Join("", c.Reverse().ToArray())).ToArray();
      
    
    return string.Join(" ", reversed);
  }
}