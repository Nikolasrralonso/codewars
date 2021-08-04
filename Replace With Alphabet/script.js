function alphabetPosition(text) {
    // remove spaces and define a-z 
      const words = text.toLowerCase().replace(/[^a-z]/g,"");
    // create array and map it to charCode (a=97,b=98,etc... so using -96)
      let arr =  [...words].map(x=> Number(x.charCodeAt()-96));
    //joining array with spaces
      return arr.join(' ')
  }
  