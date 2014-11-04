var MovingDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
};

MovingDancer.prototype = Object.create(Dancer.prototype);
MovingDancer.prototype.constructor = MovingDancer;
MovingDancer.prototype.step = function (){
  Dancer.prototype.step.call(this, this.timeBetweenSteps);
  var newPosition = getRandomPosition();
  this.$node.animate(newPosition, this.timeBetweenSteps);
  this.$node.css('border-color', colors[randomNumber(colors.length)]);
};

MovingDancer.prototype.lineUp = function(){
  //
};

var getRandomPosition = function(){
  var bodyHeight = $('body').height();
  var bodyWidth = $('body').width();
  var newHeight = randomNumber(bodyHeight);
  var newWidth = randomNumber(bodyWidth);
  return {
    top: newWidth,
    left: newHeight
  };
};

