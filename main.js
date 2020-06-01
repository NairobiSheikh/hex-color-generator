let btn = document.querySelector('#btn');
let newText = document.querySelector('#newText');

let randomGen = function() {
    newColor = '#' + (Math.random()*0xFFFFFF<<0).toString(16);
    if (newColor.length < 7) {
        randomGen();
    }
}

btn.addEventListener('click', 
function(){
    randomGen();
    // btn.style.backgroundColor = newColor;
    newText.textContent = newColor;
    document.querySelector('body').style.backgroundColor = newColor;
});
