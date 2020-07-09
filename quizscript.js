var header= document.querySelector("#timetitlebar");
var timeSpan = document.querySelector("#timer");
var quiztitle =document.querySelector("#quiztitle")
var question= document.querySelector("#questions");
var request= document.querySelector("#requestandscore");
var startbtn = document.querySelector("#startbutton");
var answersbtns= document.querySelector(".answerbtn");
var initialsbar= document.querySelector("#initialsbar");
var initials=document.querySelector("#initials");
var initialsinput= document.querySelector("#intialsinput");
var submitbtn= document.querySelector("#submit");
var gobackbtn=document.querySelector("#goback");
var clearhighscores= document.querySelector("#clearhighscores");
var btn1= document.querySelector("#btn1");
var btn2= document.querySelector("#btn2");
var btn3= document.querySelector("#btn3");
var btn4= document.querySelector("#btn4");
var hr= document.querySelector("#hr");   
var message= document.querySelector("#footermessage");
var incorrect=0;
var correct=0;
startbtn.addEventListener(`click`,function(event){
event.preventDefault();
startbtn.remove();
request.textContent=``;
    quiztitle.setAttribute("style","visibility:hidden");
    question.setAttribute("style","visibility:visible");
    btn1.setAttribute("style","visibility:visible");
    btn2.setAttribute("style","visibility:visible");
    btn3.setAttribute("style","visibility:visible");
    btn4.setAttribute("style","visibility:visible");
question1();
setTime();
function footermessage(){
     hr.setAttribute("style","visibility:visible");
     message.setAttribute("style","visibility:visible");
}
function setTime() {
     var seconds=75;
     var timerInterval = setInterval(function() {
     seconds--;
     timeSpan.textContent = seconds;
     if(seconds === 0) {
     clearInterval(timerInterval);
}},1000);}
    //question1//
function question1(){ 
    question.textContent ="Commonly used data types DO NOT Include :"; 
    btn1.textContent='1.Strings ';
    btn2.textContent='2.Booleans';
    btn3.textContent='3.Alerts  ';
    btn4.textContent='4.Numbers ';
    //answer1//
btn1.addEventListener('click',function(event){
event.preventDefault();
message.textContent=`incorrect answer`;
incorrect++;
footermessage()
var secondsLeft = 1;
var timerInterval = setInterval(function() {
secondsLeft--;
if(secondsLeft === 0) {  
  question2();
}},1000);
});

btn2.addEventListener('click',function(event){
event.preventDefault();
message.textContent=`incorrect answer`;
incorrect++;
footermessage();
var secondsLeft = 1;
var timerInterval = setInterval(function() {
secondsLeft--;
if(secondsLeft === 0) {  
  question2();
}},1000); 
});

btn3.addEventListener('click',function(event){
event.preventDefault();
message.textContent=`correct answer`;
correct++;
footermessage();
var secondsLeft = 1;
var timerInterval = setInterval(function() {
secondsLeft--;
if(secondsLeft === 0) {  
  question2(); 
}},1000);  
});

btn4.addEventListener('click',function(event){
event.preventDefault();
message.textContent=`incorrect answer`;
incorrect++;
footermessage();
var secondsLeft = 1;
var timerInterval = setInterval(function() {
secondsLeft--;
if(secondsLeft === 0) {  
  question2(); 
}},1000);
});
    //question2//
function question2(){
    message.setAttribute("style","visibility:hidden");
    question.textContent ="The condition in an if/else statement is enclosed within ___."; 
    btn1.textContent='1.Quotes ';
    btn2.textContent='2.curly brackets';
    btn3.textContent='3.parentheses ';
    btn4.textContent='4.square brackets';
    //answer2//
btn1.addEventListener('click',function(event){
event.preventDefault();
message.textContent=`incorrect answer`;
incorrect++;
var secondsLeft = 1;
var timerInterval = setInterval(function() {
secondsLeft--;
if(secondsLeft === 0) {  
  question3();
}},1000);
});

btn2.addEventListener('click',function(event){
event.preventDefault();
message.textContent=`incorrect answer`;
incorrect++;
var secondsLeft = 1;
var timerInterval = setInterval(function() {
secondsLeft--;
if(secondsLeft === 0) {  
  question3();
}},1000);
});

btn3.addEventListener('click',function(event){
event.preventDefault();
message.textContent=`correct answer`;
correct++;
var secondsLeft = 1;
var timerInterval = setInterval(function() {
secondsLeft--;
if(secondsLeft === 0) {  
  question3(); 
}},1000);
});

btn4.addEventListener('click',function(event){
event.preventDefault();
message.textContent=`incorrect answer`;
incorrect++;
var secondsLeft = 1;
var timerInterval = setInterval(function() {
secondsLeft--;
if(secondsLeft === 0) {  
  question3(); 
}},1000);
});
    //question3//
function question3(){
    message.setAttribute("style","visibility:hidden");
    question.textContent ="Arrays in JavaScript can be used to store ____."; 
    btn1.textContent='1.Numbers and Strings';
    btn2.textContent='2.Other Arrays';
    btn3.textContent='3.Booleans';
    btn4.textContent='4.All of above';
    //answer3//
btn1.addEventListener('click',function(event){
    event.preventDefault();
message.textContent=`incorrect answer`;
incorrect++;
var secondsLeft = 1;
var timerInterval = setInterval(function() {
secondsLeft--;
if(secondsLeft === 0) {  
  question4();
}},1000);
});

btn2.addEventListener('click',function(event){
event.preventDefault();
message.textContent=`incorrect answer`;
incorrect++;
var secondsLeft = 1;
var timerInterval = setInterval(function() {
secondsLeft--;
if(secondsLeft === 0) {  
  question4();
}},1000);
});

btn3.addEventListener('click',function(event){
event.preventDefault();
message.textContent=`incorrect answer`;
incorrect++;
var secondsLeft = 1;
var timerInterval = setInterval(function() {
secondsLeft--;
if(secondsLeft === 0) {  
  question4(); 
}},1000);
});

btn4.addEventListener('click',function(event){
event.preventDefault();
message.textContent=`correct answer`;
correct++;
var secondsLeft = 1;
var timerInterval = setInterval(function() {
secondsLeft--;
if(secondsLeft === 0) {  
  question4(); 
}},1000);
});
    //question4//
function question4(){
    message.setAttribute("style","visibility:hidden");
    question.textContent ="A very useful tool used during development and debugging for printing content to the debugger is:"; 
    btn1.textContent='1.Javascript';
    btn2.textContent='2.Terminal/bash';
    btn3.textContent='3.for loops';
    btn4.textContent='4.Console.log';
    //answer4//
btn1.addEventListener('click',function(event){
event.preventDefault();
message.textContent=`incorrect answer`;
incorrect++;
var secondsLeft = 1;
var timerInterval = setInterval(function() {
secondsLeft--;
if(secondsLeft === 0) {  
  question5();
}},1000);
});

btn2.addEventListener('click',function(event){
event.preventDefault();
message.textContent=`incorrect answer`;
incorrect++;
var secondsLeft = 1;
var timerInterval = setInterval(function() {
secondsLeft--;
if(secondsLeft === 0) {  
  question5();
}},1000);
});

btn3.addEventListener('click',function(event){
event.preventDefault();
message.textContent=`incorrect answer`;
incorrect++;
var secondsLeft = 1;
var timerInterval = setInterval(function() {
secondsLeft--;
if(secondsLeft === 0) {  
  question5(); 
}},1000);
});

btn4.addEventListener('click',function(event){
event.preventDefault();
message.textContent=`correct answer`;
correct++;
var secondsLeft = 1;
var timerInterval = setInterval(function() {
secondsLeft--;
if(secondsLeft === 0) {  
  question5(); 
}},1000);
});
    //question5//
function question5(){
    message.setAttribute("style","visibility:hidden");
    question.textContent ="String values must be enclosed within _____ when being assigned to variables."; 
    btn1.textContent='1.Commas';
    btn2.textContent='2.Curly brackets';
    btn3.textContent='3.Quotes';
    btn4.textContent='4.Parentheses';
    //answer5//
btn1.addEventListener('click',function(event){
event.preventDefault();
message.textContent=`incorrect answer`;
incorrect++;
var secondsLeft = 1;
var timerInterval = setInterval(function() {
secondsLeft--;
if(secondsLeft === 0) {  
  result();
}},1000);
});

btn2.addEventListener('click',function(event){
event.preventDefault();
message.textContent=`incorrect answer`;
incorrect++;
var secondsLeft = 1;
var timerInterval = setInterval(function() {
secondsLeft--;
if(secondsLeft === 0) {  
  result();
}},1000);
});

btn3.addEventListener('click',function(event){
event.preventDefault();
message.textContent=`incorrect answer`;
incorrect++;
var secondsLeft = 1;
var timerInterval = setInterval(function() {
secondsLeft--;
if(secondsLeft === 0) {  
  result(); 
}},1000);
});

btn4.addEventListener('click',function(event){
event.preventDefault();
message.textContent=`correct answer`;
correct++;
var secondsLeft = 1;
var timerInterval = setInterval(function() {
secondsLeft--;
if(secondsLeft === 0) {  
  result(); 
}},1000);
});
    //result//
function result(){
    btn1.remove();
    btn2.remove();
    btn3.remove();
    btn4.remove();
    question.remove();
    let user=``;
quiztitle.textContent =`All done!`;
quiztitle.setAttribute("style","visibility:visible");
request.textContent=`final score = ` +incorrect+ ` incorrect answer and ` +correct+ ` correct answer`;
localStorage.setItem("score",request.textContent);
request.setAttribute("style","visibility:visible ; margin-top:25px; margin-right:85px");
initials.setAttribute("style","visibility:visible");
initialsinput.setAttribute("style","visibility:visible");
submitbtn.setAttribute("style","visibility:visible");
    //score display//
submitbtn.addEventListener(`click`,function(event){
event.preventDefault();
localStorage.setItem("name",JSON.stringify(initialsinput.value));
header.remove();  
initials.remove();
initialsinput.remove();
quiztitle.textContent =`Highscores`;
quiztitle.setAttribute("style","margin-top:25px");
request.textContent=localStorage.getItem(JSON.parse(JSON.stringify("name")))+`-- Your last `+localStorage.getItem(JSON.parse(JSON.stringify("score")));
submitbtn.remove();
clearhighscores.setAttribute("style","visibility:visible");
gobackbtn.setAttribute("style","visibility:visible");
});
    //last score //
clearhighscores.addEventListener("click",function(event){
event.preventDefault();
request.remove();
});
gobackbtn.addEventListener("click",function(event){
event.preventDefault();
window.location = "index.html"
});
}}}}}}
});
