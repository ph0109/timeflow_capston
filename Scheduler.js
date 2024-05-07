// 오늘 날짜 표시
var todayDateElement = document.getElementById('today-date');
var today = new Date();
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
todayDateElement.innerText = today.toLocaleDateString('ko-KR', options);

// 캘린더에 날짜 추가
var daysElement = document.querySelector('.days');
var firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
var startingDay = firstDayOfMonth.getDay();
var monthLength = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();

for (var i = 0; i < startingDay; i++) {
  var blankDay = document.createElement('div');
  blankDay.classList.add('day');
  daysElement.appendChild(blankDay);
}

for (var i = 1; i <= monthLength; i++) {
  var dayElement = document.createElement('div');
  dayElement.classList.add('day');
  dayElement.innerText = i;
  if (i === today.getDate()) {
    dayElement.classList.add('today');
  }
  daysElement.appendChild(dayElement);
}
