"use strict";
//import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

/* const swiper = new Swiper(".gallery-tabs.swiper", {
    direction: "horizontal",
    loop: true,
    slidesPerView: 4,
    centeredSlides: true,
    centerInsufficientSlides: true,
    navigation: {
        nextEl: ".btn__right",
        prevEl: ".btn__left",
    },
}); */

const burgerMenu = document.querySelector(".burger-menu");
const menu = document.querySelector(".menu");

burgerMenu.addEventListener("click", function (event) {
    burgerMenu.classList.toggle("burger-active");
    menu.classList.toggle("menu-active");
    document.body.classList.toggle("__active");
});

const sellBlock = document.querySelector(".sell-block");
const tabNavElements = document.querySelectorAll(".tabs-sell-block__btn");
const tabItames = document.querySelectorAll(".gallery-tabs__items");
//const getlleterBody = document.querySelector(".form-content-getletter__body");

document.addEventListener("click", function (e) {
    const targetElement = e.target;
    let currentActiveIndex = null;
    let newActiveIndex = null;

    if (targetElement.closest(".tabs-sell-block__btn")) {
        tabNavElements.forEach((tabNavElement, index) => {
            if (tabNavElement.classList.contains("__active")) {
                currentActiveIndex = index;
                tabNavElement.classList.remove("__active");
            }
            if (tabNavElement === targetElement) {
                newActiveIndex = index;
                console.log(tabNavElement === targetElement);
            }
        });
        targetElement.classList.add("__active");
        tabItames[currentActiveIndex].classList.remove("__active");
        tabItames[newActiveIndex].classList.add("__active");
    }
});

const target = document.querySelector(".why__title");
const header = document.querySelector(".header__row");
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                header.classList.add("scrolled");
            } else {
            }
        });
    },
    {
        threshold: 0.5, // Trigger when 50% of the block is visible
    }
);

observer.observe(target);
