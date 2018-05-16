var db = require("./models");

var bookList =[];

bookList.push({
  title: "Harry Potter & the Prisoner of Azkaban",
  author: "J.K. Rowling",
  haveRead: true,
});
bookList.push({
  title: "Sacred Journey of the Peaceful Warrior",
  author: "Dan Millman",
  haveRead: true,
});
bookList.push({
  title: "Moby Dick",
  author: "Herman Melville",
  haveRead: false,
});

db.Book.remove({}, function(err, books){
  // code in here runs after all classes are removed
  db.Book.create(bookList, function(err, books){
    // code in here runs after all classes are created
    if (err) { return console.log('ERROR', err); }
    console.log("all books:", books);
    console.log("created", books.length, "books");
    process.exit();
  });
});
