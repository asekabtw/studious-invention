const names = [
  {
    name: "Tanya Sinclair",
    job: "UX Engineer",
    img: "./images/image-tanya.jpg",
    text: `“ I’ve been interested in coding for a while but never taken the jump, until now. 
    I couldn’t recommend this course enough. I’m now in the job of  my dreams and so 
    excited about the future. ”`,
  },
  {
    name: "John Tarkpor",
    job: "Junior Front-end Developer",
    img: "./images/image-john.jpg",
    text: `“ If you want to lay the best foundation possible I’d recommend taking this course. 
    The depth the instructors go into is incredible. I now feel so confident about 
    starting up as a professional developer. ”`,
  },
];

const btnPrev = document.getElementById("prev");
const btnNext = document.getElementById("next");

const author = document.querySelector(".slider__author");
const job = document.querySelector(".slider__job");
const desc = document.querySelector(".slider__desc");
const img = document.getElementById("image");

let number = 0;

window.addEventListener("DOMContentLoaded", () => {
  slider(number);
});

function slider(random) {
  const a = names[number];
  author.textContent = a.name;
  job.textContent = a.job;
  desc.textContent = a.text;
  img.src = a.img;
}

btnNext.addEventListener("click", () => {
  number++;
  if (number > 1) number = 0;
  slider(number);
});

btnPrev.addEventListener("click", () => {
  number--;
  if (number < 0) number = 1;
  slider(number);
});
