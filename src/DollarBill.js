var DollarBill = function(top, left, timeBetweenSteps){
  Dancer.call(this, 0, (Math.random()*($('body').width())), 1000);

  this.$node.addClass("DollarBill");
};

DollarBill.prototype = Object.create(Dancer.prototype);
DollarBill.prototype.constructor = DollarBill;
// DollarBill.prototype.lineUp = function(){};

