console.log('app.js linked');

$(document).ready(function() {
  $('h1').css('color', 'blue');

  $.ajax({
    method: "GET",
    url: "/api/books",
    success: onBooksSuccess,
    error: onError
    });


});

function onBooksSuccess(books){
  console.log('$.ajax: ', books);
  renderAllBooks(books);
}

function renderOneBook(book){
  let div =
    `<div class="card">
    <h4>${book.title}</h5>
    <p>by ${book.author}</p>
    <p>Have Read? ${book.haveRead}</p>
    </div>`
    // Prepend book data to viewport
    $('.viewport').prepend(div);
}

function renderAllBooks(books){
  books.forEach(function(book){
    renderOneBook(book);
  })
}

function onError(err){
  console.log('$.failjax: ', err);
}
