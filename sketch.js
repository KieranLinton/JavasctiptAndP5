/* eslint-env es6 */

var speeed = null;

class Boxthing {
    constructor(){           //all class variables you want to access ouytside the class have to go in the constructor
        this.currentXY = {      //creating an object called currentCY that has, the x and y, set to null for now
            X: null,
            y:  null
        }
        this.mooo = "hey you"     //and another variable, which in this case is a string
    }
    updateColor(positionx, positiony){
        if(speed > 0 && speed != null){
            noStroke();                                   //dont want a border on the circle
            fill(random(255), random(255), random(255)); //setting fill color to some random rgb
            ellipse(positionx, positiony, 50);             //after setting up all that, we now draw a circle
            this.currentXY.X = positionx;
            this.currentXY.y = positiony;   // and we set the classes variables to out current position
        }
    }
}



var BOX = new Boxthing;         //creating a new object of class Boxthing
var BOX2 = new Boxthing;         //and another


function setup() {
    createCanvas(300,300);    //setting the canvas
 
    background(0,0,0);        //making the backround black
 
}

function draw() {
    speeed = parseInt(document.getElementById("inputZone").value);   //setting speed value to the input from html
    ChangeColors();
  
    
}

function ChangeColors(){
    
    
    background(0,0,0);                                     //refreshing the background, draws over the brevious draws, so esencially cleans the canvas
    
    
    BOX.updateColor(50,BOX.currentXY.y + speeed);               //Activating the function attatched to the object that colors and draws it, and sets its position parameters to x= 50 and Y= to its current one + the speed.
    BOX2.updateColor(BOX.currentXY.X + 100, BOX.currentXY.y);   //Activating the function attatched to the object that colors and draws it,
                                                                //and sets its position parameters to x = the first box + 100, and y = the same as first box(BOX)
    
    if(BOX.currentXY.y > 300){
        BOX.updateColor(BOX.currentXY.x, 0);    //if it goes off the canvas, send it to the top again
    }
    
    print(BOX2.mooo);
    print("your current speed is: " , speeed);       //some debug

}



