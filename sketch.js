/* eslint-env es6 */

class Boxthing {
    constructor(){
        this.currentXY = {
            X: null,
            y:  null
        }
        this.mooo = "hey you"
    }
    updateColor(positionx, positiony){
        
        noStroke();
        fill(random(255), random(255), random(255));
        ellipse(positionx, positiony, 50);
        this.currentXY.X = positionx;
        this.currentXY.y = positiony;
    }
}



var BOX = new Boxthing;
var BOX2 = new Boxthing;


function setup() {
 createCanvas(300,300);
 
 background(0,0,0); 
 
}

function draw() {
 
  
    
}

function ChangeColors(){
 background(0,0,0);
    
 BOX.updateColor(50,BOX.currentXY.y + 1);   
 BOX2.updateColor(BOX.currentXY.X + 100, BOX.currentXY.y);
    
 print(BOX2.mooo);
}

