// Start Writing Code Here
function showAlert() {
    alert('Alert by Function Call');
}

const clickMeBtn = document.getElementById('btn-click-me');
// console.dir(clickMeBtn);

clickMeBtn.onmouseover = function() {
    console.log('Mouse Over');
}

const box1 = document.getElementById('box1');

box1.addEventListener('click', function() {
    console.log('Clicked on Box 1');
})

clickMeBtn.onclick = function(event) {
    event.stopPropagation();
    console.log('Button Clicked');
}
clickMeBtn.addEventListener('click', function() {
    console.log('Another Click Event');
})

const link = document.getElementById('link');

link.addEventListener('click', function(hand) {
    hand.preventDefault();
})

var box4 = document.getElementById('box4');

box4.addEventListener('click', function(event){
    if(event.target.tagName === 'LI') {
        console.log('Clicked on a list item');
    }
})

const inputs = document.querySelectorAll('input');
const submitBtn = document.querySelector('button[type=submit]');

inputs[0].addEventListener('change', function(event) {
    console.log(event.target.value);
})

submitBtn.addEventListener('click', function(){
    event.preventDefault();
    if(inputs[0].value === '' || inputs[1].value === '' || inputs[2].value === '' ||inputs[3].value === '') {
        alert('Input Field cannot be Empty!');
    } else {
        var input0Data = inputs[0].value;
        var input1Data = inputs[1].value;
        var input2Data = inputs[2].value;
        var input3Data = inputs[3].value;
        console.log('Your Nmae:', input0Data, 'Your id no:', input1Data,'Your Batch:', input2Data, 'Your Email:', input3Data);
    }
});

document.addEventListener('keydown', function(event) {
    console.log('key Down Event');
    console.log('Pressed key:', + event.key);
    console.dir(event);
}); 

document.addEventListener('keypress', function() {
    console.log('keypress event');
});

document.addEventListener('keyup', function() {
    console.log('key Up event');
});

clickMeBtn.addEventListener('mouseover', function() {
    console.log('on mouse over using addeventlistener');
});

window.addEventListener('load', function() {
    console.log('Your Page Fully Loaded!');
})