
var prediction1=""
var prediction2=""



Webcam.set({


width:300,
height:250,
image_format:'jpg',
jpg_quality:100
})

camera=document.getElementById("camera")

Webcam.attach("#camera")

function take_Snapshot()
{

Webcam.snap(function(data_uri){
document.getElementById("snapshot").innerHTML='<img id="captured_image" src="'+data_uri+'"/>'

});}

console.log('ml5 version' , ml5.version)

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/qzrzbgF-W/model.json',model_loaded)

function model_loaded(){
console.log('model_loaded')

}

function speak()
{
var synth = window.speechSynthesis;
speak_data="first prediction is" + prediction1
speak_data_2="second prediction is" + prediction2
var utterThis=new SpeechSynthesisUtterance(speak_data + speak_data_2);
synth.speak(utterThis);
}   

function check(){

    img = document.getElementById('captured_image')
    classifier.classify(img, gotResult)

}

function gotResult(error,results){
if (error)
{console.log(error)}
else
{console.log(results)

document.getElementById("result_emotion_name").innerHTML= results[0].label
document.getElementById("result_emotion_name2").innerHTML= results[1].label

prediction1=results[0].label
prediction2=results[1].label

speak();

if (prediction1=="thumbs up"){
    document.getElementById("result_emotion_name3").innerHTML="&#128077;"
}
if (prediction1=="thumbs down"){
    document.getElementById("result_emotion_name3").innerHTML="&#128078;"
}
if (prediction1=="peace"){
    document.getElementById("result_emotion_name3").innerHTML="&#9996;"
}


if (prediction2=="thumbs up"){
    document.getElementById("result_emotion_name4").innerHTML="&#128077;"
}
if (prediction2=="thumbs down"){
    document.getElementById("result_emotion_name4").innerHTML="&#128078;"
}
if (prediction2=="peace"){
    document.getElementById("result_emotion_name4").innerHTML="&#9996;"
}


















}







}
