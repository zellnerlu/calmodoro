const images = {
    beach: {
        title: "Beach",
        attribution: 'Photo by <a href="https://unsplash.com/@joshua_j_woroniecki?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Joshua Woroniecki</a> on <a href="https://unsplash.com/s/photos/calm-ball?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
    },
    forest: {
        title: "Forest",
        attribution: 'Photo by <a href="https://unsplash.com/@sebastian_unrau?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Sebastian Unrau</a> on <a href="https://unsplash.com/s/photos/forest?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
    }
}

function changeBg(theme) {
    //let imgPath = `/images/backgrounds/${theme}/img-0.jpg`;
    let imgPath = `https://images.unsplash.com/photo-1550728041-b3dfaa66940a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80`;
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