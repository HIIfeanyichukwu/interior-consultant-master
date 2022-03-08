'use strict'

const toggle = document.querySelector('.nav-btn');
const nav = document.querySelector('.nav');
const ul = document.querySelector('.nav-ul');

const toggleHandler = (event) => {
    event.preventDefault()
    const target = event.target;
    const span = target.closest('SPAN');
    span.innerHTML = 'close';
    target.classList.toggle('close')
    nav.classList.toggle('nav-active')
    ul.classList.toggle('nav-ul-active');
}

toggle.addEventListener("click", toggleHandler);