let seconds = 00;
let tens = 00;
let mins = 00;
let getseconds = document.querySelector('.seconds');
let gettens = document.querySelector('.tens');
let getmins = document.querySelector('.mins');
let btnstart = document.querySelector('.btn-start');
let btnstop = document.querySelector('.btn-stop');
let btnreset = document.querySelector('.btn-reset');
let interval;

btnstart.addEventListener('click', () => {
clearInterval(interval);
interval = setInterval(startTimer, 10);

})
btnstop.addEventListener('click', () => {
    clearInterval(interval);
})
btnreset.addEventListener('click', () => {
    clearInterval(interval);
    tens = '00';
    seconds = '00';
    mins = '00';
    getseconds.innerHTML = seconds;
    gettens.innerHTML = tens;
    getmins.innerHTML = mins;
})

function startTimer(){
    tens++;
    if(tens < 9){
        gettens.innerHTML = '0' + tens;
    }

    if (tens > 9){
        gettens.innerHTML = tens;
    }

    if (tens > 99){
        seconds++;
        getseconds.innerHTML = '0' + seconds;
        tens = 0 ;
        gettens.innerHTML = '0' + 0;

    }


    if (seconds > 9) {
        getseconds.innerHTML = seconds;
    }
    if (seconds > 59){
        mins++;
        getmins.innerHTML = '0'+ mins;
        seconds = 0;
        getseconds.innerHTML = '0' + 0;
    }

    if (mins > 9) {
        getseconds.innerHTML = mins;
    }


}