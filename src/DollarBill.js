var DollarBill = function(top, left, timeBetweenSteps){
  Dancer.call(this, 0, (Math.random()*($('body').width())), 1000);
  this.$node.addClass("DollarBill");
  this.$node.animate({top: $('body').height()}, 1500)

};

DollarBill.prototype = Object.create(Dancer.prototype);
DollarBill.prototype.constructor = DollarBill;
// DollarBill.prototype.lineUp = function(){};

