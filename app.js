 //deleting books
 const list = document.querySelector('#book-list ul');

 list.addEventListener('click', (e) => {
     if (e.target.className == 'delete') {
         const li = e.target.parentNode;
         list.removeChild(li);
     }
 });
 //adding books
 const add = document.forms['add-book'];
 add.addEventListener('submit', (e) => {
     e.preventDefault();
     const val = add.querySelector('input[type="text"]').value;
     //creating elements
     const li = document.createElement('li');
     const bookName = document.createElement('span');
     const delBtn = document.createElement('span');
     bookName.textContent = val;
     delBtn.textContent = "Delete";
     bookName.classList.add('name');
     delBtn.classList.add('delete');
     //Appending
     li.appendChild(bookName);
     li.appendChild(delBtn);
     list.appendChild(li);
 });
 //hide the books
 const hide = document.querySelector('#hide');
 hide.addEventListener('change', (e) => {
     if (hide.checked) {
         list.style.display = "none";
     } else {
         list.style.display = "initial";
     }
 });
 //search books
 const search = document.forms['search-books'].querySelector('input');
 search.addEventListener('keyup', (e) => {
     const term = e.target.value.toLowerCase();
     const books = document.getElementsByTagName('li');
     Array.from(books).forEach((book) => {
         const title = book.firstElementChild.textContent;
         if (title.toLowerCase().indexOf(term) != -1) {
             book.style.display = "block";
         } else {
             book.style.display = "none";
         }
     });
 });