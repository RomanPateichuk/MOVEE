"use strict";
let slideIndex = 0;
let slides = document.getElementsByClassName("slider__item");
let left_btn = document.querySelector(".left-slider-button");
let right_btn = document.querySelector(".right-slider-button");
let car_btns = document.querySelectorAll(".car-btn-wrapper>button");
let services_btn = document.getElementById("visible-services");
let services_panel = document.getElementById("services");
let form_btn = document.getElementById("form_btn");
let countdown_timer = document.getElementById("countdown_timer");

right_btn.addEventListener("click", () => {
  showSlides((slideIndex += 1));
});

left_btn.addEventListener("click", () => {
  showSlides((slideIndex -= 1));
});

function clean() {
  for (let slide of slides) {
    slide.style.display = "none";
  }
}

function showSlides(n) {
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  clean();
  slides[slideIndex - 1].style.display = "flex";
}

for (let btn of car_btns) {
  btn.addEventListener("click", (event) => {
    let target = event.target.innerHTML;
    if (target == "Каблуки") {
      clean();
      slides[1].style.display = "flex";
    }

    if (target == "Грузовики") {
      clean();
      slides[2].style.display = "flex";
    }

    if (target == "Газели") {
      clean();
      slides[0].style.display = "flex";
    }
  });
}

services_btn.addEventListener("click", () => {
  let service_display_style = window
    .getComputedStyle(services_panel)
    .getPropertyValue("display");
  if (service_display_style == "none") {
    services_panel.style.display = "flex";
    services_btn.style.transform = "rotate(-135deg)";
    services_btn.style.top = "0.375rem";
  } else {
    services_panel.style.display = "none";
    services_btn.style.transform = "rotate(45deg)";
    services_btn.style.top = 0;
  }
});

let time = 20245;

let timer = setInterval(() => {
  let hours = Math.floor(time / 3600);
  let minutes = Math.floor(time / 60 - hours * 60);
  let second = time % 60;
  if (hours < 10) {
    hours = "0" + hours;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  if (second < 10) {
    second = "0" + second;
  }
  countdown_timer.innerHTML = `${hours}:${minutes}:${second}`;
  time--;
  if (time < 0) {
    clearInterval(timer);
  }
}, 1000);

const links = document.querySelectorAll('a[href*="#"]');
for (let link of links) {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    const link_id = link.getAttribute("href");
    document.querySelector("" + link_id).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

const menu = document.querySelector(".menu");
const header_nav = document.querySelector(".header-nav");

menu.addEventListener("click", (event) => {
  let header_nav_display_style = window
    .getComputedStyle(header_nav)
    .getPropertyValue("display");
  if (header_nav_display_style == "flex") {
    header_nav.style.display = "none";
    menu.classList.remove("active");
  } else {
    header_nav.style.display = "flex";
    menu.classList.add("active");
  }
  header_nav.addEventListener("click", (event) => {
    header_nav.style.display = "none";
    menu.classList.remove("active");
  });
});

const btn_read_more = document.querySelectorAll(".read-more");
const review_dots = document.querySelectorAll(".review-description__dots");
const text_more = document.querySelectorAll(".review-description__text");
const review_block = document.querySelector(".review-wrapper");

review_block.addEventListener("click", (event) => {
  for (let text of text_more) {
    text.style.display = "none";
  }

  for (let dots of review_dots) {
    dots.style.display = "inline";
  }

  for (let btn of btn_read_more) {
    btn.style.display = "inline";
  }

  if (event.target.getAttribute("id") == "review1") {
    review_dots[0].style.display = "none";
    btn_read_more[0].style.display = "none";
    text_more[0].style.display = "inline";
  } else if (event.target.getAttribute("id") == "review2") {
    review_dots[1].style.display = "none";
    btn_read_more[1].style.display = "none";
    text_more[1].style.display = "inline";
  } else if (event.target.getAttribute("id") == "review3") {
    review_dots[2].style.display = "none";
    btn_read_more[2].style.display = "none";
    text_more[2].style.display = "inline";
  }
});

const list_city = document.querySelector(".list-city");
const input_add_city = document.querySelector(".input-text-add-city");
const main_form = document.getElementById("main_form");

main_form.addEventListener("submit", (event) => {
  event.preventDefault();
});

input_add_city.addEventListener("keydown", (event) => {
  if (event.keyCode === 13) {
    let newOption = new Option(input_add_city.value);
    list_city.append(newOption);
    newOption.selected = true;
  }
});
