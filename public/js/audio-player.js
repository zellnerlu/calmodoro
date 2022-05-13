let nature_audio;
const nature_bird_link = "https://assets.mixkit.co/sfx/preview/mixkit-natural-ambience-with-flowing-water-and-birds-61.mp3";
const nature_rain_link = "https://assets.mixkit.co/sfx/preview/mixkit-long-rain-ambience-1247.mp3";

let ambient_audio;
const ambient_asia_link = "https://audio-previews.elements.envatousercontent.com/files/229831170/preview.mp3?response-content-disposition=attachment%3B+filename%3D%229GAQVEN-asian.mp3%22";
const ambient_africa_link = "https://audio-previews.elements.envatousercontent.com/files/304187853/preview.mp3?response-content-disposition=attachment%3B+filename%3D%228L4HDXW-africa-logo.mp3%22";

let asmr_audio;
const asmr_crinkle_link = "https://audio-previews.elements.envatousercontent.com/files/292964110/preview.mp3?response-content-disposition=attachment%3B+filename%3D%22HJKQQJG-christmas-present-plastic-wrap-crinkle-movement-4.mp3%22";
const asmr_pageturning_link = "https://assets.mixkit.co/sfx/preview/mixkit-browsing-book-by-pages-1099.mp3";

window.addEventListener('load', playAudio, false);

$(document).ready(function() {
        $('#toggle').bind("click", function() {
          if ($(this).attr("class") == "play")
             $(this).attr("class", "pause");
          else
             $(this).attr("class", "play");
        });
      });

function playAudio() {
    nature1 = document.getElementById('nature1');
    nature2 = document.getElementById('nature2');
    nature3 = document.getElementById('nature3');
    nature1.addEventListener('click', playNature, false);
    nature2.addEventListener('click', playNature, false);
    nature3.addEventListener('click', playNature, false);
    ambient1 = document.getElementById('ambient1');
    ambient2 = document.getElementById('ambient2');
    ambient3 = document.getElementById('ambient3');
    ambient1.addEventListener('click', playAmbient, false);
    ambient2.addEventListener('click', playAmbient, false);
    ambient3.addEventListener('click', playAmbient, false);
    asmr1 = document.getElementById('asmr1');
    asmr2 = document.getElementById('asmr2');
    asmr3 = document.getElementById('asmr3');
    asmr1.addEventListener('click', playASMR, false);
    asmr2.addEventListener('click', playASMR, false);
    asmr3.addEventListener('click', playASMR, false);
}

function playAmbient() {
    if (document.getElementById('ambient1').checked) {
        if (ambient_audio != null) {
            ambient_audio.pause();
            ambient_audio.currentTime = 0;
        }
    } else if (document.getElementById('ambient2').checked) {
        ambient_audio = new Audio(ambient_asia_link);
        ambient_audio.play();
    } else if (document.getElementById('ambient3').checked) {
        ambient_audio = new Audio(ambient_africa_link);
        ambient_audio.play();
    }


    $('.muted').click(function() {
        ambient_audio.muted = !ambient_audio.muted;
        return false;
    });

    //VOLUME BAR
    //volume bar event
    let volumeDrag = false;
    $('.volumeAmbient').on('mousedown', function(e) {
        volumeDrag = true;
        ambient_audio.muted = false;
        $('.sound').removeClass('muted');
        updateVolume(e.pageX);
    });
    $(document).on('mouseup', function(e) {
        if (volumeDrag) {
            volumeDrag = false;
            updateVolume(e.pageX);
        }
    });
    $(document).on('mousemove', function(e) {
        if (volumeDrag) {
            updateVolume(e.pageX);
        }
    });
    const updateVolume = function(x, vol) {
        let volume = $('.volumeAmbient');
        let percentage;
        //if only volume have specificed
        //then direct update volume
        if (vol) {
            percentage = vol * 100;
        } else {
            let position = x - volume.offset().left;
            percentage = 100 * position / volume.width();
        }

        if (percentage > 100) {
            percentage = 100;
        }
        if (percentage < 0) {
            percentage = 0;
        }

        //update volume bar and video volume
        $('.volumeBarAmbient').css('width', percentage + '%');
        ambient_audio.volume = percentage / 100;

        //change sound icon based on volume
        if (ambient_audio.volume == 0) {
            $('.sound').removeClass('sound2').addClass('muted');
        } else if (ambient_audio.volume > 0.5) {
            $('.sound').removeClass('muted').addClass('sound2');
        } else {
            $('.sound').removeClass('muted').removeClass('sound2');
        }

    };

}

