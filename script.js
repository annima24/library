const container = document.querySelector('.display-container');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const submitButton = document.querySelector('#submit-button');
const myLibrary = [];
const formButton = document.querySelector('.open-form-button');
const form = document.querySelector('#form');
const formContainer = document.querySelector('.form-container');

function Book(title, author, pages) {
  (this.title = title), (this.author = author), (this.pages = pages);
}

function addBooktoLibrary(book) {
  myLibrary.push(book);
}

function createCard(index) {
  const newCard = document.createElement('div');
  newCard.setAttribute('data-number', index);
  return newCard;
}

function createTitleText(book) {
  const newTitleText = document.createElement('p');
  newTitleText.textContent = `Title: ${book.title}`;
  newTitleText.classList = 'card-element';
  return newTitleText;
}

function createAuthorText(book) {
  const newAuthorText = document.createElement('p');
  newAuthorText.textContent = `Author: ${book.author}`;
  newAuthorText.classList = 'card-element';
  return newAuthorText;
}

function createPagesText(book) {
  const newPagesText = document.createElement('p');
  newPagesText.textContent = `Pages: ${book.pages}`;
  newPagesText.classList = 'card-element';
  return newPagesText;
}

function createReadStatusText() {
  const newReadStatusText = document.createElement('p');
  newReadStatusText.textContent = `Status: Completed`;
  newReadStatusText.classList = 'card-element';
  return newReadStatusText;
}

function createChangeStatusButton() {
  const newChangeStatusButton = document.createElement('button');
  newChangeStatusButton.type = 'button';
  newChangeStatusButton.textContent = 'Change status';
  newChangeStatusButton.classList = 'card-button';
  return newChangeStatusButton;
}

function createRemoveBookButton() {
  const newRemoveBookButton = document.createElement('button');
  newRemoveBookButton.type = 'button';
  newRemoveBookButton.classList = 'removeBook';
  newRemoveBookButton.textContent = 'Remove Book';
  newRemoveBookButton.classList = 'card-button';
  return newRemoveBookButton;
}

function createCardTextContainer() {
  const cardTextContainerDiv = document.createElement('div');
  cardTextContainerDiv.classList = 'card-text-container';
  return cardTextContainerDiv;
}

function createButtonContainer() {
  const newButtonContainerDiv = document.createElement('div');
  newButtonContainerDiv.classList = 'button-container';
  return newButtonContainerDiv;
}

//function that takes the book object and turns it into html, also takes an index number to create a data attribute to associate the dom element so it can be maniuplated with js.
function displayBook(book, i) {
  //variable that represents if the book has already been read, default value false.
  let status = true;
  //creating all of the elements that will be displayed on the card
  const card = createCard(i);
  const cardTextContainer = createCardTextContainer();
  const title = createTitleText(book);
  const author = createAuthorText(book);
  const pages = createPagesText(book);
  const readStatus = createReadStatusText();
  const buttonContainer = createButtonContainer();
  const changeStatusButton = createChangeStatusButton();
  const removeBookButton = createRemoveBookButton();

  //event handlers for the button clicks.
  changeStatusButton.addEventListener('click', function () {
    if (status == false) {
      status = true;
      readStatus.textContent = 'Status: Completed';
    } else if (status == true) {
      status = false;
      readStatus.textContent = `Status: Not completed`;
    }
  });
  removeBookButton.addEventListener('click', function () {
    removeBookFromLibrary(card.getAttribute('data-number'));
  });

  //append p elements to the card
  cardTextContainer.appendChild(title);
  cardTextContainer.appendChild(author);
  cardTextContainer.appendChild(pages);
  cardTextContainer.appendChild(readStatus);
  buttonContainer.appendChild(changeStatusButton);
  buttonContainer.appendChild(removeBookButton);
  card.appendChild(cardTextContainer);
  card.appendChild(buttonContainer);
  //append card to container
  container.appendChild(card);
  //apply card class to the card
  card.classList.add('card');
}

function removeBookFromLibrary(index) {
  myLibrary.splice(index, 1);
  container.textContent = '';
  myLibrary.forEach((book, i) => displayBook(book, i));
}

function submitButtonHandler() {
  const newBook = new Book(title.value, author.value, pages.value);
  addBooktoLibrary(newBook);
  clearForm();
  container.textContent = '';
  myLibrary.forEach((book, i) => displayBook(book, i));
}

function formButtonHandler() {
  if (
    formContainer.style.display === '' ||
    formContainer.style.display === 'none'
  ) {
    formContainer.style.display = 'block';
    formButton.textContent = 'Close';
  } else {
    formContainer.style.display = 'none';
    formButton.textContent = 'Add a Book!';
  }
}

function clearForm() {
  title.value = '';
  author.value = '';
  pages.value = '';
}

const dune = new Book('Dune', 'Herbert', 800);
addBooktoLibrary(dune);

const hobbit = new Book('The Hobbit', 'Tolkien', 300);
addBooktoLibrary(hobbit);

const hailMary = new Book('Hail Mary', 'Weir', 400);
addBooktoLibrary(hailMary);

//take values from form, create a new Book, add to myLibrary, display books.
submitButton.addEventListener('click', submitButtonHandler);
formButton.addEventListener('click', formButtonHandler);
//loop over myLibrary and display the books
myLibrary.forEach((book, i) => displayBook(book, i));
