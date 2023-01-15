var delay_time = 2000;
const FADING_TIME = 1500;

var changetext_timeout = null;
var text_timeout = null;
var fading_timeout = null;


const input = document.getElementById('meditation-switch');
const meditationSupportContainer = document.getElementById("meditation-support");
input.checked = false;

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

function resetMeditationSupport() {
    $("#meditation-support").stop(true, true).promise().done(function () {
        meditationSupportContainer.style.display = "none";
        changeText(true);
    });
}

$(function () {
    $("#meditation-time").on('change', function () {
        delay_time = $("#meditation-time").val() * 1000;
        console.log("Setting delay time to", delay_time);
        resetMeditationSupport();
        meditationSupport(false);
    })
});

function meditationSupport(out) {
    if (input.checked) {
        $(".meditation-support-time").css("display", "block");
        $("#meditation-support").fadeIn(FADING_TIME).delay(delay_time).fadeOut(FADING_TIME).delay(delay_time).promise().done(function () {
            changeText(out);
            out = out ? false : true;
            meditationSupport(out);
        });
    } else {
        $(".meditation-support-time").css("display", "none");
        resetMeditationSupport();
        
    }
}

