var delay = ( function() {
    var timer = 0;
    return function(callback, ms) {
        clearTimeout (timer);
        timer = setTimeout(callback, ms);
    };
})();

delay(function(){
    // do stuff
    document.getElementById("mydiv").style.background = 'linear-gradient(to bottom, white 0%,white 90%,green 90%)';
    delay(function(){
    // do stuff
    document.getElementById("mydiv").style.background = 'linear-gradient(to bottom, white 0%,white 80%,green 80%)';
    delay(function(){
    // do stuff
    document.getElementById("mydiv").style.background = 'linear-gradient(to bottom, white 0%,white 70%,green 70%)';
    delay(function(){
    // do stuff
    document.getElementById("mydiv").style.background = 'linear-gradient(to bottom, white 0%,white 60%,green 60%)';
    delay(function(){
    // do stuff
    document.getElementById("mydiv").style.background = 'linear-gradient(to bottom, white 0%,white 50%,green 50%)';
    delay(function(){
    // do stuff
    document.getElementById("mydiv").style.background = 'linear-gradient(to bottom, white 0%,white 40%,green 40%)';
    delay(function(){
    // do stuff
    document.getElementById("mydiv").style.background = 'linear-gradient(to bottom, white 0%,white 30%,green 30%)';
    delay(function(){
    // do stuff
    document.getElementById("mydiv").style.background = 'linear-gradient(to bottom, white 0%,white 20%,green 20%)';
    delay(function(){
    // do stuff
    document.getElementById("mydiv").style.background = 'linear-gradient(to bottom, white 0%,white 10%,green 10%)';
    delay(function(){
    // do stuff
    document.getElementById("mydiv").style.background = 'linear-gradient(to bottom, white 0%,white 0%,green 0%)';
}, 1000 );
}, 1000 );
}, 1000 );
}, 1000 );

}, 1000 );
}, 1000 );

}, 1000 );
}, 1000 );
}, 1000 );


}, 1000 );

