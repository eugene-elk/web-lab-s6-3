'use strict';

var downloadedImages = [];
var countOfDownloadedImages = 0;
var quoteText = "";
const maxWidth = 400;

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
    // let sizes = [[300, 300], [300, 300], [300, 300], [300, 300]];
    let sizes = [[200, 200], [200, 400], [400, 200], [400, 400]];
    var urls = [];
    sizes.forEach(function(item, i, size) {
        urls.push(getImageURL(item[0], item[1]));
    });
    return urls;
}

function prepareBackground(ctx) {
    ctx.fillStyle = "rgba(0, 0, 0, 0.4)";
    ctx.fillRect(0, 0, 600, 600);
}

function drawImage(ctx, src) {
    var img = new Image();
    img.src = src;
    img.crossOrigin = 'anonymous';
    downloadedImages.push(img);
    img.onload = function () {
        countOfDownloadedImages++;
        if (countOfDownloadedImages === 4) {
            let places = [[0, 0],  [0, 200], [200, 0], [200, 200]];
            places.forEach(function (item, i, place) {
                ctx.drawImage(downloadedImages[i], item[0], item[1]);
            });
            prepareBackground(ctx);
            drawQuote(ctx);
        }
    }
}

function drawAllImages(ctx, urls) {
    for(var i = 0; i < 4; i++) {
        drawImage(ctx, urls[i]);
    }
}

function getQuote(response) {
    quoteText = response.quoteText;
}

function drawQuote(ctx) {
    ctx.font = '20px times new roman';
    ctx.fillStyle = '#ffffff';

    var lines = splitLines(ctx);
    //ctx.fillText(quoteText,220,220);

    for
}

function splitLines(ctx) {
    var lines = [];
    const words = quoteText.split(" ");

    var currentLine = words[0];
    for (let i = 1; i < words.length; i++) {
        let word = words[i];
        let width = ctx.measureText(currentLine + " " + word).width;
        if (width < maxWidth) {
            currentLine += " " + word;
        } else {
            lines.push(currentLine);
            console.log(currentLine);
            currentLine = word;
        }
    }
    lines.push(currentLine);
    console.log(currentLine);

    return lines;
}

window.onload = () => {
    var ctx = prepareCanvas();
    const imageURLs = getImageURLs();

    drawAllImages(ctx, imageURLs);

    // drawAllImages(ctx, imageURLs);
};

/*
var request = fetch('http://fizmatspb.ru/itmoweb/lab3/requester.php');
var outline = request.text();
console.log("abc");
console.log(outline);
*/