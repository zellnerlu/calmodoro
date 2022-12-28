const bib = {
    sound1: {
        title: "asian",
        mp3: "https://audio-previews.elements.envatousercontent.com/files/229831170/preview.mp3?response-content-disposition=attachment%3B+filename%3D%229GAQVEN-asian.mp3%22"
    },
    sound2: {
        title: "african",
        mp3: "https://audio-previews.elements.envatousercontent.com/files/304187853/preview.mp3?response-content-disposition=attachment%3B+filename%3D%228L4HDXW-africa-logo.mp3%22"
    }
}

function findSound(s) {    
    for (const key in bib) {
        if (bib[key].title == s) {
            console.log("Found sound");
            return bib[key];
        }
    }
}

function playMySound(s) {
    sound = findSound(s);
    if (sound != null) {
        console.log("Playing sound " + sound.title);
        if ($("#jquery_jplayer_1").jPlayer("getData", "diag.isPlaying") == true) {
            $("#jquery_jplayer_1").jPlayer("stop");
        } 
        $("#jquery_jplayer_1").jPlayer({
            ready: function () {
                $(this).jPlayer("setMedia", {
                    title: sound.title,
                    mp3: sound.mp3,
                }).jPlayer("play");
            },
            cssSelectorAncestor: "#jp_container_1",
            swfPath: "./js",
            supplied: "mp3",
            wmode: "window",
            useStateClassSkin: true,
            autoBlur: false,
            smoothPlayBar: true,
            keyEnabled: true,
            remainingDuration: true,
            toggleDuration: true
        });
    }
}