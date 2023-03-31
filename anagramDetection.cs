/* 
An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

Examples
"foefet" is an anagram of "toffee"

"Buckethead" is an anagram of "DeathCubeK"

*/

using System;

public class Kata
{
  public static string SortedString(string stringToSort)
  {
      char[] charArray = stringToSort.ToLower().ToCharArray();
      Array.Sort(charArray);  
      return String.Join("", charArray);
  }
  
  
  public static bool IsAnagram(string test, string original)
  {
    
    return SortedString(test) == SortedString(original) ? true : false;
  }
}