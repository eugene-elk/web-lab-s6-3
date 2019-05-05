'use strict';

function prepareCanvas() {
    const canvas = document.createElement("canvas");
    canvas.height = 600;
    canvas.width = 600;
    canvas.style = "margin-right: auto;\n" +
        "    margin-left: auto;\n" +
        "    display: block;";
    document.body.appendChild(canvas);
    var context = canvas.getContext('2d');
    //context.fillRect(0, 0, canvas.width, canvas.height);
    return context;
}

function getImageURL(w, h) {
    return `https://source.unsplash.com/random/${w}x${h}`;
}

function getImageURLs() {
    let sizes = [[300, 200], [300, 300], [200, 500]];
    var urls = [];
    sizes.forEach(function(item, i, size) {
        urls.push(getImageURL(item[0], item[1]));
    });
    return urls;
}

function drawImage(ctx, x, y, src) {
    var img = new Image();
    img.src = 'https://source.unsplash.com/random/300x300';
    img.crossOrigin = 'anonymous';
    img.onload = function () {
        ctx.drawImage(img, x, y);
    }
}


window.onload = () => {
    var ctx = prepareCanvas();
    const imageURLs = getImageURLs();

    drawImage(ctx, 0, 0);
};

/*
var request = fetch('http://fizmatspb.ru/itmoweb/lab3/requester.php');
var outline = request.text();
console.log("abc");
console.log(outline);
*/