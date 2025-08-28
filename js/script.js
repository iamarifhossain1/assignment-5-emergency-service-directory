// Fav Count

let count = 0;

const favBtn = document.getElementsByClassName('fav-btn');
for(let i = 0; i < favBtn.length; i++) {
    favBtn[i].addEventListener('click', function() {
        count++
        document.getElementById('count').innerText = count;
    })
}