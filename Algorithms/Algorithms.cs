using System;

namespace DeveloperSample.Algorithms
{
    public static class Algorithms
    {
        public static int GetFactorial(int n) {
            if (n == 1)
                return 1;
            else
                return n * GetFactorial(n - 1);
        }

        public static string FormatSeparators(params string[] items) {
            string newString = String.Join(", ", items);
            int lastCommaIndex = newString.LastIndexOf(",");
            string result = String.Concat(newString.Substring(0, lastCommaIndex), " and", newString.Substring(lastCommaIndex+1));
           
            return result;
        }
    }
}