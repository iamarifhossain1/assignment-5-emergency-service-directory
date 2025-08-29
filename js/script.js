let count = 0;


// Fav Count
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

// Copy Number

const copyBtns = document.getElementsByClassName('copy-btn');

  for (let i = 0; i < copyBtns.length; i++) {
    copyBtns[i].addEventListener('click', function () {
      const parentSection = this.closest('div').previousElementSibling;
      const numberElement = parentSection.querySelector('.help-number');

      if (numberElement) {
        const number = numberElement.innerText.trim();

    if (navigator.clipboard && window.isSecureContext) {
          navigator.clipboard.writeText(number)
            .then(() => alert('Copied: ' + number))
            .catch(err => console.error('Copy failed:', err));
        } else {
          const tempInput = document.createElement('textarea');
          tempInput.value = number;
          document.body.appendChild(tempInput);
          tempInput.select();
          document.execCommand('copy');
          document.body.removeChild(tempInput);
          alert('Copied: ' + number);
        }
      }
    });
  }

// Call Button

const callBtn = document.getElementsByClassName('call-btn');
const coins = document.getElementById('coin-count');
for (let i = 0; i < callBtn.length; i++) {
  callBtn[i].addEventListener('click', function() {
    const currentCoins = parseInt(coins.innerText);
    if (currentCoins >= 20) {
      coins.innerText = currentCoins - 20;
    }

    else {
      alert('Insufficient Balance')
    }
  })
}

// Call Button Pop-Up

document.getElementById('emergency-btn')
.addEventListener('click', function() {
  alert ('📞 Calling... National Emergency Number 999...')
})

document.getElementById('police-btn')
.addEventListener('click', function() {
  alert ('📞 Calling... Police Helpline Number 999...')
})

document.getElementById('fire-btn')
.addEventListener('click', function() {
  alert ('📞 Calling... Fire Service Number 999...')
})

document.getElementById('ambulance-btn')
.addEventListener('click', function() {
  alert ('📞 Calling... Ambulance Number 1994-999999...')
})

document.getElementById('women-btn')
.addEventListener('click', function() {
  alert ('📞 Calling... Women & Child Helpline Number 109...')
})

document.getElementById('corruption-btn')
.addEventListener('click', function() {
  alert ('📞 Calling... Anti-Corruption Helpline Number 106...')
})

document.getElementById('electricity-btn')
.addEventListener('click', function() {
  alert ('📞 Calling... Electricity Helpline Number 16216...')
})


document.getElementById('brac-btn')
.addEventListener('click', function() {
  alert ('📞 Calling...Brac Helpline Number 16445...')
})


document.getElementById('travel-btn')
.addEventListener('click', function() {
  alert ('📞 Calling... Bangladesh Railway Helpline Number 163...')
})

