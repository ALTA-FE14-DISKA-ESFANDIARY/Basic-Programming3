function joinArrayRemoveDuplicate(arrayA, arrayB) {
    let mergedArray = arrayA.concat(arrayB); 
  
    let uniqueArray = []; 
  
    for (let i = 0; i < mergedArray.length; i++) {
      if (uniqueArray.indexOf(mergedArray[i]) === -1) { 
        uniqueArray.push(mergedArray[i]); 
      }
    }
  
    return uniqueArray;
  }
  
  console.log(joinArrayRemoveDuplicate(["apel", "anggur"], ["lemon", "leci", "nanas"]));
  console.log(joinArrayRemoveDuplicate(["samsung", "apple"], ["apple", "sony", "xiaomi"]));
  console.log(joinArrayRemoveDuplicate(["football", "basketball"], ["basketball", "football"]));
