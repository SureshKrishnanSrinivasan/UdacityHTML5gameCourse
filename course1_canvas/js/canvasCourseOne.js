/*from Udacity Course cs255: HTML5 Game Development. Can be found here: https://www.udacity.com/course/cs255*/

var canvas = null;
var ctx = null;
var frameRate = 1000 / 30;
var assets = ['https://www.udacity.com/media/js/standalone/libs/gamedev_assets/robowalk/robowalk00.png',
              'https://www.udacity.com/media/js/standalone/libs/gamedev_assets/robowalk/robowalk01.png',
              'https://www.udacity.com/media/js/standalone/libs/gamedev_assets/robowalk/robowalk02.png',
              'https://www.udacity.com/media/js/standalone/libs/gamedev_assets/robowalk/robowalk03.png',
              'https://www.udacity.com/media/js/standalone/libs/gamedev_assets/robowalk/robowalk04.png',
              'https://www.udacity.com/media/js/standalone/libs/gamedev_assets/robowalk/robowalk05.png',
              'https://www.udacity.com/media/js/standalone/libs/gamedev_assets/robowalk/robowalk06.png',
              'https://www.udacity.com/media/js/standalone/libs/gamedev_assets/robowalk/robowalk07.png',
              'https://www.udacity.com/media/js/standalone/libs/gamedev_assets/robowalk/robowalk08.png',
              'https://www.udacity.com/media/js/standalone/libs/gamedev_assets/robowalk/robowalk09.png',
              'https://www.udacity.com/media/js/standalone/libs/gamedev_assets/robowalk/robowalk10.png',
              'https://www.udacity.com/media/js/standalone/libs/gamedev_assets/robowalk/robowalk11.png',
              'https://www.udacity.com/media/js/standalone/libs/gamedev_assets/robowalk/robowalk12.png',
              'https://www.udacity.com/media/js/standalone/libs/gamedev_assets/robowalk/robowalk13.png',
              'https://www.udacity.com/media/js/standalone/libs/gamedev_assets/robowalk/robowalk14.png',
              'https://www.udacity.com/media/js/standalone/libs/gamedev_assets/robowalk/robowalk15.png',
              'https://www.udacity.com/media/js/standalone/libs/gamedev_assets/robowalk/robowalk16.png',
              'https://www.udacity.com/media/js/standalone/libs/gamedev_assets/robowalk/robowalk17.png',
              'https://www.udacity.com/media/js/standalone/libs/gamedev_assets/robowalk/robowalk18.png'
             ];
var frames = [];
var frame = 0;

var onImageLoad = function(){
    console.log("IMAGE!!!");
};

var setup = function() {
    body = document.getElementById('body');
    canvas = document.createElement('canvas');

    ctx = canvas.getContext('2d');
    
    canvas.width = 100;
    canvas.height = 100;

    body.appendChild(canvas);

    // Load each image URL from the assets array into the frames array 
    // in the correct order.
    // Afterwards, call setInterval to run at a framerate of 30 frames 
    // per second, calling the animate function each time.
    // YOUR CODE HERE
    for ( var i = 0; i < assets.length; i++ ) {
        frames.push( new Image() );
        frames[ i ].onload = onImageLoad;
        frames[ i ].src = assets[ i ];
    }
    
    setInterval( animate, frameRate );

};

var animate = function(){
    // Draw each frame in order, looping back around to the 
    // beginning of the animation once you reach the end.
    // Draw each frame at a position of (0,0) on the canvas.
  
    // Try your code with this call to clearRect commented out
    // and uncommented to see what happens!
    //
    ctx.clearRect(0,0,canvas.width, canvas.height);
  
    // YOUR CODE HERE
    ctx.drawImage( frames[ frame ], 0, 0 );
    frame = (frame + 1) % frames.length;
};

// We'll call your setup function in our test code, so
// don't call it in your code.
setup();