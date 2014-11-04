var Dancer = function(top, left, timeBetweenSteps){
  this.$node = $('<span class="dancer"></span>');
  this.top = top;
  this.left = left;
  this.setPosition(this.top, this.left);
};

Dancer.prototype.step = function(){
  var boundFunc = this.step.bind(this, this.timeBetweenSteps);
  setTimeout(boundFunc, this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left){
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

