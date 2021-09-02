document.addEventListener("DOMContentLoaded", (e) => {
    gsap.from(".header-title", {opacity: 0, duration: 1, delay: .6, y: 30})
    gsap.from(".img", {opacity: 0, duration: 1, delay: .7, y: 30})
    gsap.from(".header-info", {opacity: 0, duration: 1, delay: .8, y: 30})
    gsap.from(".btn", {opacity: 0, duration: 1, delay: 1, y: 30})
});
