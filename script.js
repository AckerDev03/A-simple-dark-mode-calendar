// Toggle function

const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
const calenderMonths = document.querySelectorAll('.calender-month');

toggle.addEventListener('click', function () {
  this.classList.toggle('bi-moon')
    if(this.classList.toggle('bi-brightness-high-fill')){
      body.style.background = '#ffff';
      body.style.color = 'black';
      body.style.transition = '2s'
      for (let i = 0; i < calenderMonths.length; i++) {
        const calenderMonth = calenderMonths[i];
        console.log(calenderMonth);
        calenderMonth.style.backgroundColor = '#fff';
      }      
    } else{
      body.style.background = '#202424';
      body.style.color = '#f5f1f1';
      body.style.transition = '2s'
      for (let i = 0; i < calenderMonths.length; i++) {
        const calenderMonth = calenderMonths[i];
        console.log(calenderMonth);
        calenderMonth.style.backgroundColor = '#202424';
      }  
    }
})