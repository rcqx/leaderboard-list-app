const username = document.getElementById('name');
const gameScore = document.getElementById('gameScore');

const addScore = () => {
  (async () => {
    const rawResponse = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/9m7WJU6TtoLQJffjlvZ9/scores/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user: username.value, score: gameScore.value }),
    });
    await rawResponse.json();
    username.value = '';
    gameScore.value = '';
  })();
};

export default addScore;
