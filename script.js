let squares = document.querySelectorAll('.square');
let colorname = document.querySelector('.colorname');
let indicator = document.querySelector('.indicator');
let score = document.getElementById('scorevalue');
let colors = [];
let colortobeguessed;
let scorevalue = 0;


function change_color(){
    squares.forEach((element,index)=>{
        element.style.backgroundColor = randomcolor();
    })
}
//select the color to be guessed
function select_color(){
    let select_color = Math.floor(Math.random()*colors.length)
    colortobeguessed 
    return colors[select_color];
}

function randomcolor(){
    return `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`;
}

function init(){
    squares.forEach(escuarre=>{
        escuarre.addEventListener('click', get_new_colors);
    })
        

}

function get_new_colors(){
    change_color();
    colortobeguessed = select_color();

}


function reset(){

    if(scorevalue == 5){
        get_new_colors();
        alert("you win")
        scorevalue = 0;
        score.innerHTML = "&nbsp" + scorevalue;
    }
}
init();
get_new_colors();
// console.log(colors);
