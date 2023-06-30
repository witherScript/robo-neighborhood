/*
Test: "It should return an array of numbers from 0 to the user's inputted number"
Code: beepBoop(0);
Expected Output: [0]
*/

function getArray(number) {

  const numArr = new Array(number + 1);
  for (let index = 0; index < numArr.length + 1; index++) {
    if (index.toString().includes('3')) {
      numArr[index] = "Won't you be my neighbor?";
    }
    else if (index.toString().includes('2')) {
      numArr[index] = "Boop!";
    }
    else if (index.toString().includes('1')) {
      numArr[index] = "Beep!";
    }

  }
}