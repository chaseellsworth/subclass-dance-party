$(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });

  $(".lineUpDancersButton").on("click", lineupDancers);

  $(".makeItRainButton").on("click", function(){
    setInterval(function(){
      var dollar = new DollarBill;
      $('body').append(dollar.$node);
      console.log('new bill');
    }, 500);
    $('body').css({"background-image": "url('http://tech.co/wp-content/uploads/2014/05/Miami1.jpg')"});
  })

});


var collisionDetector = function () {
  setInterval(function(){
    for(var i = 0; i < window.dancers.length; i++){
      for (j = 0; j< window.dancers.length;j++){
        if(i !== j){
          if(Math.abs(window.dancers[i].$node[0].offsetTop - window.dancers[j].$node[0].offsetLeft) < 20 && Math.abs(window.dancers[i].$node[0].offsetLeft - window.dancers[j].$node[0].offsetTop) < 20){
            $(window.dancers[i].$node[0]).stop();
            $(window.dancers[j].$node[0]).stop();
          }
        }
      }
    }




      // if (currentDancer !== this){
      //   // console.log(Math.min(Math.abs(currentDancer.$node[0].offsetTop - this.$node[0].offsetTop),Math.abs(currentDancer.$node[0].offsetLeft - this.$node[0].offsetLeft)));
      //   if ((Math.abs(currentDancer.$node[0].offsetTop - this.$node[0].offsetTop) < 200) && (Math.abs(currentDancer.$node[0].offsetLeft - this.$node[0].offsetLeft) < 200)){
      //     console.log("working");
      //   }
      // }
  }, 5);
};
collisionDetector();
