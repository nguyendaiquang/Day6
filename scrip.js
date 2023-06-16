/* -------------------lật quà ràng buộc 1 hộp quà duy nhất-------------------*/
let isGiftOpened = false;
let previousPopup = null;

function openGift() {
  if (!isGiftOpened) {
    this.classList.toggle('flipped');
    isGiftOpened = true;
    showPopup();
  } else {
    closePopup();
    showNewPopup();
  }
}

function showPopup() {
  const popup = document.getElementById('popup');
  popup.style.display = 'block';
  previousPopup = popup;

  // Thêm sự kiện click vào phần tử popup để đóng nó khi nhấp ra khỏi popup
  popup.addEventListener('click', closePopup);
}

function closePopup() {
  if (previousPopup) {
    previousPopup.style.display = 'none';
    previousPopup.removeEventListener('click', closePopup);
    previousPopup = null;
  }
}

function showNewPopup() {
  const newPopup = document.getElementById('new-popup');
  newPopup.style.display = 'block';
}

document.querySelector('.flip-container').addEventListener('click', openGift);
document.querySelector('.flip-container-1').addEventListener('click', openGift);
document.querySelector('.flip-container-2').addEventListener('click', openGift);
document.querySelector('.flip-container-3').addEventListener('click', openGift);

document.getElementById('new-popup').addEventListener('click', function() {
  this.style.display = 'none';
});

/* -------------------chọn gift 200k ----------------------------------*/ 
function openGift2() {
  if (!isGiftOpened) {
    this.classList.toggle('flipped');
    isGiftOpened = true;
    showPopup2();
  }else{
    closePopup();
    showNewPopup();
  }
}

function showPopup2() {
  const popup2 = document.getElementById('200');
  popup2.style.display = 'block';
  previousPopup = popup;

  popup2.addEventListener('click', closePopup);
}
 

function closePopup2() {
  if (previousPopup){
    previousPopup.style.display = 'none';
    previousPopup.removeEventListener('click', closePopup);
    previousPopup = null;
  }
  const popup2 = document.getElementById('200');
  popup2.style.display = 'none';
}
  document.querySelector('.flip-container-5').addEventListener('click', openGift2);
  document.querySelector('.flip-container-6').addEventListener('click', openGift2);
/*----------------------chọn gift 300k-----------------------*/ 

function openGift3() {
  if (!isGiftOpened) {
    this.classList.toggle('flipped');
    isGiftOpened = true;
    showPopup3();
  }else{
    closePopup();
    showNewPopup();
  }
}

function showPopup3() {
  const popup3 = document.getElementById('300');
  popup3.style.display = 'block';
  previousPopup = popup;

  popup3.addEventListener('click', closePopup);
}
 

function closePopup3() {
  if (previousPopup){
    previousPopup.style.display = 'none';
    previousPopup.removeEventListener('click', closePopup);
    previousPopup = null;
  }
  const popup3 = document.getElementById('300');
  popup3.style.display = 'none';
}
  document.querySelector('.flip-container-8').addEventListener('click', openGift3);

/*------------------chọn gift 500k--------------------------*/ 

function openGift4() {
  if (!isGiftOpened) {
    this.classList.toggle('flipped');
    isGiftOpened = true;
    showPopup4();
  }else{
    closePopup();
    showNewPopup();
  }
}

function showPopup4() {
  const popup4 = document.getElementById('500');
  popup4.style.display = 'block';
  previousPopup = popup;

  popup3.addEventListener('click', closePopup);
}
 
function closePopup4() {
  if (previousPopup){
    previousPopup.style.display = 'none';
    previousPopup.removeEventListener('click', closePopup);
    previousPopup = null;
  }
  const popup4 = document.getElementById('500');
  popup4.style.display = 'none';
}
  document.querySelector('.flip-container-7').addEventListener('click', openGift4);

/*----------------chọn gift 800k---------------*/ 
function openGift5() {
  if (!isGiftOpened) {
    this.classList.toggle('flipped');
    isGiftOpened = true;
    showPopup5();
  }else{
    closePopup();
    showNewPopup();
  }
}

function showPopup5() {
  const popup5 = document.getElementById('800');
  popup5.style.display = 'block';
  previousPopup = popup;

  popup5.addEventListener('click', closePopup);
}
 
function closePopup5() {
  if (previousPopup){
    previousPopup.style.display = 'none';
    previousPopup.removeEventListener('click', closePopup);
    previousPopup = null;
  }
  const popup5 = document.getElementById('800');
  popup5.style.display = 'none';
}
  document.querySelector('.flip-container-4').addEventListener('click', openGift5);


/*-----------đóng gift cafe laha-----------*/ 
const closeBtn = document.querySelector('.close');
closeBtn.addEventListener('click', closePopup);

/*-----------đóng gift 200k-----------*/ 

const closeBtn2 = document.querySelector('.close2');
closeBtn2.addEventListener('click', closePopup2);

/*-----------đóng gift 300k-----------*/ 

const closeBtn3 = document.querySelector('.close3');
closeBtn3.addEventListener('click', closePopup3);

/*-----------đóng gift 500k-----------*/ 

const closeBtn4 = document.querySelector('.close4');
closeBtn4.addEventListener('click', closePopup4);

/*-----------đóng gift 800k-----------*/ 

const closeBtn5 = document.querySelector('.close5');
closeBtn5.addEventListener('click', closePopup5);

/*-----Popup form đăng ký---------*/ 

function showSignupPopup() {
  var signupPopup = document.getElementById("signupPopup");
  signupPopup.style.display = "block";
}

/*-----JavaScript cho hiển thị popup thông báo-----*/ 

function showNotificationPopup() {
  var signupPopup = document.getElementById("signupPopup");
  var notificationPopup = document.getElementById("notificationPopup");

  signupPopup.style.display = "none";
  notificationPopup.style.display = "block";
}

/*-----JavaScript cho ẩn popup thông báo--------*/ 

function hideNotificationPopup() {
  var notificationPopup = document.getElementById("notificationPopup");
  notificationPopup.style.display = "none";
}

/*------Hiển thị popup đăng ký khi trang được tải lại------*/ 

window.onload = function() {
  showSignupPopup();
};
 


/*-----------danh sách trúng thưởng-------------*/ 

var button1 = document.querySelector('.btn-1');
var popup5 = document.getElementById('popup5');

button1.addEventListener('click', function(event) {
  popup5.style.display = 'block';
  event.stopPropagation();
});

document.addEventListener('click', function(event) {
  var targetElement = event.target;
  if (!popup5.contains(targetElement)) {
    popup5.style.display = 'none';
  }
});

function closeSuccessPopup1() {
  popup5.style.display = 'none';
}


