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
    const popup = document.createElement('div');
    popup.classList.add('popup');
    popup.textContent = message;
  
    document.body.appendChild(popup);
  
    setTimeout(() => {
      popup.classList.add('fade-out');
      setTimeout(() => {
        popup.remove();
      }, 500);
    }, 2000);
  }
  
  // 4. 폼 제출 이벤트 핸들러
  document.getElementById('findPasswordForm').addEventListener('submit', (event) => {
    event.preventDefault();
  
    const userEmail = document.getElementById('userId').value;
    const randomCode = generateRandomCode(Math.floor(Math.random() * (20 - 6 + 1)) + 6);
  
    sendEmail(userEmail, randomCode);
  });