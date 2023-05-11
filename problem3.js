function removeDuplicate(arr) {
    let uniqueArray = [];
    for (let i = 0; i < arr.length; i++) {
      if (uniqueArray.indexOf(arr[i]) === -1) {
        uniqueArray.push(arr[i]);
      }
    }
    return uniqueArray;
  }
  
  console.log(removeDuplicate([1, 1, 2, 2, 3, 3, 4, 4]));