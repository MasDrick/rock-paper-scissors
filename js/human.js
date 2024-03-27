let paper = document.getElementById('paper');
let paper_1 = document.getElementById('paper_1');
let rock = document.getElementById('rock');
let rock_1 = document.getElementById('rock_1');
let scissors = document.getElementById('scissors');
let scissors_1 = document.getElementById('scissors_1');
let versus = document.querySelector('.versus_1');
let img = document.getElementById('images');
let img_1 = document.getElementById('images_1');
let changer = document.querySelector('.paper');
let rocking = document.querySelector('.rock');
let scissoring = document.querySelector('.scissors');
let paperist = document.getElementById('paperist');
let paper_2 = document.getElementById('paper_2');
let rock_2 = document.getElementById('rock_2');
let scissors_2 = document.getElementById('scissors_2');

function view(){
    img.classList.add('view');
    img_1.classList.add('view');
    img.classList.add('animate');
    img_1.classList.add('animating');
}

function view_paper(){
    changer.classList.add('block');
    img.classList.add('input');
}

function view_rock(){
    rocking.classList.add('block');
    img.classList.add('input');
}
function view_scissors(){
    scissoring.classList.add('block');
    img.classList.add('input');
}


paper.addEventListener('click', function(){
    if(versus.addEventListener('click', function(){
        view();
        console.log('paper');
        setTimeout(view_paper, 2500);
    }));
}, {once: true})
rock.addEventListener('click', function(){
    if(versus.addEventListener('click', function(){
        view();
        console.log('rock');
        setTimeout(view_rock, 2500);
    }));
}, {once: true})
scissors.addEventListener('click', function(){
    if(versus.addEventListener('click', function(){
        view();
        console.log('scissors');
        setTimeout(view_scissors, 2500);
    }));
}, {once: true})


function view_paper_1(){
    paper_2.classList.add('block');
    img_1.classList.add('input');
}

function view_rock_1(){
    rock_2.classList.add('block');
    img_1.classList.add('input');
}
function view_scissors_1(){
    scissors_2.classList.add('block');
    img_1.classList.add('input');
}



paper_1.addEventListener('click', function(){
    if(versus.addEventListener('click', function(){
        view();
        console.log('paper1')
        setTimeout(view_paper_1, 2500);
    }));
}, {once: true})
rock_1.addEventListener('click', function(){
    if(versus.addEventListener('click', function(){
        view();
        console.log('rock1')
        setTimeout(view_rock_1, 2500);
    }));
}, {once: true})
scissors_1.addEventListener('click', function(){
    if(versus.addEventListener('click', function(){
        view();
        console.log('scissors1')
        setTimeout(view_scissors_1, 2500);
    }));
}, {once: true})





