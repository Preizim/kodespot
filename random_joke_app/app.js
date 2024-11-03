const jokeElement = document.getElementById('joke');
const newJokeButton = document.getElementById('new-joke');


async function fetchJoke() {
  try {
    const response = await fetch('https://official-joke-api.appspot.com/random_joke');
    const data = await response.json();
    

    jokeElement.innerText = `"${data.setup} - ${data.punchline}"`;
  } catch (error) {
    jokeElement.innerText = 'Oops! Something went wrong. Please try again later.';
    console.error("Error fetching the joke:", error);
  }
}


fetchJoke();

newJokeButton.addEventListener('click', fetchJoke);
