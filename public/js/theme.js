const images = {
    beach: {
        title: "Beach",
        path: "beach",
        attribution: 'Photo by <a href="https://unsplash.com/@quinoal?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Quino Al</a> on <a href="https://unsplash.com/images/nature/beach?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a> ',
    },
    forest: {
        title: "Forest",
        path: "forest",
        attribution: 'Photo by <a href="https://unsplash.com/@sakulich?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Sergej A</a> on <a href="https://unsplash.com/photos/-heLWtuAN3c?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
    },
    river: {
        title: "River",
        path: "river",
        attribution: 'Photo by <a href="https://unsplash.com/@akaunas?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Sasha Kaunas</a> on <a href="https://unsplash.com/photos/b_wN4QemTzU?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a> ',
    },
    sky: {
        title: "Sky",
        path: "sky",
        attribution: 'Photo by <a href="https://unsplash.com/@jdiegoph?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Diego PH</a> on <a href="https://unsplash.com/wallpapers/nature/sky?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a> ',
    }
}

function changeBg(title) {
    let imgPath = `/images/backgrounds/` + images[title].path + `.jpg`;
    console.log(imgPath);
    document.getElementById("main-bg").style.backgroundImage = "url(" + imgPath + ")";
    //document.getElementById("creator").innerHTML = images[theme].attribution;
}

function changeBgLoop(theme) {
    let num = 0;
    setInterval(() => {
        let imgPath = `/images/backgrounds/${theme}/img-${num}.jpg`;
        console.log(imgPath);
        document.getElementById("main-bg").style.backgroundImage = "url(" + imgPath + ")";
        num++; //switch to the next image
        num = num % 2; // assume you have 2 images only
    }, 1000);
}