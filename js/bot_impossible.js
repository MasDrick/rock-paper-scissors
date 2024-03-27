let rock_shake_1 = document.getElementById('images');
let rock_shake_2 = document.getElementById('images_1');
let vs = document.getElementById('versus');
let paper = document.getElementById('paper');
let rock = document.getElementById('rock');
let scissors = document.getElementById('scissors');
let section_1 = document.getElementById('section_1');
let section_2 = document.getElementById('section_2');

function block(){
    rock_shake_1.classList.add('animate');
    rock_shake_2.classList.add('animating');
}

function disable(){
    rock_shake_1.classList.add('none');
    rock_shake_2.classList.add('none');
}

function update(){
    location. reload()
}

//choose human

paper.addEventListener('click', function(){
    if(vs.addEventListener('click', function(){
        block();
        setTimeout(disable, 2500);
        setTimeout(update, 5000);
        setTimeout(function(){
            section_1.innerHTML = `<img class="imgishki paper" src="img/paper.png" alt="">`
        }, 2500);
        setTimeout(bot_scissors, 2500)
    }));
}, {once: true});

rock.addEventListener('click', function(){
    if(vs.addEventListener('click', function(){
        block();
        setTimeout(disable, 2500);
        setTimeout(update, 5000);
        setTimeout(function(){
            section_1.innerHTML = `<img class="imgishki rock" src="img/rock.png" alt="">`
        }, 2500);
        setTimeout(bot_paper, 2500)
    }));
}, {once: true});

scissors.addEventListener('click', function(){
    if(vs.addEventListener('click', function(){
        block();
        setTimeout(disable, 2500);
        setTimeout(update, 5000);
        setTimeout(function(){
            section_1.innerHTML = `<img class="imgishki scissors" src="img/scissors.png" alt="">`
        }, 2500);
        setTimeout(bot_rock, 2500)
    }));
}, {once: true});


// bot

function bot_paper(){
    section_2.innerHTML = `<img class="imgishki paper" src="img/paper.png" alt="">`
}
function bot_rock(){
    section_2.innerHTML = `<img class="imgishki rock" src="img/rock.png" alt="">`
}
function bot_scissors(){
    section_2.innerHTML = `<img class="imgishki scissors" src="img/scissors.png" alt="">`
}