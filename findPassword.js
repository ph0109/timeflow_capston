//랜덤 코드 생성 함수
function generateRandomCode(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }
  
  //이메일 전송 함수
  function sendEmail(email, randomCode) {
    emailjs.init('YOUR_USER_ID');
  
    const templateParams = {
      to_email: email,
      random_code: randomCode
    };
  
    emailjs.send('service_id', 'template_id', templateParams)
      .then(function(response) {
        console.log('이메일이 성공적으로 전송되었습니다.', response.status, response.text);
        showPopup('이메일을 성공적으로 전송했습니다.');
        window.location.href = 'login.html'; /*메일을 성공적으로 전송 시*/
      }, function(error) {
        console.log('이메일 전송에 실패했습니다.', error);
        showPopup('이메일 전송에 실패했습니다.');
      });
  }
  
  //팝업 창 표시 함수
  function showPopup(message) {
    const overlay = document.createElement('div');
    overlay.classList.add('popup-overlay');
ㄴ
    const popup = document.createElement('div');
    popup.classList.add('popup');
  
    const popupMessage = document.createElement('div');
    popupMessage.textContent = message;
  
    const confirmButton = document.createElement('button');
    confirmButton.textContent = '확인';
    confirmButton.addEventListener('click', () => {
      popup.classList.add('fade-out');
      setTimeout(() => {
        popup.remove();
        /*window.location.href = 'login.html'; //메일이 성공적으로 전송 시*/
      }, 500);
    });
  
    popup.appendChild(popupMessage);
    popup.appendChild(confirmButton);
    document.body.appendChild(popup);
  }
  
  
  //폼 제출 이벤트 핸들러
  document.getElementById('findPasswordForm').addEventListener('submit', (event) => {
    event.preventDefault();
  
    const userEmail = document.getElementById('userId').value;
    const randomCode = generateRandomCode(Math.floor(Math.random() * (20 - 6 + 1)) + 6);
  
    sendEmail(userEmail, randomCode);
  });
  

  
  
