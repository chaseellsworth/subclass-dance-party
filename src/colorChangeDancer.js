var ColorChangeDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
};

ColorChangeDancer.prototype = Object.create(Dancer.prototype);
ColorChangeDancer.prototype.constructor = ColorChangeDancer;
ColorChangeDancer.prototype.step = function (){
  Dancer.prototype.step.call(this, this.timeBetweenSteps);
  this.$node.css('border-color', colors[randomNumber(colors.length)]);
};

ColorChangeDancer.prototype.lineUp = function(){};


var colors = ['red', 'white', 'blue', 'green'];

var randomNumber = function(max){
  return Math.floor(Math.random() * max);
};
