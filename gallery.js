
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
    var slideContainer = document.getElementById("slideContainer")
    var close = document.getElementsByClassName("close")[0];
    var prev = document.getElementsByClassName("prev")[0];
    var next = document.getElementsByClassName("next")[0];
   
    var thumbnailContainer = document.getElementById("thumbnailContainer");
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

       
        var mySlidesDiv = document.createElement("div");
        mySlidesDiv.className = "mySlides";
        slideContainer.appendChild(mySlidesDiv);
        var numberText = document.createElement("div");
        numberText.className = "numbertext";
        numberText.innerText = `${i+1} / ${listOfImgs.length}`;
        mySlidesDiv.appendChild(numberText);
        var slideImg = document.createElement("img");
        slideImg.src = listOfImgs[i];
        slideImg.style.width = "100%";
        mySlidesDiv.appendChild(slideImg);
    }
    var galleryImages = document.getElementsByClassName("galleryImg");
    const tl = gsap.timeline();
    


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

    for(var i = 0; i < galleryImages.length; i++){
        
        galleryImages[i].addEventListener("click", (e) => {
            openModal();
            currentSlide(e.target.attributes[0].value);
        })
    }

    close.addEventListener("click", (e) => {
        closeModal();
    })

    prev.addEventListener("click", (e)=>{
        plusSlides(-1);
    })

    next.addEventListener("click", (e) => {
        plusSlides(1);
    })

    function openModal() {
        document.getElementById("myModal").style.display = "block";
    }

    function closeModal() {
        document.getElementById("myModal").style.display = "none";
    }

    var slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {

        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        var index = listOfImgs.indexOf(n) +1
        showSlides(slideIndex = index);
    }

    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("galleryImg");
        var captionText = document.getElementById("caption");
        if (n > slides.length) {
            slideIndex = 1
        }
        if (n < 1) {
            slideIndex = slides.length
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
        captionText.innerHTML = dots[slideIndex - 1].alt;
    }
    
    
    
});