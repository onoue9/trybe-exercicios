function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

//exercício 1
function decemberDays () {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;
  const monthDaysList = document.querySelector('#days');

  for (let index = 0; index < dezDaysList.length; index += 1) {
    const dayListMonth = document.createElement('li');
    if (dezDaysList[index] == 24 || dezDaysList[index] == 31) {
      dayListMonth.className = 'day holiday';
    } else if (dezDaysList[index] == 4 || dezDaysList[index] == 11 || dezDaysList[index] == 18) {
      dayListMonth.className = 'day friday';
    } else if (dezDaysList[index] == 25) {
      dayListMonth.className = 'day holiday friday';
    } else {
      dayListMonth.className = 'day';
    }
    dayListMonth.innerHTML = dezDaysList[index];

    monthDaysList.appendChild(dayListMonth);
  };
};

decemberDays();

//exercícios 2 e 3
function holidayButton (holiday = 'Feriados') {
  const holidayBtn = document.createElement('button');
  holidayBtn.innerHTML = holiday;
  holidayBtn.id = 'btn-holiday';

  const parentButton = document.querySelector('.buttons-container');

  parentButton.appendChild(holidayBtn);

  function holidayColor () {
    const holidays = document.querySelectorAll('.holiday');
    for (let index = 0; index < holidays.length; index += 1) {
      if (holidays[index].style.backgroundColor == 'red') {
        holidays[index].style.backgroundColor = 'rgb(238,238,238)';
      } else {
          holidays[index].style.backgroundColor = 'red';
      }
    }
  }

  holidayBtn.addEventListener('click', holidayColor);
}

holidayButton();

//exercícios 4 e 5
function fridayButton (friday = "Sexta-Feira") {
  const fridayBtn = document.createElement('button');
  fridayBtn.innerHTML = friday;
  fridayBtn.id = 'btn-friday';

  const parentButton = document.querySelector('.buttons-container');

  parentButton.appendChild(fridayBtn);


  function changeFridayText () {
    const fridays = document.querySelectorAll('.friday');
    const days = ['4','11','18','25'];
    for (let index = 0; index < fridays.length; index += 1) {      
      if (fridays[index].innerHTML == days[index]) {
        fridays[index].innerHTML = 'Friday';
      } else {
        fridays[index].innerHTML = days[index];
      }
    }
  }

  fridayBtn.addEventListener('click', changeFridayText);
}

fridayButton();

