
var work = document.getElementById("workLink");
var mainImg = document.getElementById("mainImg");
var sideNavItems = document.querySelectorAll(".navLink");
var subnav = document.getElementsByClassName("subnav");
var buttons = document.getElementsByClassName("navLink");
const tl = gsap.timeline();
   

work.addEventListener('click', () => {
    for(var i=0; i < subnav.length; i++){
        subnav[i].classList.toggle("hideMenu");
    }
    if (work.innerHTML === "Portfolio+") {
        work.innerHTML = "Portfolio-"
    }else{
        work.innerHTML = "Portfolio+"
    }
});

for(var i=0; i< buttons.length; i++){
    buttons[i].addEventListener('click', () =>{
        for (var i = 0; i < subnav.length; i++) {
            buttons[i].classList.toggle("active");
        }
    })
}

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

tl.fromTo(mainImg, 1.2, {height: "0%"}, {height:"100%", ease: Power2.easeInOut})
// .staggerFromTo(sideNavItems, 1.2, {
//     autoAlpha: 0,
//     rotationX: -90,
//     transformOrigin: '50% 0%'
// }, {
//     autoAlpha: 1,
//     rotationX: 0,
//     ease: Elastic.easeOut.config(1, 0.3)
// }, 0.1, 0.3);
tl.fromTo(sideNavItems, 1.4, {
    autoAlpha: 0,
    rotationX: -90,
    transformOrigin: '50% 0%'
}, {
    autoAlpha: 1,
    rotationX: 0,
    ease: Power2.easeInOut,
    stagger: 0.2
}, 0.1, 0.3);