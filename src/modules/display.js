const display = () => {
  (async () => {
    const rawResponse = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/9m7WJU6TtoLQJffjlvZ9/scores/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const content = await rawResponse.json();
    const array = content.result;
    array.sort((a, b) => b.score - a.score);
    const ul = document.querySelector('ul');
    for (let i = 0; i < array.length; i += 1) {
      const item = document.createElement('li');
      item.id = `item${i}`;
      item.innerHTML = `${array[i].user}: ${array[i].score}`;
      ul.appendChild(item);
    }
  })();
};

export default display;
