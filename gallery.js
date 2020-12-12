
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
        console.log("columnIncrementer: " + columnIncrementer)
        var img = document.createElement('img');
        img.src = listOfImgs[i];
        columns[columnIncrementer].appendChild(img);
        if(columnIncrementer < 2){
            columnIncrementer += 1;
        }else{
            columnIncrementer = 0;
        }
    }

});