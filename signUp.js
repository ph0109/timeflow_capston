// 휴대폰 번호 입력 부분
function changePhone1(){
    const phone1 = document.getElementById("phone1").value
    if(phone1.length === 3){
        document.getElementById("phone2").focus();
    }
}
function changePhone2(){
    const phone2 = document.getElementById("phone2").value
    if(phone2.length === 4){
        document.getElementById("phone3").focus();
    }
}
function changePhone3(){
    const phone3 = document.getElementById("phone3").value
    if(phone3.length === 4){
    }
}

//let processID = -1;

// 가입부분 체크

function signUpCheck(){

  let email = document.getElementById("email").value
  let name = document.getElementById("name").value
  let password = document.getElementById("password").value
  let passwordCheck = document.getElementById("passwordCheck").value
  let area = document.getElementById("area").value
  let gender_man = document.getElementById("gender_man").checked
  let gender_woman = document.getElementById("gender_woman").checked
  let check = true;

  // 이메일확인
  if(email.includes('@')){
    let emailId = email.split('@')[0]
    let emailServer = email.split('@')[1]
    if(emailId === "" || emailServer === ""){
      document.getElementById("emailError").innerHTML="이메일이 올바르지 않습니다."
      check = false
    }
    else{
      document.getElementById("emailError").innerHTML=""
    }
  }else{
    document.getElementById("emailError").innerHTML="이메일이 올바르지 않습니다."
    check = false
  }


  // 이름확인
  if(name===""){
    document.getElementById("nameError").innerHTML="이름이 올바르지 않습니다."
    check = false
  }else{
    document.getElementById("nameError").innerHTML=""
  }


  // 비밀번호 확인
  if(password !== passwordCheck){
    document.getElementById("passwordError").innerHTML=""
    document.getElementById("passwordCheckError").innerHTML="비밀번호가 동일하지 않습니다."
    check = false
  }else{
    document.getElementById("passwordError").innerHTML=""
    document.getElementById("passwordCheckError").innerHTML=""
  }

  if(password===""){
    document.getElementById("passwordError").innerHTML="비밀번호를 입력해주세요."
    check = false
  }else{
    //document.getElementById("passwordError").innerHTML=""
  }
  if(passwordCheck===""){
    document.getElementById("passwordCheckError").innerHTML="비밀번호를 다시 입력해주세요."
    check = false
  }else{
    //document.getElementById("passwordCheckError").innerHTML=""
  }


  // 성별체크확인
  if(!gender_man && !gender_woman){
    document.getElementById("genderError").innerHTML="성별을 선택해주세요."
    check = false
  }else{
    document.getElementById("genderError").innerHTML=""
  }
  
  if(check){
    document.getElementById("emailError").innerHTML=""
    document.getElementById("nameError").innerHTML=""
    document.getElementById("passwordError").innerHTML=""
    document.getElementById("passwordCheckError").innerHTML=""
    document.getElementById("areaError").innerHTML=""
    
    //비동기 처리이벤트
    setTimeout(function() {
      alert("가입이 완료되었습니다.")
  },0);
  }
}

function sample4_execDaumPostcode() {
  new daum.Postcode({
      oncomplete: function(data) {
          // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

          // 도로명 주소의 노출 규칙에 따라 주소를 표시한다.
          // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
          var roadAddr = data.roadAddress; // 도로명 주소 변수
          var extraRoadAddr = ''; // 참고 항목 변수

          // 법정동명이 있을 경우 추가한다. (법정리는 제외)
          // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
          if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
              extraRoadAddr += data.bname;
          }
          // 건물명이 있고, 공동주택일 경우 추가한다.
          if(data.buildingName !== '' && data.apartment === 'Y'){
             extraRoadAddr += (extraRoadAddr !== '' ? ', ' + data.buildingName : data.buildingName);
          }
          // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
          if(extraRoadAddr !== ''){
              extraRoadAddr = ' (' + extraRoadAddr + ')';
          }

          // 우편번호와 주소 정보를 해당 필드에 넣는다.
          document.getElementById('sample4_postcode').value = data.zonecode;
          document.getElementById("sample4_roadAddress").value = roadAddr;
          document.getElementById("sample4_jibunAddress").value = data.jibunAddress;
          
          // 참고항목 문자열이 있을 경우 해당 필드에 넣는다.
          if(roadAddr !== ''){
              document.getElementById("sample4_extraAddress").value = extraRoadAddr;
          } else {
              document.getElementById("sample4_extraAddress").value = '';
          }

          var guideTextBox = document.getElementById("guide");
          // 사용자가 '선택 안함'을 클릭한 경우, 예상 주소라는 표시를 해준다.
          if(data.autoRoadAddress) {
              var expRoadAddr = data.autoRoadAddress + extraRoadAddr;
              guideTextBox.innerHTML = '(예상 도로명 주소 : ' + expRoadAddr + ')';
              guideTextBox.style.display = 'block';

          } else if(data.autoJibunAddress) {
              var expJibunAddr = data.autoJibunAddress;
              guideTextBox.innerHTML = '(예상 지번 주소 : ' + expJibunAddr + ')';
              guideTextBox.style.display = 'block';
          } else {
              guideTextBox.innerHTML = '';
              guideTextBox.style.display = 'none';
          }
      }
  }).open();
}

function change_btn(e){
  var btns = document.querySelectorAll(".genders")
  btns.forEach(function(btn, i) {
    if(e.currentTarget == btn){
      btn.classList.add("active");
    }
    else{
      btn.classList.remove("active");
    }
  });
  console.log(e.currentTarget);
}