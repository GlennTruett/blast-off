function countdownTimer() {
    //countdownTimer Will go from 50 to 0 by 5s
    console.log("countdownTimer() started");
    var currTime = 50;
    document.getElementById("countDis").innerHTML = currTime + " sec";
    //45 sec display
    setTimeout(function () {
       
        currTime = currTime - 5;
        console.log(currTime);
        document.getElementById("countDis").innerHTML = currTime + " sec";    
    }, 5000);

//40 sec display
setTimeout(function () {
    currTime = currTime - 5;
    console.log(currTime);
    document.getElementById("countDis").innerHTML = currTime + " sec";    
}, 10000);

//35 sec display
setTimeout(function () {
    currTime = currTime - 5;
    console.log(currTime);
    document.getElementById("countDis").innerHTML = currTime + " sec";    
}, 15000);

//30 sec display
setTimeout(function () {
    currTime = currTime - 5;
    console.log(currTime);
    document.getElementById("countDis").innerHTML = currTime + " sec";    
}, 20000);

//25 sec display
setTimeout(function () {
    currTime = currTime - 5;
    console.log(currTime);
    document.getElementById("countDis").innerHTML = currTime + " sec";    
}, 25000);

//20 sec display
setTimeout(function () {
    currTime = currTime - 5;
    console.log(currTime);
    document.getElementById("countDis").innerHTML = currTime + " sec";    
}, 30000);

//15 sec display
setTimeout(function () {
    currTime = currTime - 5;
    console.log(currTime);
    document.getElementById("countDis").innerHTML = currTime + " sec";    
}, 35000);

//10 sec display
setTimeout(function () {
    currTime = currTime - 5;
    console.log(currTime);
    document.getElementById("countDis").innerHTML = currTime + " sec";    
}, 40000);

//5 sec display
setTimeout(function () {
    currTime = currTime - 5;
    console.log(currTime);
    document.getElementById("countDis").innerHTML = currTime + " sec";    
}, 45000);

//0 sec display
setTimeout(function () {
    currTime = currTime - 5;
    console.log(currTime);
    document.getElementById("countDis").innerHTML =  "Blastoff!!";    
}, 50000);

function playCraps() {
// troubleshooting playCraps() has started
console.log("playCraps(0 started");



}

}
