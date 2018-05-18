/* App.js contains jQuery code, powering the front-end with JavaScript.
Mostly UI stuff */
console.log('app.js linked');

// AngularJS
var app = angular.module('ng-booktionary', [])

app.controller('BookController', BookController);
app.controller('BookAsyncController', BookAsyncController);

function BookController(){
  let vm = this;
  vm.bookList = [
    {
      title: "Percy Jackson & the Lightning Thief",
      author: "Rick Riordan",
      haveRead: true
    },
    {
      title: "Harry Potter & the Deathly Hallows",
      author: "J.K. Rowling",
      haveRead: true
    },
    {
      title: "Hitchhicker's Guide to the Galaxy",
      author: "Douglas Adams",
      haveRead: true
    },
  ];
  console.log('server-side: ', vm);
};

BookAsyncController.$inject = ['$http'];
function BookAsyncController($http){
  let vm = this;
  $http({
    method: 'GET',
    url: '/api/books'
  }).then(function successCallback(res) {
    vm.bookList = res.data;
    console.log('async', vm);
  }, function errorCallback(res) {
    console.log('$http fail: ', res);
  });
}

// jQuery
$(document).ready(function() {
  // jQuery Sanity Check
  $('h1').css('color', 'blue');
  // Get all books
  $.ajax({
    method: "GET",
    url: "/api/books",
    success: onBooksSuccess,
    error: onError
    });
});

// Functions declared outisde pageload
function onBooksSuccess(books){
  console.log('$.ajax: ', books);
  renderAllBooks(books);
}

function renderOneBook(book){
  let div =
    `<div style="background-color:coral;">
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
