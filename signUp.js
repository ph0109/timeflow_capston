//아이디
let elInputUsername = document.querySelector('#email');
let elSuccessMessage = document.querySelector('.success-message');
let elFailureMessage = document.querySelector('.failure-message');

//비밀번호
let elInputPassword = document.querySelector('#password');
let elStrongPasswordMessage = document.querySelector('.strongPassword-message');

function strongPassword(str) {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,20}$/.test(str);
}


elInputUsername.onkeyup = function () {
  // 값을 입력한 경우
  if (elInputUsername.value.length !== 0) {
    if(elInputUsername.value.indexOf('@') == -1) {
      elSuccessMessage.classList.add('hide');
      elFailureMessage.classList.remove('hide');
    }
    // 조건을 모두 만족할 경우
    else if(elInputUsername.value!==0 || elInputUsername.value.indexOf('@') == -1) {
      elSuccessMessage.classList.remove('hide'); // 사용할 수 있는 아이디입니다
      elFailureMessage.classList.add('hide'); // 실패 메시지가 가려져야 함
    }
  }
  // 값을 입력하지 않은 경우 (지웠을 때)
  // 모든 메시지를 가린다.
  else {
    elSuccessMessage.classList.add('hide');
    elFailureMessage.classList.add('hide');
  }
}

elInputPassword.onkeyup = function () {
  // console.log(elInputPassword.value);
  // 값을 입력한 경우
  if (elInputPassword.value.length !== 0) {
    if(strongPassword(elInputPassword.value)) {
      elStrongPasswordMessage.classList.add('hide'); // 실패 메시지가 가려져야 함
    }
    else {
      elStrongPasswordMessage.classList.remove('hide'); // 실패 메시지가 보여야 함
    }
  }
  // 값을 입력하지 않은 경우 (지웠을 때)
  // 모든 메시지를 가린다.
  else {
    elStrongPasswordMessage.classList.add('hide');
  }
}

function change_btn(gender){
  var btns = document.querySelectorAll(".genders")
  btns.forEach(function(btn, i) {
    if(gender.currentTarget == btn){
      btn.classList.add("active");
    }
    else{
      btn.classList.remove("active");
    }
  });
  console.log(gender.currentTarget);
}

const birthYearEl = document.querySelector('#birth-year')
isYearOptionExisted = false;
birthYearEl.addEventListener('focus', function() {
  if(!isYearOptionExisted) {
    isYearOptionExisted = true
    for(var i = 1950; i<=2024; i++){
      const YearOption = document.createElement('option')
      YearOption.setAttribute('value', i)
      YearOption.innerText = i
      this.appendChild(YearOption);
    }
  }
});

const birthMonthEl = document.querySelector('#birth-month')
isMonthOptionExisted = false;
birthMonthEl.addEventListener('focus', function() {
  if(!isMonthOptionExisted) {
    isMonthOptionExisted = true
    for(var i = 1; i<=12; i++){
      const MonthOption = document.createElement('option')
      MonthOption.setAttribute('value', i)
      MonthOption.innerText = i
      this.appendChild(MonthOption);
    }
  }
});

const birthDayEl = document.querySelector('#birth-day')
isDayOptionExisted = false;
birthDayEl.addEventListener('focus', function() {
  if(!isDayOptionExisted) {
    isDayOptionExisted = true
    for(var i = 1; i<=31; i++){
      const DayOption = document.createElement('option')
      DayOption.setAttribute('value', i)
      DayOption.innerText = i
      this.appendChild(DayOption);
    }
  }
});
function updateBirthDate() {
  var year = document.getElementById("birth-year").value;
  var month = document.getElementById("birth-month").value;
  var day = document.getElementById("birth-day").value;
  document.getElementById("completeBirthDate").value = year + '-' + month + '-' + day;
}

document.getElementById("birth-year").addEventListener("change", updateBirthDate);
document.getElementById("birth-month").addEventListener("change", updateBirthDate);
document.getElementById("birth-day").addEventListener("change", updateBirthDate);
document.addEventListener('DOMContentLoaded', function() {
  const yearSelect = document.getElementById('birth-year');
  const monthSelect = document.getElementById('birth-month');
  const daySelect = document.getElementById('birth-day');
  const completeBirthDateInput = document.getElementById('completeBirthDate');

  function updateCompleteBirthDate() {
    const year = yearSelect.value;
    const month = monthSelect.value.padStart(2, '0'); // 한자리 숫자 앞에 0 붙이기
    const day = daySelect.value.padStart(2, '0'); // 한자리 숫자 앞에 0 붙이기
    if (year && month && day) {
      completeBirthDateInput.value = `${year}-${month}-${day}`;
    } else {
      completeBirthDateInput.value = ''; // 모든 필드가 선택되지 않았다면 입력값을 비웁니다.
    }
  }

  // 각 셀렉트 박스에 대해 change 이벤트 리스너 등록
  yearSelect.addEventListener('change', updateCompleteBirthDate);
  monthSelect.addEventListener('change', updateCompleteBirthDate);
  daySelect.addEventListener('change', updateCompleteBirthDate);

  // 초기화를 위해 함수를 한 번 호출
  updateCompleteBirthDate();
});

function Click(){
  var agree_data;
  if(document.getElementById("agree").checked){
    agree_data="동의";
  }
  else if(document.getElementById("disagree").checked){
    agree_data="비동의";
  }
  else{
    alert("동의 버튼을 눌러주세요.");
  }

  if(agree_data.length!=0){
    location.replace("search_list.php?id="+agree_data);
  }
}

function Click2(){
  var agree_data2;
  if(document.getElementById("agree2").checked){
    agree_data2="동의";
  }
  else if(document.getElementById("disagree2").checked){
    agree_data2="비동의";
  }
  else{
    alert("동의 버튼을 눌러주세요.");
  }
  if(agree_data2.length!=0){
    location.replace("search_list.php?id="+agree_data2);
  }
}