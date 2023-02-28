/*
You are a web developer for a publishing firm who is looking to build something that can check for the strength and security of passwords of its users' accounts. So, your boss wants you to write an algorithm that can do just that. 

Write a function called passwordChecker that takes in one parameter called inputPassword, which you can expect will always be a string representing a password. 

Your function should do two things:
1. Remove all the vowels from the password. This should help with making the passwords harder to guess!
2. Check if the resulting password is at least 8 characters long
If it isn't, add a number of exclamation points equal to the difference to the password.
3. Lastly, returns the resulting, more secure password. 

For example,
If your function was given an inputPassword argument like "helloworld"

Your function would first remove all of the vowels, resulting in a password like "hllwrld".

Then, because the resulting password is less than 8 characters, would add 1 exclamation point to give you "hllwrld!"

Another example,
If your function was given an inputPassword argument like "abc123"

Your function would first remove all of the vowels, resulting in a password like "bc123"

Then, because the resulting password is less than 8 characters, would add 3 exclamation points to give you "bc123!!!"

One last example,
If your function was given an inputPassword argument like "abcdefghijk"

Your function would first all of the vowels, resulting in "bcdfghjk"

Then, because the resulting password is not less than 8 characters, would be returned as is. 

*/

// Write your code below: 