let cursor = document.querySelector(".cursor");
let cursor2 = document.querySelector(".cursor2");
let aElement = document.querySelectorAll("a");
let bElement = document.querySelectorAll("button");

document.addEventListener('mousemove', function(e) {
  cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
});
aElement.forEach(el => {
  el.addEventListener('mouseenter', function(e) {
    cursor2.classList.add("active");
  });
  el.addEventListener('mouseleave', function(e) {
    cursor2.classList.remove("active");
  });
});
bElement.forEach(el => {
  el.addEventListener('mouseenter', function(e) {
    cursor2.classList.add("active");
  });
  el.addEventListener('mouseleave', function(e) {
    cursor2.classList.remove("active");
  });
});