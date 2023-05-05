let squares = document.querySelectorAll('.square');
let colorname = document.querySelector('.colorname');
let indicator = document.querySelector('.indicator');
let score = document.getElementById('scorevalue');
let button = document.getElementById('next');
let colors = [];
let scorevalue = 0;
function init(){
    resetcolor();
    guessingcolor();
    reset();
}
function resetcolor(){
    squares.forEach((element,index)=>{
        colors.push(randomcolor());
        element.style.backgroundColor = colors[index];
    })
}
function guessingcolor(){
    return colors[randomnum()];
}
function randomnum(){
   return Math.floor(Math.random()*colors.length)
}
function randomcolor(){
    return `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`;
}
function reset(){
    let colortobeguessed = guessingcolor();
    colorname.textContent =colortobeguessed;
    squares.forEach(element=>{
        element.addEventListener('click',()=>{
            if(element.style.backgroundColor == colortobeguessed){
                // console.log('Correct');
                scorevalue++;
                indicator.textContent = "Correct";
                score.innerHTML = "&nbsp" + scorevalue;
                colors=[];
            resetcolor();
            randomnum();
            guessingcolor();
            reset();
            indicator.textContent = "Guess the Color";
            }else{
                // console.log('incorrect');
                indicator.textContent = "Incorrect";
                resetcolor();
                randomnum();
                guessingcolor();
                reset();
                indicator.textContent = "Guess the Color";
            }if(scorevalue == 5){
                alert("you win")
                scorevalue = 0;
                score.innerHTML = "&nbsp" + scorevalue;
            }
        })
    })
}
init();
button.addEventListener('click',()=>{
    colors=[];
    resetcolor();
    randomnum();
    guessingcolor();
    reset();
    indicator.textContent = "Guess the Color";
})
// console.log(colors);
