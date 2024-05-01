// 팝업창 표시 함수
function openPopup(popupId) {
    var popup = document.getElementById(popupId);
    popup.style.display = "block";
  }
  
  // 팝업창 닫기 함수
  function closePopup(popupId) {
    var popup = document.getElementById(popupId);
    popup.style.display = "none";
  }
  
  // 방 만들기 버튼 클릭 시 팝업창 열기
  document.querySelector(".create-room-button").addEventListener("click", function() {
    openPopup("popup");
  });
  
  // 초대코드 버튼 클릭 시 팝업창 열기
  document.querySelector(".invite-code-button").addEventListener("click", function() {
    openPopup("invite-popup");
  });
  
  // 닫기 버튼 클릭 시 팝업창 닫기
  document.querySelectorAll(".close-button").forEach(function(closeButton) {
    closeButton.addEventListener("click", function() {
      closePopup(this.closest(".popup").id);
    });
  });
  
  // 문서 로드 시 팝업창 숨기기
  window.onload = function() {
    document.querySelectorAll(".popup").forEach(function(popup) {
      popup.style.display = "none";
    });
  };
