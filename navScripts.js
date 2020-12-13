
var work = document.getElementById("workLink");
var subnav = document.getElementsByClassName("subnav");
var buttons = document.getElementsByClassName("navLink");
   

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
