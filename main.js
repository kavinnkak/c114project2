function preload()
{
    clown_nose = loadImage('https://i.postimg.cc/sgJh7Rxb/musta.png');

}

mouthX=0;
mouthY=0;


function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        mouthX = results[0].pose.nose.x;
        mouthY = results[0].pose.nose.y;
        //console.log("nose x = " + results[0].pose.nose.x);
        //console.log("nose y = " + results[0].pose.nose.y);
    }
}

function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}

function draw()
{
    image(video, 0, 0, 300, 300);
    image(clown_nose, mouthX-30, mouthY-5, 60, 30);
}
    function take_snapshot()
    {
        save('YourFilteredImage.png');
    }

    function modelLoaded()
    {
        console.log('posenet intialized');
    }




