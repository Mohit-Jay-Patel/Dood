var canvas="";
function preload(){
 Classifier=ml5.imageClassifier("DoodleNet"); 
}
function setup(){
canvas=createCanvas(350,350);
canvas.center();
background("white");
canvas.mouseReleased(classifyCanvas);
 synth=window.speechSynthesis;
}
function draw(){
    strokeWeight(15);
    stroke(0,0,150);
    if(mouseIsPressed){
        line(pmouseX,pmouseY,mouseX,mouseY);
    }
}

function classifyCanvas(){
    Classifier.classify(canvas, gotresult);
}
function gotresult(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        document.getElementById("label").innerHTML= "Label - "+results[0].label;
        document.getElementById("confidence").innerHTML="Confidence - "+Math.round(results[0].confidence*100)+"%";
        var speech=new SpeechSynthesisUtterance(results[0].label);
        synth.speak(speech);   
    }
}
function clearCanvas(){
    background("white");
}