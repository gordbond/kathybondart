
var work = document.getElementById("workLink");
var mainImg = document.getElementById("mainImg");
var sideNavItems = document.querySelectorAll(".navLink");
var subnav = document.getElementsByClassName("subnav");
var buttons = document.getElementsByClassName("navLink");
const tl = gsap.timeline();

let tween = gsap.fromTo(subnav, 1.4, {
        height: "0px"
    }, {
        height: "40px"
    })
    let tween2 = gsap.fromTo(subnav, 1.4, {
        autoAlpha: 0,
        rotationX: -90,
        transformOrigin: '50% 0%',
    }, {
        autoAlpha: 1,
        rotationX: 0,
        ease: Power2.easeInOut,
        stagger: 0.2
    })
    let tween3 = gsap.fromTo(subnav, 1.4, {
        autoAlpha: 0,
        rotationX: -90,
        transformOrigin: '50% 0%',
    }, {
        autoAlpha: 1,
        rotationX: 0,
        ease: Power2.easeInOut,
        stagger: 0.2,
        delay: "0.4"
    })

tween.pause();
tween2.pause();
tween3.pause();

if (subnav[0].classList.contains("active") || subnav[1].classList.contains("active")) {
    work.innerHTML = "Portfolio-"
    tween.play();
    tween3.play();
}

work.addEventListener('click', () => {
    
    if (work.innerHTML === "Portfolio+") {
        work.innerHTML = "Portfolio-"
        tween.play();
        tween2.play();
    }else{
        work.innerHTML = "Portfolio+"
        tween.reverse();
        tween2.reverse();
        tween3.reverse();
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

