let ambient_audio = null
let nature_audio = null
let asmr_audio = null

const bib = {
    ambient: {
        asian: {
            mp3: "https://audio-previews.elements.envatousercontent.com/files/229831170/preview.mp3?response-content-disposition=attachment%3B+filename%3D%229GAQVEN-asian.mp3%22",
        },
        african: {
            mp3: "https://audio-previews.elements.envatousercontent.com/files/304187853/preview.mp3?response-content-disposition=attachment%3B+filename%3D%228L4HDXW-africa-logo.mp3%22",
        }
    },
    nature: {
        birds: {
            mp3: "https://assets.mixkit.co/sfx/preview/mixkit-natural-ambience-with-flowing-water-and-birds-61.mp3",
        },
        rain: {
            mp3: "https://assets.mixkit.co/sfx/preview/mixkit-long-rain-ambience-1247.mp3",
        }
    },
    asmr: {
        crinkles: {
            mp3: "https://audio-previews.elements.envatousercontent.com/files/292964110/preview.mp3?response-content-disposition=attachment%3B+filename%3D%22HJKQQJG-christmas-present-plastic-wrap-crinkle-movement-4.mp3%22",
        },
        pageturning: {
            mp3: "https://assets.mixkit.co/sfx/preview/mixkit-browsing-book-by-pages-1099.mp3",
        }
    }
}

function findSound(cat, s) {
    for (const key in bib) {
        if (cat == key) {
            console.log("Found key");
            for (const sound in bib[key]) {
                console.log(sound, s)
                if (s == sound) {
                    console.log("Found sound " + sound);
                    return { category: cat, sound: sound, mp3: bib[key][sound].mp3 };
                }
            }
        }
    }
    return null
}


$(document).ready(function() {
    $('#toggle').bind("click", function() {
        if ($(this).attr("class") == "play")
            $(this).attr("class", "pause");
        else
            $(this).attr("class", "play");
    });
});

function playMyAudio(cat, s) {
    sound = findSound(cat, s);
    console.log(sound);
    if (cat == "ambient") {
        if (ambient_audio != null | sound == null) {
            ambient_audio.pause();
            ambient_audio = null;
        }
        if (sound != null) {
            ambient_audio = new Audio(sound.mp3);
            playAmbient();
            ambient_audio.play();
        }
    } else if (cat == "nature") {
        if (nature_audio != null | sound == null) {
            nature_audio.pause();
            nature_audio = null;
        }
        if (sound != null) {
            nature_audio = new Audio(sound.mp3);
            playNature();
            nature_audio.play();
        }
    } else if (cat == "asmr" | sound == null) {
        if (asmr_audio != null) {
            asmr_audio.pause();
            asmr_audio = null;
        }
        if (sound != null) {
            asmr_audio = new Audio(sound.mp3);
            playASMR();
            asmr_audio.play();
        }
    }
}

function playAmbient() {
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
        //if only volume have specified
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