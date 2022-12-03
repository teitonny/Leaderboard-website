import './index.css';

const btn = document.querySelector('.btn-click');
const form = document.getElementById('form');

const userdetaiils = document.querySelector('.table');

const apikey = 'MbnuI7zAKorwnEuale8c';

const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${apikey}/scores/`;

btn.addEventListener('click', () => {
  fetch(url,
    {
      method: 'GET',
    })
    .then((res) => res.json())
    .then((data) => {
      userdetaiils.innerHTML = '';
      data.result.forEach((el) => {
        const div = document.createElement('tr');
        div.classList.add('tr-class');
        const user = document.createElement('p');
        user.classList.add('user-class');
        const score = document.createElement('p');
        score.classList.add('score-class');

        user.innerHTML = el.user;

        score.innerHTML = el.score;
        div.append(user);
        div.append(score);
        userdetaiils.append(div);
      });
    });
});

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const playload = formData;
  const extractedPlayload = [...playload];
  const userValue = extractedPlayload[0][1];
  const scoreValue = extractedPlayload[1][1];

  const playloadobject = {
    user: userValue,
    score: scoreValue,
  };

  await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/MbnuI7zAKorwnEuale8c/scores/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(playloadobject),
  })
    .then((ele) => ele.json());
});