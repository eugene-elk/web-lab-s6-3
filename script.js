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
    context.fillRect(0, 0, canvas.width, canvas.height);
    return context;
}



window.onload = () => {
    const ctx = prepareCanvas();

};

/*
var request = fetch('http://fizmatspb.ru/itmoweb/lab3/requester.php');
var outline = request.text();
console.log("abc");
console.log(outline);
*/