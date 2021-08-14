var userClickedPattern=[];
var gamepattern=[];
var started=false;
var level=0;
var buttonColours=["red","blue","green","yellow"];
$(document).keypress(function(){
    if(!started)
    {
    $("h1").text("Level "+level);
    nextsequence();
    started=true;
    }
    
});
function nextsequence()
{
    userClickedPattern=[];
    level++;
    $("h1").text("Level "+level);
    var randomnumber=Math.floor(Math.random()*4);
var randomChosenColour= buttonColours[randomnumber];
gamepattern.push(randomChosenColour);
$("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
playsound(randomChosenColour);
}
$(".btn").click(function(){
  var userChosenColour=$(this).attr("id");
  userClickedPattern.push(userChosenColour);
 playsound(userChosenColour);
 animatePress(userChosenColour);
 checkanswer(userClickedPattern.length-1);
});
function playsound(name)
{
    var audio=new Audio(name+".mp3");
audio.play();
}
function animatePress(currentColour)
{
    $("." + currentColour).addClass("pressed");
    setTimeout(function(){
        $("." + currentColour).removeClass("pressed");
    },100);
}
function checkanswer(currentlevel)
{
if(gamepattern[currentlevel]===userClickedPattern[currentlevel]){
    if(gamepattern.length===userClickedPattern.length){
        setTimeout(function(){
            nextsequence();
        },1000);
    }
}
else{
    playsound("wrong");
    $("body").addClass("game-over");
    setTimeout(function(){
        $("body").removeClass("game-over");
    },200);
    $("h1").text("Game Over, Press Any Key to Restart");
    startover();
}
}
function startover(){
    level=0;
    gamepattern=[];
    started=false;

}