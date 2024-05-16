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

const birthYearEl = document.querySelector('#birthday_year');
let isYearOptionExisted = false;
birthYearEl.addEventListener('focus', function() {
    if (!isYearOptionExisted) {
        // 기존에 있는 옵션들을 모두 제거
        this.innerHTML = "";
        for (let i = 1950; i <= 2024; i++) {
            const YearOption = document.createElement('option');
            YearOption.setAttribute('value', i);
            YearOption.innerText = i;
            this.appendChild(YearOption);
        }
        isYearOptionExisted = true; // 수정된 부분
    }
});

// 생년월일 로직
const birthMonthEl = document.querySelector('#birthday_month');
let isMonthOptionExisted = false;
birthMonthEl.addEventListener('focus', function() {
    if (!isMonthOptionExisted) {
        // 기존에 있는 옵션들을 모두 제거
        this.innerHTML = "";
        for (let i = 1; i <= 12; i++) {
            const MonthOption = document.createElement('option');
            MonthOption.setAttribute('value', i);
            MonthOption.innerText = i;
            this.appendChild(MonthOption);
        }
        isMonthOptionExisted = true; // 수정된 부분
    }
});

const birthDayEl = document.querySelector('#birthday_day');
let isDayOptionExisted = false;
birthDayEl.addEventListener('focus', function() {
    if (!isDayOptionExisted) {
        // 기존에 있는 옵션들을 모두 제거
        this.innerHTML = "";
        for (let i = 1; i <= 31; i++) {
            const DayOption = document.createElement('option');
            DayOption.setAttribute('value', i);
            DayOption.innerText = i;
            this.appendChild(DayOption);
        }
        isDayOptionExisted = true; // 수정된 부분
    }
});

