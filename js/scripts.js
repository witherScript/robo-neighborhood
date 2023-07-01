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

/*
utility function to display the array in a card element
*/

function toCardElement(element, index) {
  const cardDiv = document.createElement('div');
  cardDiv.classList.add('card', 'border-primary', 'mb-3');
  cardDiv.style.maxWidth = '18rem';

  const cardHeader = document.createElement('div');
  cardHeader.classList.add('card-header');
  cardHeader.textContent = 'Array value at location ' + index;

  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body', 'text-primary');

  const cardTitle = document.createElement('h5');
  cardTitle.classList.add('card-title');
  cardTitle.textContent = 'Value: ' + element;

  const cardText = document.createElement('p');
  cardText.classList.add('card-text');
  cardText.textContent = 'Index: ' + index + ', Value: ' + element;
  cardText.id = 'elementNum-' + (index + 1).toString();

  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardText);
  cardDiv.appendChild(cardHeader);
  cardDiv.appendChild(cardBody);

  return cardDiv;


}

function displayArray(array) {

  const divResults = document.getElementById('results');
  divResults.innerHTML = '';
  array.forEach((element, index) => {

    divResults.appendChild(toCardElement(element, index));

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
