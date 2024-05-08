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

