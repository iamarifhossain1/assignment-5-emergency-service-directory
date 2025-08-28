// Fav Count
let count = 0;

const favBtn = document.getElementsByClassName('fav-btn');
for (let i = 0; i < favBtn.length; i++) { 

    favBtn[i].addEventListener('click', function() {
        count++;
        document.getElementById('fav-count').innerText = count;
    })

}

// Copy Count

const copyBtn = document.getElementsByClassName('copy-btn');
for(let i = 0; i < copyBtn.length; i++) {
    copyBtn[i].addEventListener('click', function(){
        count++
        document.getElementById('copy-count').innerText = count + " "  + 'Copy';
    })
}



document.addEventListener('DOMContentLoaded', function() {
    const copyBtn = document.getElementsByClassName('copy-btn');
    const helpLineNumber = document.getElementsByClassName('help-number');

    copyBtn.addEventListener('click', function() {
        const number = helpLineNumber.innerText;

        navigator.clipboard.writeText(number)
            .then(() => {
                alert('Number copied: ' + number);
            })
            .catch(err => {
                console.error('Failed to copy: ', err);
            });
    });
});