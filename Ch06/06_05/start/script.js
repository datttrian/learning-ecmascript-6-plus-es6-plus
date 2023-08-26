const githubRequest = async (login) => {
  const response = await fetch(`https://api.github.com/users/${login}`);
  const json = await response.json();
  console.log(`${json.name}, ${json.company}`);
};

githubRequest("eveporcello");
