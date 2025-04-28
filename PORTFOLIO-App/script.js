let words = document.querySelectorAll(".word");
words.forEach((word) => {
  let letters = word.textContent.split("");
  word.textContent = "";
  letters.forEach((letter) => {
    let span = document.createElement("span");
    span.textContent = letter;
    span.className = "letter";
    word.append(span);
  });
});
let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";

let changeText = () => {
  let currentWord = words[currentWordIndex];
  let nextWord =
    currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

  Array.from(currentWord.children).forEach((letter, i) => {
    setTimeout(() => {
      letter.className = "letter out";
    }, i * 80);
  });
  nextWord.style.opacity = "1";
  Array.from(nextWord.children).forEach((letter, i) => {
    letter.className = "letter behind";
    setTimeout(() => {
      letter.className = "letter in";
    }, 340 + i * 80);
  });
  currentWordIndex =
    currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};
changeText();
setInterval(changeText, 3000);
// skill circle---------------------------------
const circle = document.querySelectorAll(".circle");
circle.forEach((elem) => {
  var dots = elem.getAttribute("data-dots");
  var marked = elem.getAttribute("data-percent");
  var percent = Math.floor((dots * marked) / 100);
  var points = "";
  var rotate = 360 / dots;
  for (let i = 0; i < dots; i++) {
    points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
  }
  elem.innerHTML = points;
  const pointsMarked = elem.querySelectorAll(".points");
  for (let i = 0; i < percent; i++) {
    pointsMarked[i].classList.add("marked");
  }
});
//mix it of project
var mixer = mixitup(".portfolio-gallery");
//active menu-----------------
let menuli = document.querySelectorAll("header ul li a");
let section = document.querySelectorAll("section");
function activeMenu() {
  let len = section.length;
  while (--len && window.scrollY + 97 < section[let].offsetTop) {}
  menuli.forEach((sec) => sec.classList.remove("active"));
  menuli[len].classList.add("active");
}
activeMenu();
window.addEventListener("scroll".activeMenu);
// header sticky------------------------------
const header = document.querySelector("header");
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", this.window.scrollY > 50);
});
// toggle icon navbar------------------
let menuIcon = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");
menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navlist.classList.toggle("open");
};
menuIcon.onscroll = () => {
  menuIcon.classList.remove("bx-x");
  navlist.classList.remove("open");
};
// paralallx------------------
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show-items");
    } else {
      entry.target.classList.remove("show-items");
    }
  });
});
// scrooll item------------------------------------------
const scrollScale = document.querySelector(".scroll-scale");
scrollScale.forEach((el) => observer.observe(el));

const scrollButton = document.querySelector(".scroll-button");
scrollButton.forEach((el) => observer.observe(el));
const scrollTop = document.querySelector(".scroll-top");
scrollTop.forEach((el) => observer.observe(el));
// -----------------------------
document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("download-cv-btn")
    .addEventListener("click", function (event) {
      event.preventDefault(); // Prevent the default anchor behavior

      // Path to your CV file
      const cvUrl = "./img/Geetanjali-CV.pdf";

      // Create a temporary link element
      const link = document.createElement("a");
      link.href = cvUrl;
      link.download = "Geetanjali-CV.pdf";

      // Append the link to the body
      document.body.appendChild(link);

      // Programmatically click the link to trigger the download
      link.click();

      // Remove the link from the document
      document.body.removeChild(link);
    });
});
