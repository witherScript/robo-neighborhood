/*
Business Logic
*/

function getArray(number) {

  const numArr = new Array(number + 1);
  for (let index = 0; index < numArr.length; index++) {
    //if branching to check for 3, 2, 1 in that order of priority
    if (index.toString().includes('3')) {
      numArr[index] = "Won't you be my neighbor?";
    }
    else if (index.toString().includes('2')) {
      numArr[index] = "Boop!";
    }
    else if (index.toString().includes('1')) {
      numArr[index] = "Beep!";
    }
    else {
      numArr[index] = index;
    }
  }
  return numArr;
}

/* 
UI Logic 
*/

function hideElement(element) {
  element.classList.add('hidden');
}

function unhideElement(element) {
  element.classList.remove('hidden');
}

function displayArray(array) {

  const divResults = document.getElementById('results');
  divResults.innerHTML = '';
  console.log(array);
  array.forEach((element, index) => {
    const p = document.createElement('p');
    p.textContent = 'Index: ' + index + ', Value: ' + element;
    p.id = 'elementNum-' + (index + 1).toString();
    divResults.appendChild(p);

  });

  unhideElement(divResults);
  unhideElement(document.getElementById('reset'));

}

function resetForm() {
  const form = document.getElementById('number-form');
  const resultsDiv = document.getElementById('results');
  const resetButton = document.getElementById('reset');
  hideElement(resultsDiv);
  hideElement(resetButton);
  unhideElement(form);
  form.reset();
}

function handleSubmission(event) {
  event.preventDefault();
  const form = document.getElementById('number-form');
  const input = document.querySelector('input#user-number').value;
  const array = getArray(parseInt(input));
  const resetButton = document.getElementById('reset');
  displayArray(array);
  hideElement(form);

  resetButton.addEventListener('click', resetForm);
}


//make sure the window is loaded before we try to add event listeners
window.addEventListener('load', handleUserInput);

function handleUserInput() {
  const form = document.getElementById('number-form');
  form.addEventListener('submit', handleSubmission);
}
