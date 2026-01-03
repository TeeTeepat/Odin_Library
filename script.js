let closeNewBook_btn = document.querySelector(".close-input");
let NewBook_btn = document.querySelector('.newBook');
let addNewBook = document.querySelector('.new-book-container')
let readChecks = document.querySelectorAll('.read-checker')
let myLibrary = [];


// open and close of add new book container
NewBook_btn.addEventListener("click" , ()=>{
    addNewBook.style.display = "flex";
})

closeNewBook_btn.addEventListener('click' , ()=>{
    addNewBook.style.display = "none";
})

//read or not read logo on card
readChecks.forEach(readCheck => {
    readCheck.addEventListener('input' , ()=>{
    if(readCheck.checked){
        document.querySelector('.read').style.display = 'block';
        document.querySelector('.notRead').style.display = 'none';
    } else {
        document.querySelector('.notRead').style.display = 'block';
        document.querySelector('.read').style.display = 'none';
    }
})
})

//add Book function
function Book(author , title , page) {
    this.author = author;
    this.title = title;
    this.page = page;
    this.read = false;
}


let summit = document.querySelector('form button')

function addBookToLibrary() {
    //add book when when user hit summit
    summit.addEventListener('click' , ()=>{
        let author = document.querySelector('#input-author');
        let title = document.querySelector('#input-title');
        let page = document.querySelector('#input-page');
        //create new book
        let book = new Book(author.value , title.value , page.value);
        //add new book to local storage
        myLibrary.push(book);
        displayBooks();
        readChecks = document.querySelectorAll('.read-checker');
        deleteCards = document.querySelectorAll(".delete-card");
        
        addNewBook.style.display = "none";
        document.querySelector('form').reset();
    })
}

//display book card
function displayBooks() {
    let container = document.querySelector('.container-bottom');
    container.innerHTML = "";

    myLibrary.forEach(book => {
        let card = document.createElement('div');
        card.classList.add('card'); 
        card.innerHTML += `
            <div class="book">
                    <span class="material-symbols-outlined notRead" id="notReadBook">book_2</span>
                    <span class="material-symbols-outlined read"id="ReadBook">book_5</span>
                </div>
                <div class="information">
                    <div class="author">
                        <p class="text-info">author : </p>
                        <p class="info">${book.author}</p>
                    </div>
                    <div class="title">
                        <p class="text-info">title : </p>
                        <p class="info">${book.title}</p>
                    </div>
                    <div class="page">
                        <p class="text-info">page : </p>
                        <p class="info">${book.page}</p>
                    </div>
                    <div class="read">
                        <label for="read-checker" style="font-weight: 600;">Read</label>
                        <input type="checkbox" id="read-checker">
                    </div>
                </div>
                <div class="delete-card">
                    <span class="material-symbols-outlined">cancel</span>
                </div>
        `
        container.appendChild(card);
    })
}


addBookToLibrary();

let deleteCards = document.querySelectorAll(".delete-card")

deleteCards.forEach(deleteCard => {
    deleteCard.addEventListener('click' , (e)=>{
        deleteCard.parentElement.remove();
    })
})

let bottomContainer = document.querySelector('.bottom-container');
