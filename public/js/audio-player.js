let ambient_audio = null
let nature_audio = null
let asmr_audio = null

const bib = {
    ambient: {
        motivation: {
            title: "Motivation",
            mp3: "https://cdn.pixabay.com/download/audio/2021/11/26/audio_e20882e29d.mp3?filename=acoustic-motivation-11290.mp3",
            attribution: 'Music by <a href="https://pixabay.com/de/users/coma-media-24399569/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=music&amp;utm_content=11290">Coma-Media</a> from <a href="https://pixabay.com//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=music&amp;utm_content=11290">Pixabay</a>'
        },
        piano: {
            title: "Piano",
            mp3: "https://cdn.pixabay.com/audio/2021/10/25/audio_05570f2464.mp3",
            attribution: 'Music by <a href="https://pixabay.com/de/users/daddy_s_music-22836301/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=music&amp;utm_content=9835">Daddy_s_Music</a> from <a href="https://pixabay.com/music//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=music&amp;utm_content=9835">Pixabay</a>'
        },
        meditation: {
            title: "Meditation",
            mp3: "https://cdn.pixabay.com/audio/2021/08/14/audio_ffd25fe177.mp3",
            attribution: 'Music by <a href="https://pixabay.com/de/users/natureseye-18615106/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=music&amp;utm_content=7359">NaturesEye</a> from <a href="https://pixabay.com//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=music&amp;utm_content=7359">Pixabay</a>'
        }
    },
    nature: {
        birds: {
            title: "European Forest Birds",
            mp3: "https://assets.mixkit.co/sfx/preview/mixkit-european-forest-ambience-1213.mp3",
            attribution: 'mixkit.co'
        },
        rain: {
            title: "Rain",
            mp3: "https://assets.mixkit.co/sfx/preview/mixkit-long-rain-ambience-1247.mp3",
            attribution: 'mixkit.co'
        },
        wind: {
            title: "Cold Winds",
            mp3: "https://assets.mixkit.co/sfx/preview/mixkit-blizzard-cold-winds-1153.mp3",
            attribution: 'mixkit.co'
        },
        waves: {
            title: "Waves",
            mp3: "https://assets.mixkit.co/sfx/preview/mixkit-sea-waves-loop-1196.mp3",
            attribution: 'mixkit.co'
        }
    },
    asmr: {
        keyboardtyping: {
            title: "Keyboard Typing",
            mp3: "https://assets.mixkit.co/sfx/preview/mixkit-laptop-keyboard-typing-sequence-2537.mp3",
            attribution: 'mixkit.co'
        },
        pageturning: {
            title: "Page Turning",
            mp3: "https://assets.mixkit.co/sfx/preview/mixkit-turning-the-newspaper-big-page-1097.mp3",
            attribution: 'mixkit.co'
        },
        urban: {
            title: "Urban",
            mp3: "https://assets.mixkit.co/sfx/preview/mixkit-urban-ambient-sound-2465.mp3",
            attribution: 'mixkit.co'
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

function stopAudio(a) {
    a.pause();
    a = null;
}

function stopAllAudio() {
    if (ambient_audio != null) {
        stopAudio(ambient_audio);
    }
    if (nature_audio != null) {
        stopAudio(nature_audio);
    }
    if (asmr_audio != null) {
        stopAudio(asmr_audio);
    }
}

function playMyAudio(cat, s) {
    sound = findSound(cat, s);
    console.log(sound);
    if (cat == "ambient") {
        if (ambient_audio != null | sound == null) {
            stopAudio(ambient_audio);
            /*ambient_audio.pause();
            ambient_audio = null;*/
        }
        if (sound != null) {
            ambient_audio = new Audio(sound.mp3);
            ambient_audio.addEventListener('ended', function () {
                this.currentTime = 0;
                this.play();
            }, false);
            playAmbient();
            ambient_audio.play();
        }
    } else if (cat == "nature") {
        if (nature_audio != null | sound == null) {
            stopAudio(nature_audio);
            /*nature_audio.pause();
            nature_audio = null;*/
        }
        if (sound != null) {
            nature_audio = new Audio(sound.mp3);
            nature_audio.addEventListener('ended', function () {
                this.currentTime = 0;
                this.play();
            }, false);
            playNature();
            nature_audio.play();
        }
    } else if (cat == "asmr" | sound == null) {
        if (asmr_audio != null) {
            stopAudio(asmr_audio);
            /*asmr_audio.pause();
            asmr_audio = null;*/
        }
        if (sound != null) {
            asmr_audio = new Audio(sound.mp3);
            asmr_audio.addEventListener('ended', function () {
                this.currentTime = 0;
                this.play();
            }, false);
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