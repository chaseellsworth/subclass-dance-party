var BlinkyDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;
BlinkyDancer.prototype.step = function (){
  Dancer.prototype.step.call(this, this.timeBetweenSteps);
  this.$node.toggle();
};
BlinkyDancer.prototype.lineUp = function(){};

