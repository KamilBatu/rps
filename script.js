//count down
var count=3;
var countdown=document.querySelector("h2");


x=setInterval(function(){
    countdown.innerHTML=`${count}`;
    

    if (count <= 0) {
        clearInterval(x);
        countdown.innerHTML=" ";
        
//player one random image
var random_num1=Math.floor(Math.random()*3)+1;
var imgrandomsrc="img/rps"+random_num1+".JPG";
document.querySelectorAll("img")[0].setAttribute("src", imgrandomsrc);

//player two random image
var random_num2=Math.floor(Math.random()*3)+1;
var imgrandomsrc="img/rps"+random_num2+".JPG";
document.querySelectorAll("img")[1].setAttribute("src", imgrandomsrc);

//conditions
if(random_num1==1 && random_num2==2){
    document.querySelector("h1").innerHTML="player1 wins!";
}
else if(random_num1==2 && random_num2==3){
    document.querySelector("h1").innerHTML="player1 wins!";

}
else if(random_num1==3 && random_num2==1){
    document.querySelector("h1").innerHTML="player1 wins!";

}
else if(random_num1==random_num2){
    document.querySelector("h1").innerHTML="Draw!";

}
else{
    document.querySelector("h1").innerHTML="player2 wins!";

}
        return; // This breaks the function
}
count--;
}, 900);



