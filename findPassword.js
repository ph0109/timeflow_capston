const findPasswordForm = document.getElementById('findPasswordForm');
const popup = document.getElementById('popup');
const popupMessage = document.getElementById('popupMessage');
const closePopupButton = document.getElementById('closePopup');

// 1. 랜덤 코드 생성 함수
function generateRandomCode(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

// 2. 이메일 전송 함수
function sendEmail(email, randomCode) {
    emailjs.init('YOUR_USER_ID');

    const templateParams = {
        to_email: email,
        random_code: randomCode
    };

    emailjs.send('service_id', 'template_id', templateParams)
        .then(function(response) {
            console.log('이메일이 성공적으로 전송되었습니다.', response.status, response.text);
            showPopup('메일을 성공적으로 전송했습니다.');
        }, function(error) {
            console.log('이메일 전송에 실패했습니다.', error);
            showPopup('메일 전송에 실패했습니다.');
        });
}

// 3. 팝업 창 표시 함수
function showPopup(message) {
    popupMessage.textContent = message;
    popup.style.display = 'block';
    popup.style.top = '20px'; // 화면 상단에 위치하도록 설정
}

closePopupButton.addEventListener('click', () => {
    // 팝업 창 숨기기
    popup.style.display = 'none';
});

// 4. 폼 제출 이벤트 핸들러
findPasswordForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const userEmail = document.getElementById('userId').value;
    const randomCode = generateRandomCode(Math.floor(Math.random() * (20 - 6 + 1)) + 6);

    sendEmail(userEmail, randomCode);
});