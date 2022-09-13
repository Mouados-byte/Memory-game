const pictures = ["0.jpg" , "1.jpg" , "2.jpg" , "3.jpg" , "0.jpg" , "1.jpg" , "2.jpg" , "3.jpg"];
let container = document.querySelector(".container");
let start = document.querySelector(".start");
let card = document.querySelectorAll(".card");
let front = document.querySelectorAll(".front");
let back = document.querySelectorAll(".back");
let score_field = document.querySelector(".score");
let win = document.querySelector(".win");
let death = document.querySelector(".death");
let wingain = document.querySelector(".wingain");
let deathgain = document.querySelector(".deathgain");

let flipped = 0;
let checked = [];
let score = 0;
let streak = 0;
score_field.innerText = "Score : " + score;



start.addEventListener("click" , () => {
    flip();
});

wingain.addEventListener("click" , () => {
    if(win.classList.contains("congrats")){
        win.classList.remove("congrats");
    }
    flipped = 0;
    checked = [];
    score = 0;
    streak = 0;
    score_field.innerText = "Score : " + score;
    flip();
});
deathgain.addEventListener("click" , () => {
    if(death.classList.contains("congrats")){
        death.classList.remove("congrats");
    }
    flipped = 0;
    checked = [];
    score = 0;
    streak = 0;
    score_field.innerText = "Score : " + score;
    flip();
});

function flip(){
    if(!flipped){
        bindPics();
    for (let i = 0 ; i < front.length ; i++) {
        front[i].classList.add("none");
        back[i].classList.remove("none");
    }
    setTimeout(()=>{
        for (let i = 0 ; i < front.length ; i++) {
            front[i].classList.remove("none");
            back[i].classList.add("none");
            if(!card[i].onclick){
                card[i].addEventListener("click" , play);
            }
        }
    } , 2000)
    flipped = 1;
    }
}

function arrayRemove(arr, value) {

    console.log(value);
    return arr.filter(function(geeks){
        return geeks != value;
    });
}

function bindPics(){
    let copy_pic = ["0.jpg" , "1.jpg" , "2.jpg" , "3.jpg" , "0.jpg" , "1.jpg" , "2.jpg" , "3.jpg"];
for(let i of back){
    let index = Math.round(Math.random()*(copy_pic.length - 1));
    i.style.backgroundImage = `url(Resources/${copy_pic[index]})`;
    let th = copy_pic.splice(index,1);
}
}


function play(e){
    e.target.classList.add("none");
    e.target.parentNode.children[1].classList.remove("none");
    console.log(checked);

    if(checked.length == 0){
        checked.push(e.target.parentNode.children[1].style.backgroundImage);
    }else if(checked[0] == e.target.parentNode.children[1].style.backgroundImage){
        console.log("hey");
        score += 10;
        streak++;
        checked = [];
        if(streak<(pictures.length/2)){
            score_field.innerText = "Score : " + score;
        }else{
            score_field.innerText = "Score : " + score;
            win.classList.add("congrats");
            return
        }
        
    }else{
        checked = [];
        death.classList.add("congrats");
        return
    }
    
}




