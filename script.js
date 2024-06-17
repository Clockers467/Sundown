const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function page4Animation() {
    var elem = document.querySelector("#elem-container")
    var box = document.querySelector("#fixed-image")
    elem.addEventListener("mouseenter", function () {
        box.style.display = "block"
    })
    elem.addEventListener("mouseleave", function () {
        box.style.display = "none"
    })

    var elems = document.querySelectorAll(".elem")
    elems.forEach(function (jash) {
        jash.addEventListener("mouseenter", function () {
            var img = jash.getAttribute("data-image")
            box.style.backgroundImage = `url(${img})`
        })
    })
}
function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 100,
    });
}
function menuAnimation() {
    var menu = document.querySelector("nav h3")
    var full = document.querySelector("#full-scr")
    var navimg = document.querySelector("nav img")
    var flag = 0
    menu.addEventListener("click", function () {
        if (flag == 0) {
            full.style.top = 0
            navimg.style.opacity = 0
            flag = 1
        } else {
            full.style.top = "-100%"
            navimg.style.opacity = 1
            flag = 0
        }
    })

}
function loaderAnimation() {
    var loader = document.querySelector("#loader")
    setTimeout(function () {
        loader.style.top = "-100%"
    }, 3500)
}
swiperAnimation()
page4Animation()
menuAnimation()
loaderAnimation()


