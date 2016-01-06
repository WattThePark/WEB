
var delay = ( function() {
    var timer = 0;
    return function(callback, ms) {
        clearTimeout (timer);
        timer = setTimeout(callback, ms);
    };
})();

delay(function(){
    // do stuff
    document.getElementById("mydiv").style.background = 'linear-gradient(to bottom, white 0%,white 90%,rgba(64,187,106,1) 90%)';
	 document.getElementById("text").innerHTML="10 Watts";
    delay(function(){
    // do stuff
    document.getElementById("mydiv").style.background = 'linear-gradient(to bottom, white 0%,white 80%,rgba(64,187,106,1) 80%)';
	document.getElementById("text").innerHTML="20 Watts";
    delay(function(){
    // do stuff
    document.getElementById("mydiv").style.background = 'linear-gradient(to bottom, white 0%,white 70%,rgba(64,187,106,1) 70%)';
	document.getElementById("text").innerHTML="30 Watts";
    delay(function(){
    // do stuff
    document.getElementById("mydiv").style.background = 'linear-gradient(to bottom, white 0%,white 60%,rgba(64,187,106,1) 60%)';
	document.getElementById("text").innerHTML="40 Watts";
    delay(function(){
    // do stuff
    document.getElementById("mydiv").style.background = 'linear-gradient(to bottom, white 0%,white 50%,rgba(64,187,106,1) 50%)';
	document.getElementById("text").innerHTML="50 Watts";
    delay(function(){
    // do stuff
    document.getElementById("mydiv").style.background = 'linear-gradient(to bottom, white 0%,white 40%,rgba(64,187,106,1) 40%)';
	document.getElementById("text").innerHTML="60 Watts";
    delay(function(){
    // do stuff
    document.getElementById("mydiv").style.background = 'linear-gradient(to bottom, white 0%,white 30%,rgba(64,187,106,1) 30%)';
	document.getElementById("text").innerHTML="70 Watts";
    delay(function(){
    // do stuff
    document.getElementById("mydiv").style.background = 'linear-gradient(to bottom, white 0%,white 20%,rgba(64,187,106,1) 20%)';
	document.getElementById("text").innerHTML="80 Watts";
    delay(function(){
    // do stuff
    document.getElementById("mydiv").style.background = 'linear-gradient(to bottom, white 0%,white 10%,rgba(64,187,106,1) 10%)';
	document.getElementById("text").innerHTML="90 Watts";
    delay(function(){
    // do stuff
    document.getElementById("mydiv").style.background = 'linear-gradient(to bottom, white 0%,white 0%,rgba(64,187,106,1) 0%)';
	document.getElementById("text").innerHTML="100 Watts";
    delay(function(){
    // do stuff
    document.getElementById("image").src="./images/batterie-fin.png";
    
    document.getElementById("text").innerHTML="Vous avez généré <br/> ...";
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


}, 1000 );

