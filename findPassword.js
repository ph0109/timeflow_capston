document.getElementById('findPasswordForm').addEventListener('submit', function(event) {
  event.preventDefault();
  validateForm();
});

function validateForm() {
  const userEmail = document.getElementById('userId').value;
  const popupMessage = document.getElementById('popup_message');

  if (!userEmail) {
      document.getElementById('email_error_message').innerHTML = "이메일을 입력해주세요.";
      popupMessage.style.display = 'none';
      return;
  }

  // 랜덤 코드 생성
  const randomCode = generateRandomCode(Math.floor(Math.random() * (20 - 6 + 1)) + 6);

  // AJAX 요청 보내기
  const xhr = new XMLHttpRequest();
  const url = 'your_server_url'; // 서버 URL을 여기에 입력
  const params = 'email=' + encodeURIComponent(userEmail) + '&code=' + encodeURIComponent(randomCode);
  xhr.open('POST', url, true);
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
          if (xhr.status === 200) {
              const response = xhr.responseText;
              if (response === "found") {
                  sendEmail(userEmail, randomCode); // 이메일 전송 함수 호출
              } else {
                  showPopup("일치하는 이메일이 없습니다.");
              }
          } else {
              showPopup("이메일 전송에 실패했습니다."); // 서버 연결 오류 발생 시 메시지 표시
          }
      }
  };
  xhr.onerror = function() {
      showPopup("이메일 전송에 실패했습니다."); // AJAX 요청 실패 시 메시지 표시
  };
  xhr.send(params);

  document.getElementById('email_error_message').innerHTML = "";
}

// 랜덤 코드 생성 함수
function generateRandomCode(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
  let result = '';
  for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

// 이메일 전송 함수
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
          window.location.href = 'login.html'; // 이메일 전송 성공 시 로그인 페이지로 이동
      })
      .catch(function(error) {
          console.log('이메일 전송에 실패했습니다.', error);
          showPopup('이메일 전송에 실패했습니다.');
      });
}

// 팝업 창 표시 함수
function showPopup(message) {
  const popup = document.getElementById('popup_message');
  popup.innerHTML = message;

  const closeButton = document.createElement('button');
  closeButton.textContent = '확인';
  closeButton.addEventListener('click', () => {
      popup.style.display = 'none';
  });

  popup.innerHTML = ''; // Clear previous messages
  popup.appendChild(document.createTextNode(message));
  popup.appendChild(document.createElement('br'));
  popup.appendChild(closeButton);
  popup.style.display = 'block';

  // 팝업 스타일 설정
  popup.style.position = 'fixed';
  popup.style.top = '10%';
  popup.style.left = '50%';
  popup.style.transform = 'translate(-50%, 0)';
  popup.style.border = '1px solid #ccc';
  popup.style.borderRadius = '5px';
  popup.style.padding = '20px';
  popup.style.backgroundColor = '#fff';
  popup.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
  popup.style.zIndex = '1000';
  popup.style.color = '#000';  
}

