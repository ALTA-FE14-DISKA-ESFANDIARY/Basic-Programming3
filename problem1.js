function compareString(a, b) {
    let longestSubstring = '';
  
    for (let i = 0; i < a.length; i++) {
      for (let j = i + 1; j <= a.length; j++) {
        const substring = a.substring(i, j);
  
        if (b.indexOf(substring) !== -1 && substring.length > longestSubstring.length) {
          longestSubstring = substring;
        }
      }
    }
  
    return longestSubstring;
  }
  
  console.log(compareString("AKA", "AKASHI"));     
  console.log(compareString("KANGAROO", "KANG"));  
  console.log(compareString("KI", "KIJANG"));      
  console.log(compareString("KUPU-KUPU", "KUPU")); 
  console.log(compareString("ILALANG", "ILA"));    