const container = document.querySelector('.container');
const myLibrary = [];

function Book(title, author, pages) {
  (this.title = title), (this.author = author), (this.pages = pages);
}

function addBooktoLibrary(book) {
  myLibrary.push(book);
}

//function that takes the book object and turns it into html
function displayBook(book) {
  //create a div for the book card
  const card = document.createElement('div');
  //create p elements for the individual book properties
  const title = document.createElement('p');
  title.textContent = book.title;
  const author = document.createElement('p');
  author.textContent = book.author;
  const pages = document.createElement('p');
  pages.textContent = book.pages;
  //append p elements to the card
  card.appendChild(title);
  card.appendChild(author);
  card.appendChild(pages);
  //append card to container
  container.appendChild(card);
  //apply card class to the card
  card.classList.add('card');
}

const dune = new Book('dune', 'herbert', 800);
const hobbit = new Book('the hobbit', 'tolken', 300);
const jurassic = new Book('jurassic', 'mike c', 800);

addBooktoLibrary(dune);
addBooktoLibrary(hobbit);
addBooktoLibrary(jurassic);

//loop over myLibrary and display the books
myLibrary.forEach((book) => displayBook(book));
