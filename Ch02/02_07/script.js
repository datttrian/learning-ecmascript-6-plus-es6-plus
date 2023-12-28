const books = new Set();
books.add("Prime and Prejudice");
books.add("War and Peace").add("Oliver Twist");
books.add("War and Peace");

console.log(books);
console.log(books.size);

books.delete("Oliver Twist");
books.forEach((item) => {
  console.log(item);
});
console.log("has Oliver Twist", books.has("Oliver Twist"));
