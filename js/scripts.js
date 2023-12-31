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

  const cardHeaderTitle = document.createElement('i');
  cardHeaderTitle.classList.add('fa-solid');

  if (index < 10) {
    cardHeaderTitle.classList.add(`fa-${index}`);
  }
  else if (index < 100) {
    const firstDigitIcon = document.createElement('i');
    firstDigitIcon.classList.add('fa-solid', `fa-${index.toString()[0]}`);
    const secondDigitIcon = document.createElement('i');
    secondDigitIcon.classList.add('fa-solid', `fa-${index.toString()[1]}`);
    cardHeaderTitle.appendChild(firstDigitIcon);
    cardHeaderTitle.appendChild(secondDigitIcon);
  }
  else {

    const firstDigitIcon = document.createElement('i');
    firstDigitIcon.classList.add('fa-solid', `fa-${index.toString()[0]}`);
    const secondDigitIcon = document.createElement('i');
    secondDigitIcon.classList.add('fa-solid', `fa-${index.toString()[1]}`);
    const thirdDigitIcon = document.createElement('i');
    thirdDigitIcon.classList.add('fa-solid', `fa-${index.toString()[2]}`);

    cardHeaderTitle.appendChild(firstDigitIcon);
    cardHeaderTitle.appendChild(secondDigitIcon);
    cardHeaderTitle.appendChild(thirdDigitIcon);
  }

  cardHeader.append(cardHeaderTitle);


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

/*
utility function to handle array length greater than 1000
*/

function handleArrayGreaterThan1000(array) {
  const cardDiv = document.createElement('div');
  cardDiv.classList.add('card', 'border-primary', 'mb-3');
  cardDiv.style.maxWidth = '18rem';

  const cardHeader = document.createElement('div');
  cardHeader.classList.add('card-header');

  const cardHeaderTitle = document.createElement('i');
  cardHeaderTitle.classList.add('fa-circle-exclamation');
  cardHeaderTitle.classList.add('fa-solid');
  cardHeaderTitle.style.color = 'red';
  cardHeaderTitle.style.fontSize = '2rem';
  cardHeaderTitle.style.onmouseover = 'this.style.color = "blue"';
  cardHeaderTitle.style.onmouseout = 'this.style.color = "red"';
  cardHeaderTitle.style.cursor = 'help';
  cardHeader.append(cardHeaderTitle);

  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body', 'text-primary');


  const cardText = document.createElement('p');
  cardText.classList.add('card-text');
  cardText.textContent = 'Number too large to display. Please enter a number less than 1000.';


  cardBody.appendChild(cardText);
  cardDiv.appendChild(cardHeader);
  cardDiv.appendChild(cardBody);
  document.getElementById('results').appendChild(cardDiv);
  unhideElement(document.getElementById('results'));
  unhideElement(document.getElementById('reset'));
  document.getElementById('reset').addEventListener('click', resetForm);

}

/*
utility function to display the array in the DOM, notice error handling 
for array length greater than 1000 on line 154
*/
function displayArray(array) {

  const divResults = document.getElementById('results');
  divResults.innerHTML = '';
  if (array.length > 1000) {
    handleArrayGreaterThan1000(array);
  }
  else {
    array.forEach((element, index) => {

      divResults.appendChild(toCardElement(element, index));

    });

    unhideElement(divResults);
    unhideElement(document.getElementById('reset'));
  }

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
