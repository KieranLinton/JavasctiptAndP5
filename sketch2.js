/* eslint-env es6 */

//this is using a seperate instance of p5, thats how we make another canvas
var cameraIN;
let classifier;
let mobileNet;
let label = "ffff";

function setOBject() {
    classifier.addImage(cameraIN, document.getElementById("nameOfthingy").value);
    console.log('captured ', document.getElementById("nameOfthingy").value )
}

function trainIt() {
    classifier.train(function (lossValue) {
        console.log('Loss is', lossValue)
    });
}

var s = function (p) {
    p.setup = function () {
        var canvas2 = p.createCanvas(700, 500);
        canvas2.parent("canvasStuff2");
        p.background(0);
        cameraIN = createCapture(VIDEO);
        cameraIN.hide();
         p.image(cameraIN, 0, 0);
        p.fill(255);
        p.textSize(34);
        p.text(label, 10, 400);

        mobileNet = ml5.featureExtractor('MobileNet', modelLoaded);
        classifier = mobileNet.classification(cameraIN);

    }
    p.draw = function () {


        p.image(cameraIN, 0, 0);
        p.fill(255);
        p.textSize(34);
        p.text(label, 10, 400);

    }

    function modelLoaded() {
        console.log('Model Loaded!');

        classifier.classify(getResults);
    }

    function getResults(err, results) {
        if (err) {
            console.log("error");
        }


        console.log(results);
        label = results;
        classifier.classify(getResults);

    }








}

var myp5 = new p5(s);
