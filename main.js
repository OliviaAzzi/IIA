Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach("#camera");
function take_snapshot() {
    Webcam.snap(function(src_of_image) {
        document.getElementById("result").innerHTML="<img id='captured_image' src='"+src_of_image+"'/>";
    });
}
console.log("ml5 version is",ml5.version);
model5=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/0khCMYo-9/model.json",model_loaded);
function model_loaded() {
    console.log("The Model has been loaded");
}
function check() {
    var img=document.getElementById("captured_image");
    model5.classify(img,got_result);
}
function got_result(error,result) {
    if (error) {
        console.log(error);
    }
    else{
        console.log(result);
        document.getElementById("object_name").innerHTML=result[0].label;
        document.getElementById("accuracy_name").innerHTML=result[0].confidence.toFixed(3);
    }
}