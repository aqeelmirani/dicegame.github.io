randomnumber1 = Math.floor((Math.random()*6)+1);
randomimg1 = "dice" + randomnumber1 + ".png";
console.log(randomimg1);
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomimg1);

randomnumber2 = Math.floor((Math.random()*6)+1);
randomimg2 = "dice" + randomnumber2 + ".png";
console.log(randomimg2);
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomimg2);

if(randomimg1 > randomimg2)
{
    document.querySelector("h2").innerHTML = "Player 1 WINS! "
}
else if(randomimg1 < randomimg2){
    document.querySelector("h2").innerHTML = "Player 2 WINS! "
}
else{
    document.querySelector("h2").innerHTML = "Draw "

}