function* director() {
  yield "Three";
  yield "Two";
  yield "One";
  yield "Action";
}

const countdown = director();

console.log(countdown.next().value);
console.log(countdown.next().value);
console.log(countdown.next().value);
console.log(countdown.next().value);
console.log(countdown.next());
