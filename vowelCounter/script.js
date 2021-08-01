// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.


function getCount(str) {
    let vowelsCount = 0; // starting with 0 Vowels
    let vowels = ["a", "e", "i", "o", "u"]; // Vowels to match
    
     for (let i = 0; i < str.length; i++) { // Iterate over string
      for (let j = 0; j < vowels.length; j++) { // iterate over vowels[]
        if (str.charAt(i) == vowels[j]) { // validates if [j] = vowels
          vowelsCount++; // increase vowel counter
        }
    }
    return vowelsCount;
  }
}