"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 14
   Case Problem 1

   Author: Sredna Kunowski
   Date:   4/2/2020
   
   Filename: bu_bubbles.js

   file:///C:/Users/Sredna/Desktop/Github%20Programs/Case%201%20Tutorial%2014/bu_home_txt.html

*/
console.log("hello");
//4.
var box = {

   width: 1024,
   height: 500
};

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
   this.opacity -= 0.0005;
};

bubble.prototype.changeColor = function(){
   this.hue = (this.hue + 3) % 360;
};

bubble.prototype.rotateBubble = function(){
   this.rotate = (this.rotate + this.rotateDirection) % 360;
};

//7.
bubble.prototype.moveBubble = function(height, width){

   var bubbleTop = this.yPos;
   var bubbleBottom = this.yPos + this.radius;
   var bubbleLeft = this.xPos;
   var bubbleRight = this.xPos + this.radius;

   if(bubbleTop < 0 || bubbleBottom > height){
      this.yVelocity -= this.yVelocity;
   }
   if(bubbleLeft < 0 || bubbleRight > width){
      this.xVelocity -= this.xVelocity;
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
         var newBubble = new bubble(randInt(50,120), "bu_bubble" + randInt(1,10) + ".png");

         //10.
         newBubble.xPos = box.width / 2;
         newBubble.yPos = box.height / 2;
         //not sure why a random int is used if the value is gonna be 5
         newBubble.xVelocity = randInt(-5,5);
         newBubble.yVelocity = randInt(-5,5);
         newBubble.rotate = randInt(0,360);
         newBubble.hue = randInt(0,360);
         newBubble.rotateDirection = randInt(-2,2);

         //11.
         var bubbleImg = document.createElement("img");
         bubbleImg.style.position = "absolute";
         bubbleImg.src = newBubble.imageURL;
         bubbleImg.style.width = newBubble.radius + "px";
         bubbleImg.style.left = newBubble.xPos + "px";
         bubbleImg.style.top = newBubble.yPos + "px";

         bubbleBox.appendChild(bubbleImg);

         //12.
         var bubbleInterval = setInterval(function() {

            //13.
            newBubble.fadeBubble();
            if(newBubble.opacity < 0){
               //14.
               clearInterval(bubbleInterval);
               bubbleBox.removeChild(bubbleImg);
            }
            //15.
            else{
               bubbleImg.style.opacity = newBubble.opacity;
               newBubble.changeColor();
               bubbleImg.style.filter = "hue-rotate(" + newBubble.hue + "deg)";

               newBubble.rotateBubble();
               bubbleImg.style.transform = "rotate(" + newBubble.rotate + "deg)";

               newBubble.moveBubble(box.height, box.width);
               bubbleImg.style.top = newBubble.yPos + "px";
               bubbleImg.style.left = newBubble.xPos + "px";
            }

         }, 25)


      }
      
   }, 500);

   /* Function to return a random integer between minVal and maxValue inclusive */
   function randInt(minVal, maxVal) {
      var size = maxVal - minVal + 1;
      return Math.floor(minVal + size*Math.random());
   }  

});
