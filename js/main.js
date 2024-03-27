let windower = document.getElementById('choose');
let deleter = document.getElementById('vsbot');
let backspacing = document.getElementById('vshuuman');
let sectionary = document.getElementById('section');
windower.addEventListener('click', function choose_level(){
    deleter.classList.toggle('none');
    backspacing.classList.toggle('none');
    sectionary.classList.remove('none');
});
let cansel = document.querySelector('.cansel');
cansel.addEventListener('click', function close(){
    deleter.classList.remove('none');
    backspacing.classList.remove('none');
    sectionary.classList.add('none');
});