

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