function playNature() {
    if (document.getElementById('nature1').checked) {
        if (nature_audio != null) {
            nature_audio.pause();
            nature_audio.currentTime = 0;
        }
    } else if (document.getElementById('nature2').checked) {
        nature_audio = new Audio(nature_bird_link);
        nature_audio.play();
    } else if (document.getElementById('nature3').checked) {
        nature_audio = new Audio(nature_rain_link);
        nature_audio.play();
    }

    $('.muted').click(function() {
        nature_audio.muted = !nature_audio.muted;
        return false;
    });

    //VOLUME BAR
    //volume bar event
    let volumeDrag = false;
    $('.volumeNature').on('mousedown', function(e) {
        volumeDrag = true;
        nature_audio.muted = false;
        $('.sound').removeClass('muted');
        updateVolume(e.pageX);
    });
    $(document).on('mouseup', function(e) {
        if (volumeDrag) {
            volumeDrag = false;
            updateVolume(e.pageX);
        }
    });
    $(document).on('mousemove', function(e) {
        if (volumeDrag) {
            updateVolume(e.pageX);
        }
    });
    const updateVolume = function(x, vol) {
        let volume = $('.volumeNature');
        let percentage;
        //if only volume have specificed
        //then direct update volume
        if (vol) {
            percentage = vol * 100;
        } else {
            let position = x - volume.offset().left;
            percentage = 100 * position / volume.width();
        }

        if (percentage > 100) {
            percentage = 100;
        }
        if (percentage < 0) {
            percentage = 0;
        }

        //update volume bar and video volume
        $('.volumeBarNature').css('width', percentage + '%');
        nature_audio.volume = percentage / 100;

        //change sound icon based on volume
        if (ambient_audio.volume == 0) {
            $('.sound').removeClass('sound2').addClass('muted');
        } else if (nature_audio.volume > 0.5) {
            $('.sound').removeClass('muted').addClass('sound2');
        } else {
            $('.sound').removeClass('muted').removeClass('sound2');
        }

    };
}

function playASMR() {
    if (document.getElementById('asmr1').checked) {
        if (asmr_audio != null) {
            asmr_audio.pause();
            asmr_audio.currentTime = 0;
        }
    } else if (document.getElementById('asmr2').checked) {
        asmr_audio = new Audio(asmr_crinkle_link);
        asmr_audio.play();
    } else if (document.getElementById('asmr3').checked) {
        asmr_audio = new Audio(asmr_pageturning_link);
        asmr_audio.play();
    }

    $('.muted').click(function() {
        asmr_audio.muted = !asmr_audio.muted;
        return false;
    });

    //VOLUME BAR
    //volume bar event
    let volumeDrag = false;
    $('.volumeASMR').on('mousedown', function(e) {
        volumeDrag = true;
        asmr_audio.muted = false;
        $('.sound').removeClass('muted');
        updateVolume(e.pageX);
    });
    $(document).on('mouseup', function(e) {
        if (volumeDrag) {
            volumeDrag = false;
            updateVolume(e.pageX);
        }
    });
    $(document).on('mousemove', function(e) {
        if (volumeDrag) {
            updateVolume(e.pageX);
        }
    });
    const updateVolume = function(x, vol) {
        let volume = $('.volumeASMR');
        let percentage;
        //if only volume have specificed
        //then direct update volume
        if (vol) {
            percentage = vol * 100;
        } else {
            let position = x - volume.offset().left;
            percentage = 100 * position / volume.width();
        }

        if (percentage > 100) {
            percentage = 100;
        }
        if (percentage < 0) {
            percentage = 0;
        }

        //update volume bar and video volume
        $('.volumeBarASMR').css('width', percentage + '%');
        asmr_audio.volume = percentage / 100;

        //change sound icon based on volume
        if (asmr_audio.volume == 0) {
            $('.sound').removeClass('sound2').addClass('muted');
        } else if (asmr_audio.volume > 0.5) {
            $('.sound').removeClass('muted').addClass('sound2');
        } else {
            $('.sound').removeClass('muted').removeClass('sound2');
        }

    };
}

