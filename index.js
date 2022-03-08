'use strict'

const menu = document.querySelector('.menu');
const close = document.querySelector('.close');
const nav = document.querySelector('.nav');

const menuHandler = (event) => {
    event.preventDefault()
    nav.classList.add('nav-active');
}

const closeHandler = (event) => {
    event.preventDefault()
    nav.classList.remove('nav-active');
}
menu.addEventListener("click", menuHandler);
close.addEventListener("click", closeHandler);