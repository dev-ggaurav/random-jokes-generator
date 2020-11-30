const jokeContainer = document.getElementById('joke-container');
const generateBtn = document.getElementById('generate-btn');

generateJoke();

async function generateJoke() {
	const jokeRes = await fetch('https://icanhazdadjoke.com/', {
		headers: {
			'Accept': 'application/json'
		}
	});
	const joke = await jokeRes.json();
	jokeContainer.innerHTML = joke.joke;
}

generateBtn.addEventListener('click', generateJoke);



