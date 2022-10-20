"use strict";

const aboutMe0 = document.querySelector(".about__about-me");
const skills0 = document.querySelector(".about__skills");
const aboutMe1 = document.querySelector(".skill__about-me");
const skills1 = document.querySelector(".skill__skills");

skills0.addEventListener("click", () => {
  document.querySelector(".about").classList.add("hidden");
  document.querySelector(".skill").classList.remove("hidden");
});
aboutMe1.addEventListener("click", () => {
  document.querySelector(".about").classList.remove("hidden");
  document.querySelector(".skill").classList.add("hidden");
});
