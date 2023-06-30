/*
Test: "It should return an array of numbers from 0 to the user's inputted number"
Code: beepBoop(0);
Expected Output: [0]
*/

function getArray(number) {

  const numArr = new Array(number + 1);
  for (let index = 0; index < numArr.length; index++) {
    numArr[index] = index;
  }

  return numArr;
}