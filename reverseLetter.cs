/* 
Task
Given a string str, reverse it and omit all non-alphabetic characters.

Example
For str = "krishan", the output should be "nahsirk".

For str = "ultr53o?n", the output should be "nortlu".

Input/Output
[input] string str
A string consists of lowercase latin letters, digits and symbols.

[output] a string


*/


namespace myjinxin
{
    using System;
    using System.Text;   
    public class Kata
    {
        public string ReverseLetter(string str){
          char[] charArray = str.ToCharArray();
          Array.Reverse(charArray);
          string s = new string(charArray);        

          StringBuilder sb = new StringBuilder();
          foreach(var c in s)
{
	if ((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z'))
		sb.Append(c);
}
          
        return sb.ToString();
        }
    }
}