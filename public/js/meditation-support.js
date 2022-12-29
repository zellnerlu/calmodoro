const SHOWN_TIME = 5000;
const HIDDEN_TIME = 1500;
const FADING_OUT_TIME = 2000;
const FADING_IN_TIME = 1500;

var changetext_timeout = null;
var text_timeout = null;
var fading_timeout = null;

const input = document.getElementById('meditation-switch');
input.addEventListener('change', function() {
    if (this.checked) {
        document.getElementById("meditation-support").style.display = "block";
        timeout = setTimeout(changeText, SHOWN_TIME);
    } else {
        $("#meditation-support").stop(true, true);
        document.getElementById("meditation-support").style.display = "none";
    }
});

function changeText() {
    $("#meditation-support").fadeOut(FADING_OUT_TIME, function() {
        text_timeout = setTimeout(function() {
            if (document.getElementById("meditation-support").innerHTML == "Breathe out...") {
                document.getElementById("meditation-support").innerHTML = "Breathe in...";
            } else {
                document.getElementById("meditation-support").innerHTML = "Breathe out...";
            }
            $("#meditation-support").fadeIn(FADING_IN_TIME, function() {
                fading_timeout = setTimeout(changeText, SHOWN_TIME);
            });
        }, HIDDEN_TIME);
    });
}