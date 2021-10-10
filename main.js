img =""
status = "";
objects = [];
function setup() {
          canvas = createCanvas(350, 300);
          canvas.center();

          video = createCapture(VIDEO);
          video.size(380, 380);
          video.hide();

          objectDetector = ml5.objectDetector('cocossd', modelLoaded);
          document.getElementById("status").innerHTML = "Wait, we are Detecting object";
}

function modelLoaded() {
          console.log("The model has been initialized");
          status = true;
          objectDetector.detect(img, gotResults);
}

function draw() {
          image(video, 0, 0, 350, 350);
}