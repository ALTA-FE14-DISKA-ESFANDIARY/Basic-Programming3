function meanMedian(arr) {
    let n = arr.length;
    let mean = arr.reduce((a, b) => a + b) / n;
    mean = parseFloat((mean).toFixed(1)); 
  
    let median;
    if (n % 2 === 0) {
      median = (arr[n/2 - 1] + arr[n/2]) / 2;
    } else {
      median = arr[(n - 1) / 2];
    }
    median = parseFloat((median).toFixed(1)); 
  
    console.log("Mean: " + mean);
    console.log("Median: " + median);
  }
  
  let arr = [1, 2, 3, 4];
  meanMedian(arr); 