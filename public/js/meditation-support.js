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
    medText = document.getElementById('meditation-text');
    if (!out) {
        medText.innerHTML = "Breathe out...";
    } else {
        medText.innerHTML = "Breathe in...";
    }
    
}

function meditationSupport(out) {
    if (input.checked) {
        $("#meditation-support").fadeIn(1500).delay(2000).fadeOut(1500).delay(2000).promise().done(function () {
            changeText(out);
            out = out ? false : true;
            meditationSupport(out);
        });
    }
}

