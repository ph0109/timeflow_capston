document.getElementById('findIdForm').addEventListener('submit', function(event) {
    event.preventDefault();
    validateForm();
});

// 출생 연도 옵션 생성
var birthYearEl = document.getElementById('birthday_year');
for (var i = 1950; i <= 2024; i++) {
    var option = document.createElement('option');
    option.value = i;
    option.textContent = i;
    birthYearEl.appendChild(option);
}

// 월 옵션 생성
var birthMonthEl = document.getElementById('birthday_month');
for (var i = 1; i <= 12; i++) {
    var option = document.createElement('option');
    option.value = i;
    option.textContent = i;
    birthMonthEl.appendChild(option);
}

// 일 옵션 생성 (달에 따라 동적으로 변경)
function updateDays() {
    var year = document.getElementById('birthday_year').value;
    var month = document.getElementById('birthday_month').value;
    var dayEl = document.getElementById('birthday_day');
    dayEl.innerHTML = '<option disabled selected>일</option>';
    var daysInMonth = new Date(year, month, 0).getDate();
    for (var i = 1; i <= daysInMonth; i++) {
        var option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        dayEl.appendChild(option);
    }
}

document.getElementById('birthday_year').addEventListener('change', updateDays);
document.getElementById('birthday_month').addEventListener('change', updateDays);

function validateForm() {
    var nameInput = document.getElementById('userName').value;
    var yearInput = document.getElementById('birthday_year').value;
    var monthInput = document.getElementById('birthday_month').value;
    var dayInput = document.getElementById('birthday_day').value;
    var popupMessage = document.getElementById('popup_message');

    if (!nameInput) {
        document.getElementById('name_error_message').innerHTML = "이름을 입력해주세요.";
        document.getElementById('birthday_error_message').innerHTML = "";
        popupMessage.style.display = 'none';
        return;
    }
    
    if (!yearInput || !monthInput || !dayInput) {
        document.getElementById('birthday_error_message').innerHTML = "생년월일을 입력해주세요.";
        document.getElementById('name_error_message').innerHTML = "";
        popupMessage.style.display = 'none';
        return;
    }

    // AJAX 요청 보내기
    var xhr = new XMLHttpRequest();
    var url = 'your_server_url'; // 서버 URL을 여기에 입력
    var params = 'name=' + encodeURIComponent(nameInput) + '&birthday=' + yearInput + '-' + monthInput + '-' + dayInput;
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                var response = xhr.responseText;
                if (response === "found") {
                    popupMessage.innerHTML = "아이디를 찾았습니다.";
                } else {
                    popupMessage.innerHTML = "일치하는 아이디가 없습니다.";
                }
            } else {
                popupMessage.innerHTML = "일치하는 아이디가 없습니다."; // 서버 연결 오류 발생 시 메시지 표시
            }
            // 팝업 메시지 스타일 및 표시 설정
            popupMessage.style.display = 'block';
            popupMessage.style.position = 'fixed';
            popupMessage.style.top = '50%';
            popupMessage.style.left = '50%';
            popupMessage.style.transform = 'translate(-50%, -50%)';
            popupMessage.style.border = '1px solid #ccc';
            popupMessage.style.borderRadius = '5px';
            // 2초 후에 팝업 메시지 숨기기
            setTimeout(function() {
                popupMessage.style.display = 'none';
            }, 2000);
        }
    }
    xhr.send(params);
    // 에러 메시지 초기화
    document.getElementById('name_error_message').innerHTML = "";
    document.getElementById('birthday_error_message').innerHTML = "";
}

/*
document.getElementById('findIdForm').addEventListener('submit', function(event) {
    event.preventDefault();
    validateForm();
});

// 출생 연도 옵션 생성
var birthYearEl = document.getElementById('birthday_year');
for (var i = 1950; i <= 2024; i++) {
    var option = document.createElement('option');
    option.value = i;
    option.textContent = i;
    birthYearEl.appendChild(option);
}

// 월 옵션 생성
var birthMonthEl = document.getElementById('birthday_month');
for (var i = 1; i <= 12; i++) {
    var option = document.createElement('option');
    option.value = i;
    option.textContent = i;
    birthMonthEl.appendChild(option);
}

// 일 옵션 생성 (달에 따라 동적으로 변경)
function updateDays() {
    var year = document.getElementById('birthday_year').value;
    var month = document.getElementById('birthday_month').value;
    var dayEl = document.getElementById('birthday_day');
    dayEl.innerHTML = '<option disabled selected>일</option>';
    var daysInMonth = new Date(year, month, 0).getDate();
    for (var i = 1; i <= daysInMonth; i++) {
        var option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        dayEl.appendChild(option);
    }
}

document.getElementById('birthday_year').addEventListener('change', updateDays);
document.getElementById('birthday_month').addEventListener('change', updateDays);

function validateForm() {
    var nameInput = document.getElementById('userName').value;
    var yearInput = document.getElementById('birthday_year').value;
    var monthInput = document.getElementById('birthday_month').value;
    var dayInput = document.getElementById('birthday_day').value;
    var popupMessage = document.getElementById('popup_message');

    if (!nameInput) {
        document.getElementById('name_error_message').innerHTML = "이름을 입력해주세요.";
        document.getElementById('birthday_error_message').innerHTML = "";
        popupMessage.style.display = 'none';
        return;
    }
    
    if (!yearInput || !monthInput || !dayInput) {
        document.getElementById('birthday_error_message').innerHTML = "생년월일을 입력해주세요.";
        document.getElementById('name_error_message').innerHTML = "";
        popupMessage.style.display = 'none';
        return;
    }

    var foundId = findId(nameInput, yearInput + '-' + monthInput + '-' + dayInput);
    if (foundId) {
        popupMessage.innerHTML = "아이디는 " + foundId + "입니다.";
    } else {
        popupMessage.innerHTML = "일치하는 아이디가 없습니다.";
        popupMessage.style.display = 'block'; // 팝업 메시지를 보이도록 설정
        popupMessage.style.position = 'fixed'; // 위치를 고정시킴
        popupMessage.style.top = '50%'; // 상단 위치를 화면 중앙으로 조정
        popupMessage.style.left = '50%'; // 좌측 위치를 화면 중앙으로 조정
        popupMessage.style.transform = 'translate(-50%, -50%)'; // 세로 가로 중앙 정렬
        popupMessage.style.border = '1px solid #ccc'; // 테두리 스타일 및 색상
        popupMessage.style.borderRadius = '5px'; // 테두리의 모서리를 둥글게 만듦
        setTimeout(function() {
            popupMessage.style.display = 'none';
        }, 2000);
    }

    document.getElementById('name_error_message').innerHTML = "";
    document.getElementById('birthday_error_message').innerHTML = "";
}

function findId(name, birthday) {
    // 아이디 찾기 로직 (실제 데이터베이스와의 통신 등)
    return null; // 임시로 null을 반환
}
*/



