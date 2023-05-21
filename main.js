window.onload = sendApiRequest;

let randomAnswer = Math.floor(Math.random() * 4);


async function sendApiRequest(){
    let response = await fetch('https://opentdb.com/api.php?amount=1&difficulty=easy&type=multiple');
    let data = await response.json();
    useApiData(data);
} 
function useApiData(data){
if (randomAnswer==1){
document.querySelector(".container").innerHTML = `${data.results[0].question}`;
document.querySelector("#text1").innerHTML = `${data.results[0].correct_answer}`;
document.querySelector("#text2").innerHTML = `${data.results[0].incorrect_answers[0]}`;
document.querySelector("#text3").innerHTML = `${data.results[0].incorrect_answers[1]}`;
document.querySelector("#text4").innerHTML = `${data.results[0].incorrect_answers[2]}`;
}
else if(randomAnswer==2){
document.querySelector(".container").innerHTML = `${data.results[0].question}`;
document.querySelector("#text2").innerHTML = `${data.results[0].correct_answer}`;
document.querySelector("#text1").innerHTML = `${data.results[0].incorrect_answers[0]}`;
document.querySelector("#text3").innerHTML = `${data.results[0].incorrect_answers[1]}`;
document.querySelector("#text4").innerHTML = `${data.results[0].incorrect_answers[2]}`;
}
else if(randomAnswer==3){
document.querySelector(".container").innerHTML = `${data.results[0].question}`;
document.querySelector("#text3").innerHTML = `${data.results[0].correct_answer}`;
document.querySelector("#text1").innerHTML = `${data.results[0].incorrect_answers[0]}`;
document.querySelector("#text2").innerHTML = `${data.results[0].incorrect_answers[1]}`;
document.querySelector("#text4").innerHTML = `${data.results[0].incorrect_answers[2]}`;
}
else if(randomAnswer==0){
document.querySelector(".container").innerHTML = `${data.results[0].question}`;
document.querySelector("#text4").innerHTML = `${data.results[0].correct_answer}`;
document.querySelector("#text1").innerHTML = `${data.results[0].incorrect_answers[0]}`;
document.querySelector("#text3").innerHTML = `${data.results[0].incorrect_answers[1]}`;
document.querySelector("#text2").innerHTML = `${data.results[0].incorrect_answers[2]}`;
}}
function function1(){
if (randomAnswer==1){
document.querySelector(".response").innerHTML = "Yeahh that's it!!";
}
else{
document.querySelector(".response").innerHTML ="OUPS! You got this one wrong";
}
}
function function2(){
if (randomAnswer==2){
document.querySelector(".response").innerHTML = "Wehuu Correct!";
}
else{
document.querySelector(".response").innerHTML ="Nope try again";
}
}
function function3(){
if (randomAnswer==3){
document.querySelector(".response").innerHTML = "Yep that is right!";
}
else{
document.querySelector(".response").innerHTML ="That is the wrong answer";
}
}
function function4(){
if (randomAnswer==0){
document.querySelector(".response").innerHTML = "Genius!!";
}
else{
document.querySelector(".response").innerHTML ="Try again :)";
}
}
function trying(){
    window.location.reload();
}
