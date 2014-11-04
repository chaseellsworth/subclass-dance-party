var lineupDancers = function(){
  for (var i = 0; i < dancers.length; i++){
    var currentDancer = dancers[i];
    currentDancer.stop();
    currentDancer.$node.animate({left: '0px'});
  }
  setTimeout(function(){
    for(var i = 0; i < dancers.length; i++){
      var currentDancer = dancers[i];
      if (currentDancer.constructor === MovingDancer){
        currentDancer.step();
      }else{
        currentDancer.$node.css(getRandomPosition());
        currentDancer.step();
      }
    }
  }, 5000);

};
