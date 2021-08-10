const header = document.getElementById('header-container');
header.style.backgroundColor = 'rgb(76,164,109)';

const section1 = document.getElementsByClassName('emergency-tasks');
section1[0].style.backgroundColor = 'rgb(255, 179, 153)';

const section2 = document.getElementsByClassName('no-emergency-tasks');
section2[0].style.backgroundColor = 'rgb(255, 217, 102)';

let h3Emergency = document.querySelectorAll('.emergency-tasks > div > h3');
for(let i = 0; i < h3Emergency.length; i += 1){
  h3Emergency[i].style.backgroundColor = 'rgb(204, 51, 255)';
}

let h3NoEmergency = document.querySelectorAll('.no-emergency-tasks > div > h3');
for(let i = 0; i < h3NoEmergency.length; i += 1){
  h3NoEmergency[i].style.backgroundColor = 'black';
}

const footer = document.getElementById('footer-container');
footer.style.backgroundColor = 'rgb(0, 51, 51)';