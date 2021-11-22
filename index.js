var randomNumber1 =Math.floor(Math.random()*6);
var randomNumber2 =Math.floor(Math.random()*6);

var imagesArray=["dice1.png","dice2.png","dice3.png","dice4.png","dice5.png","dice6.png"];

var imgSrc1 = imagesArray[randomNumber1];
var imgSrc2 = imagesArray[randomNumber2];

document.getElementsByClassName('img1')[0].setAttribute("src","images/" + imgSrc1);
document.getElementsByClassName('img2')[0].setAttribute("src","images/" + imgSrc2);

var winner;
if(randomNumber1>randomNumber2)
winner="Player 1 Won!";
else if(randomNumber1<randomNumber2)
winner="Player 2 Won!";
else
winner="It's a Draw!";
document.getElementsByTagName("h1")[0].textContent = winner;
