
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext("2d");
let img1 = new Image();
let img2 = new Image();
let img3 = new Image();
img1.src = "./images/stone.png";
img2.src = "./images/scissors.png";
img3.src = "./images/new-document.png";


//Сначала создаю объекты(3)
let pairVariables = [
    { 
        x1: canvas.width / 2,
        y1: canvas.height - 30,
        dx1: 2,
        dy1: 2,
    },
    { 
        x2: canvas.width / 3,
        y2: canvas.height - 100,
        dx2: 2,
        dy2: 2,
    },
    { 
        x3: 200,
        y3: canvas.height / 2,
        dx3: 2,
        dy3: 2,
    }
];

//Затем  Создаем функцию для отображения картинок
function drawBall(){
    ctx.beginPath();
    ctx.drawImage(img1, pairVariables[0].x1, pairVariables[0].y1, 30, 30);
    ctx.fill();
    ctx.closePath();
}
function drawBall2(){
    ctx.beginPath();
    ctx.drawImage(img2, pairVariables[1].x2, pairVariables[1].y2, 30, 30);
    ctx.fill();
    ctx.closePath();
}

function drawBall3(){
    ctx.beginPath(); 
    ctx.drawImage(img3, pairVariables[2].x3, pairVariables[2].y3, 30, 30);
    ctx.fill();
    ctx.closePath();
}

function draw(){
  
    ctx.clearRect(0,0,canvas.width, canvas.height);
    drawBall();
    drawBall2();
    drawBall3();

    //В данном  условии только 2 элеманта друг от друга оттталкиваются
    if(Math.abs(pairVariables[0].x1 - pairVariables[1].x2) < 15 && Math.abs(pairVariables[0].y1 - pairVariables[1].y2) < 15  ){
        pairVariables[0].dx1 = -pairVariables[0].dx1;
        pairVariables[0].dy1 = -pairVariables[0].dy1;
        pairVariables[1].dx2 = -pairVariables[1].dx2;
        pairVariables[1].dy2 = -pairVariables[1].dy2;
    }


    pairVariables[0].x1 = pairVariables[0].x1 + pairVariables[0].dx1;
    pairVariables[0].y1 = pairVariables[0].y1 - pairVariables[0].dy1;
    if(pairVariables[0].x1 > canvas.width - 20 || pairVariables[0].x1 < 0 ){
        pairVariables[0].dx1 = -pairVariables[0].dx1;
    }
    if( pairVariables[0].y1 > canvas.height - 20 || pairVariables[0].y1 < 0){
        pairVariables[0].dy1 = -pairVariables[0].dy1;
    }
    

    pairVariables[1].x2 = pairVariables[1].x2 + pairVariables[1].dx2;
    pairVariables[1].y2 = pairVariables[1].y2 - pairVariables[1].dy2;
    if(pairVariables[1].x2 > canvas.width - 20 || pairVariables[1].x2 < 0 ){
        pairVariables[1].dx2 = -pairVariables[1].dx2;
    }
    if( pairVariables[1].y2 > canvas.height - 20 || pairVariables[1].y2 < 0 ){
        pairVariables[1].dy2 = -pairVariables[1].dy2;
    }

    pairVariables[2].x3 = pairVariables[2].x3 + pairVariables[2].dx3;
    pairVariables[2].y3 = pairVariables[2].y3 - pairVariables[2].dy3;
    if(pairVariables[2].x3 > canvas.width - 20 || pairVariables[2].x3 < 0 ){
        pairVariables[2].dx3 = -pairVariables[2].dx3;
    }
    if( pairVariables[2].y3 > canvas.height - 20 || pairVariables[2].y3 < 0){
        pairVariables[2].dy3 = -pairVariables[2].dy3;
    }


}

setInterval(draw, 10);

// Не успел написать алгоритм для того чтобы более двух элементов могли отталкиваться друг от друга