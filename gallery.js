
window.addEventListener('load', (event) => {
    var listOfImgs = [
        
        "img/studies/bridge.jpg",
        "img/studies/cabin.jpg",
        "img/studies/gagePark.jpg",
        "img/studies/hamiltonHouse.jpg",
        "img/studies/landscape.jpg",
        "img/studies/monoPorch.jpg",
        "img/studies/porch.jpg",
        "img/studies/redPaddle.jpg",
        "img/studies/whiteHouse.jpg",
        "img/studies/blackAndWhiteDoorway.jpg"
    ]
    //add a row div
    //add 4 column divs
    //add css    
    var row = document.getElementsByClassName("row")[0];
    var columns = document.getElementsByClassName("column")
    var columnIncrementer = 0;
    for(var i =0; i< listOfImgs.length; i++){
        var img = document.createElement('img');
        img.src = listOfImgs[i];
        img.className = "galleryImg"
        img.style.display = "none";
        columns[columnIncrementer].appendChild(img);
        if(columnIncrementer < 2){
            columnIncrementer += 1;
        }else{
            columnIncrementer = 0;
        }
    }
    var galleryImages = document.getElementsByClassName("galleryImg");
    const tl = gsap.timeline();

    // tl.fromTo(galleryImages, 2.9, {
    //     // autoAlpha: 0,
    //     rotationX: -90,
    //     transformOrigin: '50% 0%'
    // }, {
    //     // autoAlpha: 1,
    //     rotationX: 0,
    //     ease: Power2.easeInOut,
    //     stagger: 0.2
    // }, 0.1, 0.3);

    

    galleryImages[0].addEventListener("load", (e)=>{
        for (var i = 0; i < galleryImages.length; i++) {
            galleryImages[i].style.display = "block";
        }
        tl.fromTo(galleryImages, 1.5, {
            css: {
                opacity: 0,
                 x: "-5px"
            }
        }, {
            css: {
                opacity: 1,
                 x: 0
            },
            stagger:0.4,
            ease: Power2.easeInOut
        },0.2);
    })
    // imgOne.style.display = "none"
});