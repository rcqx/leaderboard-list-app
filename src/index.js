import './style.css';

const entries = [
  {
    name: 'Rimmer',
    score: 100,
  },
  {
    name: 'Lister',
    score: 200,
  },
  {
    name: 'Cat',
    score: 50,
  },
  {
    name: 'Holly',
    score: 1000,
  },
  {
    name: 'Kochanski',
    score: 250,
  },
  {
    name: 'Ace',
    score: 500,
  },
  {
    name: 'Gelf',
    score: 250,
  },
];

const display = () => {
  for (let i = 0; i < entries.length; i += 1) {
    const entry = document.createElement('li');
    entry.innerHTML = `${entries[i].name}: ${entries[i].score}`;
    const cont = document.querySelector('ul');
    cont.appendChild(entry);
  }
};

display();