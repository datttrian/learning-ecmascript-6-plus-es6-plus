const skier = (name, sound) => ({
  name,
  sound,
  powderYell() {
    const yell = this.sound.toUpperCase();
    console.log(`${yell}! ${yell}!`);
  },
});

skier("Sendy", "yeah").powderYell();
