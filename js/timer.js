var startTime = 0
var start = 0
var end = 0
var diff = 0
var timerID = 0
function chrono(){
	end = new Date()
	diff = end - start
	diff = new Date(diff)
	var msec = diff.getMilliseconds()
	var sec = diff.getSeconds()
	var min = diff.getMinutes()
	var hr = diff.getHours()-1
	
	if(hr < 10){
		hr = "0" + hr
	}
	if (min < 10){
		min = "0" + min
	}
	if (sec < 10){
		sec = "0" + sec
	}
	if(msec < 10){
		msec = "00" +msec
	}
	else if(msec < 100){
		msec = "0" +msec
	}
	document.getElementById("chronotime").innerHTML = hr + ":" + min + ":" + sec + ":" + msec
	timerID = setTimeout("chrono()", 10)
}
function chronoStart(){
	document.getElementById("startstop").innerHTML = "Arrêter"
	document.getElementById("startstop").onclick = chronoStop
	document.getElementById("reset").onclick = chronoReset
	start = new Date()
	chrono()
}
function chronoContinue(){
	document.getElementById("startstop").innerHTML = "Arrêter"
	document.getElementById("startstop").onclick = chronoStop
	document.getElementById("reset").onclick = chronoReset
	start = new Date()-diff
	start = new Date(start)
	chrono()
}
function chronoReset(){
	document.getElementById("chronotime").innerHTML = "00:00:00:000"
	start = new Date()
}
function chronoStopReset(){
	document.getElementById("chronotime").innerHTML = "00:00:00:000"
	document.getElementById("startstop").onclick = chronoStart
}
function chronoStop(){
	document.getElementById("startstop").innerHTML = "Lancer"
	document.getElementById("startstop").onclick = chronoContinue
	document.getElementById("reset").onclick = chronoStopReset
	clearTimeout(timerID)
}