const person = {
  first: "Angie",
  hobbies: ["bike", "hike", "ski"],
  printHobbies() {
    this.hobbies.forEach((hobby) => {
      const string = `${this.first} likes to ${hobby}`;
      console.log(string);
    });
  },
};

person.printHobbies();
