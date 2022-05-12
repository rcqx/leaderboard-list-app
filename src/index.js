import './style.css';
import addScore from './modules/addScore.js';
import fetchData from './modules/fetchScores.js';
import display from './modules/display.js';

const addBtn = document.getElementById('addBtn');
const refresh = document.getElementById('refresh');
addBtn.addEventListener('click', addScore);
refresh.addEventListener('click', fetchData);
window.addEventListener('load', display);