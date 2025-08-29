let favCount = 0;
let copyCount = 0;
const callHistoryData = [

];

// Fav Count
const favBtn = document.getElementsByClassName('fav-btn');
for (let i = 0; i < favBtn.length; i++) { 

    favBtn[i].addEventListener('click', function() {
        favCount++;
        document.getElementById('fav-count').innerText = favCount;
    })

}

// Copy Count

const copyBtn = document.getElementsByClassName('copy-btn');
for(let i = 0; i < copyBtn.length; i++) {
    copyBtn[i].addEventListener('click', function(){
        copyCount++
        document.getElementById('copy-count').innerText = copyCount + " "  + 'Copy';
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
    const callLog = {
      name: 'National Emergency Number',
      number: 999,
      date: new Date().toLocaleTimeString(),
    }

    callHistoryData.push(callLog);
  

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



// Call Logs

const callLogEmergency = document.getElementById('emergency-btn');
callLogEmergency.addEventListener('click', function() {
  const callContainer = document.getElementById('call-history-container');

  const callLog = {
      name: 'National Emergency Number',
      number: 999,
      date: new Date().toLocaleTimeString(),
    }

  const newCallLog = document.createElement('div');
  newCallLog.innerHTML = `
  <div class="bg-gray-100 py-2 px-4 rounded-xl mt-4">
    <div>
      <h1 class="text-lg font-bold">${callLog.name}</h1>
    </div>

    <div class="flex items-center justify-between mt-2">
      <p class="text-gray-500">${callLog.number}</p>
      <p class="text-gray-500">${callLog.date}</p>
    </div>
  </div>

  `

  callContainer.appendChild(newCallLog)

})

const callLogPolice = document.getElementById('police-btn');
callLogPolice.addEventListener('click', function() {
  const callContainer = document.getElementById('call-history-container');

  const callLog = {
      name: 'Police Helpline Number',
      number: 999,
      date: new Date().toLocaleTimeString(),
    }

  const newCallLog = document.createElement('div');
  newCallLog.innerHTML = `
  <div class="bg-gray-100 py-2 px-4 rounded-xl mt-4">
    <div>
      <h1 class="text-lg font-bold">${callLog.name}</h1>
    </div>

    <div class="flex items-center justify-between mt-2">
      <p class="text-gray-500">${callLog.number}</p>
      <p class="text-gray-500">${callLog.date}</p>
    </div>
  </div>

  `

  callContainer.appendChild(newCallLog)

})

const callLogFire = document.getElementById('fire-btn');
callLogFire.addEventListener('click', function() {
  const callContainer = document.getElementById('call-history-container');

  const callLog = {
      name: 'Fire Service Number',
      number: 999,
      date: new Date().toLocaleTimeString(),
    }

  const newCallLog = document.createElement('div');
  newCallLog.innerHTML = `
  <div class="bg-gray-100 py-2 px-4 rounded-xl mt-4">
    <div>
      <h1 class="text-lg font-bold">${callLog.name}</h1>
    </div>

    <div class="flex items-center justify-between mt-2">
      <p class="text-gray-500">${callLog.number}</p>
      <p class="text-gray-500">${callLog.date}</p>
    </div>
  </div>

  `

  callContainer.appendChild(newCallLog)

})

const callLogAmbulance = document.getElementById('ambulance-btn');
callLogAmbulance.addEventListener('click', function() {
  const callContainer = document.getElementById('call-history-container');

  const callLog = {
      name: 'Ambulance Service',
      number: '1994-999999',
      date: new Date().toLocaleTimeString(),
    }

  const newCallLog = document.createElement('div');
  newCallLog.innerHTML = `
  <div class="bg-gray-100 py-2 px-4 rounded-xl mt-4">
    <div>
      <h1 class="text-lg font-bold">${callLog.name}</h1>
    </div>

    <div class="flex items-center justify-between mt-2">
      <p class="text-gray-500">${callLog.number}</p>
      <p class="text-gray-500">${callLog.date}</p>
    </div>
  </div>

  `

  callContainer.appendChild(newCallLog)

})

const callLogWomen = document.getElementById('women-btn');
callLogWomen.addEventListener('click', function() {
  const callContainer = document.getElementById('call-history-container');

  const callLog = {
      name: 'Women & Child Helpline',
      number: 109,
      date: new Date().toLocaleTimeString(),
    }

  const newCallLog = document.createElement('div');
  newCallLog.innerHTML = `
  <div class="bg-gray-100 py-2 px-4 rounded-xl mt-4">
    <div>
      <h1 class="text-lg font-bold">${callLog.name}</h1>
    </div>

    <div class="flex items-center justify-between mt-2">
      <p class="text-gray-500">${callLog.number}</p>
      <p class="text-gray-500">${callLog.date}</p>
    </div>
  </div>

  `

  callContainer.appendChild(newCallLog)

})

const callLogCorruption = document.getElementById('corruption-btn');
callLogCorruption.addEventListener('click', function() {
  const callContainer = document.getElementById('call-history-container');

  const callLog = {
      name: 'Anti-Corruption Helpline',
      number: 106,
      date: new Date().toLocaleTimeString(),
    }

  const newCallLog = document.createElement('div');
  newCallLog.innerHTML = `
  <div class="bg-gray-100 py-2 px-4 rounded-xl mt-4">
    <div>
      <h1 class="text-lg font-bold">${callLog.name}</h1>
    </div>

    <div class="flex items-center justify-between mt-2">
      <p class="text-gray-500">${callLog.number}</p>
      <p class="text-gray-500">${callLog.date}</p>
    </div>
  </div>

  `

  callContainer.appendChild(newCallLog)

})

const callLogElectricity = document.getElementById('electricity-btn');
callLogElectricity.addEventListener('click', function() {
  const callContainer = document.getElementById('call-history-container');

  const callLog = {
      name: 'Electricity Helpline',
      number: 16216,
      date: new Date().toLocaleTimeString(),
    }

  const newCallLog = document.createElement('div');
  newCallLog.innerHTML = `
  <div class="bg-gray-100 py-2 px-4 rounded-xl mt-4">
    <div>
      <h1 class="text-lg font-bold">${callLog.name}</h1>
    </div>

    <div class="flex items-center justify-between mt-2">
      <p class="text-gray-500">${callLog.number}</p>
      <p class="text-gray-500">${callLog.date}</p>
    </div>
  </div>

  `

  callContainer.appendChild(newCallLog)

})

const callLogBrac = document.getElementById('brac-btn');
callLogBrac.addEventListener('click', function() {
  const callContainer = document.getElementById('call-history-container');

  const callLog = {
      name: 'Brac Helpline',
      number: 16445,
      date: new Date().toLocaleTimeString(),
    }

  const newCallLog = document.createElement('div');
  newCallLog.innerHTML = `
  <div class="bg-gray-100 py-2 px-4 rounded-xl mt-4">
    <div>
      <h1 class="text-lg font-bold">${callLog.name}</h1>
    </div>

    <div class="flex items-center justify-between mt-2">
      <p class="text-gray-500">${callLog.number}</p>
      <p class="text-gray-500">${callLog.date}</p>
    </div>
  </div>

  `

  callContainer.appendChild(newCallLog)

})

const callLogTravel = document.getElementById('travel-btn');
callLogTravel.addEventListener('click', function() {
  const callContainer = document.getElementById('call-history-container');

  const callLog = {
      name: 'Bangladesh Railway Helpline',
      number: 163,
      date: new Date().toLocaleTimeString(),
    }

  const newCallLog = document.createElement('div');
  newCallLog.innerHTML = `
  <div class="bg-gray-100 py-2 px-4 rounded-xl mt-4">
    <div>
      <h1 class="text-lg font-bold">${callLog.name}</h1>
    </div>

    <div class="flex items-center justify-between mt-2">
      <p class="text-gray-500">${callLog.number}</p>
      <p class="text-gray-500">${callLog.date}</p>
    </div>
  </div>

  `
  callContainer.appendChild(newCallLog)

})










// Clear Button

const clearBtn = document.getElementById('clear-btn')
.addEventListener('click', function(){
  const callContainer = document.getElementById('call-history-container').innerHTML = '';
})