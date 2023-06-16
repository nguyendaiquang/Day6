var icons = document.querySelectorAll('.icon_left');
var selectedIcon = null;

icons.forEach(function(icon) {
  icon.addEventListener('click', function() {
    if (selectedIcon !== null) {
      selectedIcon.classList.remove('clicked');
    }

    if (selectedIcon === icon) {
      selectedIcon = null;
    } else {
      icon.classList.add('clicked');
      selectedIcon = icon;
    }
  });
});

var messIcon = document.getElementById("mess");
var popup = document.querySelector(".popup");

messIcon.addEventListener("click", function(event) {
  if (popup.style.display === "block") {
    popup.style.display = "none";
  } else {
    popup.style.display = "block";
  }
});

document.addEventListener("click", function(event) {
  var targetElement = event.target;
  if (targetElement !== messIcon && !messIcon.contains(targetElement)) {
    popup.style.display = "none";
  }
});


