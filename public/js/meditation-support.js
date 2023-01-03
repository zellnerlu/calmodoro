const SHOWN_TIME = 5000;
const HIDDEN_TIME = 1500;
const FADING_OUT_TIME = 2000;
const FADING_IN_TIME = 1500;

var changetext_timeout = null;
var text_timeout = null;
var fading_timeout = null;


const input = document.getElementById('meditation-switch');
const meditationSupportContainer = document.getElementById("meditation-support");

input.addEventListener('change', function () {
    meditationSupport(false);
});

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function changeText(out) {
    console.log("Changing text");
    medText = document.getElementById('meditation-text');
    console.log(medText.textContent);
    if (out == false) {
        medText.innerHTML = "Breathe out...";
    } else {
        medText.innerHTML = "Breathe in...";
    }
    
}

function meditationSupport(out) {
    console.log("Toggled med sup");
    if (input.checked) {
        console.log("Its checked");
        $("#meditation-support").fadeIn(1000).delay(2500).fadeOut(1000).delay(2500).promise().done(function () {
            out = out ? false : true;
            changeText(out);
            meditationSupport(out);
        });
    } else {
        console.log("Its not checked anymore");
        $("#meditation-support").fadeOut(1000);
        changeText(true);
    }
    
}

