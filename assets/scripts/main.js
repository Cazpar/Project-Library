const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked;

    const book = new Book(title, author, pages, read);
    myLibrary.push(book);

    // Clear input fields
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('pages').value = '';
    document.getElementById('read').checked = false;

    render();
}

function render() {
    const container = document.getElementById('container');
    container.innerHTML = '';

    myLibrary.forEach((book, index) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <h2>${book.title}</h2>
            <p>Author: ${book.author}</p>
            <p>Pages: ${book.pages}</p>
            <p>${book.read ? 'Read' : 'Not read'}</p>
            <button onclick="deleteBook(${index})">Delete</button>
            <button onclick="myLibrary[${index}].read = !myLibrary[${index}].read; render();">Toggle read</button>
        `;
        container.appendChild(card);
    });
}

function deleteBook(index) {
    myLibrary.splice(index, 1);
    render();
}

// open dialog on button click
document.getElementById('new-book-button').addEventListener('click', () => {
    document.getElementById('new-book-dialog').showModal();
});

// Add the book to the library and close the dialog
document.getElementById('confirm-add-book').addEventListener('click', () => {
    addBookToLibrary();
    document.getElementById('new-book-dialog').close();
});

// Initial render
render();
