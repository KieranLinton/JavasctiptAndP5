/* eslint-env es6 */

//this is using a seperate instance of p5, thats how we make another canvas

var s = function (p) {
    p.setup = function () {
        var canvas2 = p.createCanvas(400, 200);
        canvas2.parent("canvasStuff2");
        
        p.background(0,0,0);
    }
    p.draw = function (){
        
    }
}









var myp5 = new p5(s);
