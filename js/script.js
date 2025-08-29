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
alert('')