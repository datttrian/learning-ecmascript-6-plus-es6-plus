for (const letter of "JavaScript") {
  console.log(letter);
}

const topics = new Map();
topics.set("HTML", "/topic/html");
topics.set("CSS", "/topic/css");
topics.set("JavaScript", "/topic/javascript");

for (const topic of topics.entries()) {
  console.log(topic);
}
