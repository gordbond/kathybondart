
var work = document.getElementById("workLink");
var subnav = document.getElementsByClassName("subnav");
var buttons = document.getElementsByClassName("navLink");
   

work.addEventListener('click', () => {
    for(var i=0; i < subnav.length; i++){
        subnav[i].classList.toggle("hideMenu");
    }
});

for(var i=0; i< buttons.length; i++){
    buttons[i].addEventListener('click', () =>{
        for (var i = 0; i < subnav.length; i++) {
            buttons[i].classList.toggle("active");
        }
    })
}
