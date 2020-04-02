"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 14
   Case Problem 1

   Author: Sredna Kunowski
   Date:   4/2/2020
   
   Filename: bu_bubbles.js

*/

//4.
var box = {

   width: 1024,
   height: 500
}

//5.
function bubble(size, img){

   this.radius = size;
   this.imageURL = img;
   this.xVelocity = null;
   this.yVelocity = null;
   this.xPos = null;
   this.yPos = null;
   this.opacity = 1;
   this.hue = 0;
   this.rotate = 0;
   this.rotateDirection = 1;

}

//6.
bubble.prototype.fadeBubble = function(){
   this.opacity = 0.0005;
}

bubble.prototype.changeColor = function(){
   this.hue = (this.hue + 3) % 360;
}

bubble.prototype.rotateBubble = function(){
   this.rotate = (this.rotate + this.rotateDirection) % 360;
}

//7.
bubble.prototype.moveBubble = function(height, width){

   var bubbleTop = this.yPos;
   var bubbleBottom = this.yPos + this.radius;
   var bubbleLeft = this.xPos;
   var bubbleRight = this.xPos + this.radius;

   if(bubbleTop < 0 || bubbleBottom > height){
      this.yVelocity = this.yVelocity;
   }
   if(bubbleLeft < 0 || bubbleRight > width){
      this.xVelocity = this.xVelocity;
   }
   this.yPos += this.yVelocity;
   this.xPos += this.xVelocity;
}


//event listener for the load event 
window.addEventListener("load", function() {
   // Reference to the bubble box
   var bubbleBox = document.getElementById("bubbleBox");
   
   // Create a new bubble every half-second
   setInterval(function() {
      
      // Do not create more than 20 bubbles at any one time
      if (bubbleBox.childElementCount <= 20) {
         //9.
         var newBubble 
      }
      
   }, 500);

   /* Function to return a random integer between minVal and maxValue inclusive */
   function randInt(minVal, maxVal) {
      var size = maxVal - minVal + 1;
      return Math.floor(minVal + size*Math.random());
   }  

});