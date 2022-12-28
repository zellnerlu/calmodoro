const beachImageCreator= 'Photo by <a href="https://unsplash.com/@joshua_j_woroniecki?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Joshua Woroniecki</a> on <a href="https://unsplash.com/s/photos/calm-ball?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'
const forestImageCreator = 'Photo by <a href="https://unsplash.com/@sebastian_unrau?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Sebastian Unrau</a> on <a href="https://unsplash.com/s/photos/forest?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'

function changeBg(theme) {
    let imgPath = `/images/backgrounds/${theme}/img-0.jpg`;
    document.getElementById("main-bg").style.backgroundImage = "url(" + imgPath + ")";
    if (theme == "beach"){
    	document.getElementById("creator").innerHTML = beachImageCreator;
    } else if (theme == "forest"){
    	document.getElementById("creator").innerHTML = forestImageCreator;
    }
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