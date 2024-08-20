const insertionSort = (arr) => {
  //iterating from the second element (index 1) to the end of the array
  for (let i = 1; i < arr.length; i++) {
    // Storing the current value in a variable
    let currentValue = arr[i];
    //Initializing the current variable 'j' to track the sorted portion of the array
    let j = i - 1;
    //Shifting elements in the sorted portion to the right if they are greater than the current value
    while (j >= 0 && arr[j] > currentValue) {
      arr[j + 1] = arr[j];
      j--; //moving the index to the left
    }
    //Placing the current value in its correct position within the sorted portion
    arr[j + 1] = currentValue;
  }
  return arr; //the sorted array is returned
};

//calling the function example
let myArray = [3, 7, 4, 10, 12];
console.log(insertionSort(myArray)); // returns [3, 4, 7, 10, 12]
