const delay = (seconds) =>
  new Promise((resolves) => {
    setTimeout(resolves, seconds * 1000);
  });

const countToFive = async () => {
  console.log("Zero seconds");
  await delay(1);
  console.log("One second");
  await delay(2);
  console.log("Two seconds");
  await delay(3);
  console.log("Three seconds");
};

countToFive();
