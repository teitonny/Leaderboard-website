
const btn = document.querySelector('.btn-click');
const form = document.getElementById('form');

const userdetaiils = document.querySelector(".table");

const apikey = "MbnuI7zAKorwnEuale8c";

url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${apikey}/scores/`;

btn.addEventListener('click', () => {
    fetch (url,
        {
            method: "GET"
        }
    )
        .then(res => res.json())
        .then(data => {
            
            // userdetaiils.innerHTML = '';
            return data.result.forEach((el) => {
                
                const div = document.createElement('div');
                const user = document.createElement('h1');
                const score = document.createElement('h1');
                
                user.innerHTML = el.user,
                
                score.innerHTML = el.score
                div.append(user);
                div.append(score);
                userdetaiils.append(div);
            })
          
        })
        
})

console.log(userdetaiils)

form.addEventListener('submit', async function (e){
    e.preventDefault();

    const formData = new FormData(form);
    let playload = formData;

    console.log(' This will be empty', playload)
    let extractedPlayload = [...playload];
    let userValue = extractedPlayload[0][1];
    let scoreValue = extractedPlayload[1][1];

    const playloadobject = {
        user: userValue,
        score: scoreValue,
      };
  

        await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/MbnuI7zAKorwnEuale8c/scores/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(playloadobject),
        })
          .then((ele) => ele.json());
      

}) 