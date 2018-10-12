var run =0;
var opacity = 1;
var currentX = 0;
var currentY = 0;
function initJSClass(pageName) {
   /* create and choose background and manipulate camera*/
    switch (pageName){
        case "AboutMe":
            run=1;
            changeImg();
            break;

        case "Experience":
            run=2;
            currentX=10;
            currentY=10;

            changeImg();

            break;

        case "Projects":
            run=3;
            currentX=20;
            currentY=10;
            changeImg();
            break;

        default:

            changeImg();

    }




    changePlace();


}
// noinspection JSAnnotator
// noinspection JSAnnotator

function moveScreen() {


}

function changeImg() {


    var mainBodyBackground = document.getElementById('HomeBody');
    var imgUrls = [4];
    imgUrls[0] = '../img/backgroundHD/forest.jpg';
    imgUrls[1] = '../img/backgroundHD/greenForest.jpg';
    imgUrls[2] = '../img/backgroundHD/redCloud.jpg';
    imgUrls[3] = '../img/backgroundHD/waterfalls.jpg';


    mainBodyBackground.style.backgroundImage = "url(" + imgUrls[run] + ")";
    //mainBodyBackground.style.opacity = ''+opacity;



    setTimeout(function () {

        changeImg();

        run ++;
        if(run == 4){
            run=0;
        }
        opacity -=0.1;
        if (opacity < 0.1)
        {
            opacity = 1;
        }

    }, 7000);


}
function blurImg() {


    var opacityEnd = opacity - 0.1;
    var mainBodyBackground = document.getElementById('HomeBody');
    mainBodyBackground.style.opacity = ''+opacityEnd;
    setTimeout(function () {
        blurImg();

    },250)

}
function changePlace() {

    var modifyDiv = document.getElementById('HomeBody');

    var posX = window.getComputedStyle(modifyDiv).backgroundPositionX;
    var posY = window.getComputedStyle(modifyDiv).backgroundPositionY;


    var nextX = currentX;
    var nextY = currentY;
   // console.log("position Y: "+posY);
    console.log("position X: "+posX);

    if(currentX > 99)
    {
        currentX = 1;

    }
    if(currentY>99)
    {
        currentY =1;
    }
    posX = ''+nextX+'%';
    posY = ''+nextY+'%';
    modifyDiv.style.backgroundPositionX = posX;
    modifyDiv.style.backgroundPositionY = posY;


    setTimeout(function () {
        changePlace();
        currentY+=0.05;
        currentX+=0.1;

    },100);
}
/* przykład mouseover
function buttonMouseOver(name){

    switch (name) {
        case "Java":
            buttonDiv.onmouseover = function (ev) { document.getElementById(name).style.backgroundColor = deeafulWebStyle.buttons.setClickedButtonColor; };
            buttonDiv.onmouseout = function (ev) { document.getElementById(name).style.backgroundColor = deeafulWebStyle.buttons.backgroundColor; };

    }

    }
}
*/
/*
    Metod not used in program i will created in CSS
*/

function createExpButton(name) {

    var imgUrls = [10];
    imgUrls[0] = '../img/backgroundHD/forest.jpg';
    imgUrls[1] = '../img/backgroundHD/greenForest.jpg';
    imgUrls[2] = '../img/backgroundHD/redCloud.jpg';
    imgUrls[3] = '../img/backgroundHD/waterfalls.jpg';


    var imgDiv = document.getElementById(name);

    imgDiv.onmouseover = function (ev) {
        imgDiv.style.backgroundImage = "url('../img/expierenceIcon/BootstrapIco80Dark.png')";


    };
    imgDiv.onmouseout = function (ev) {
       imgDiv.style.backgroundImage = "url('../img/expierenceIcon/BootstrapIco80.png')";

    }

}





