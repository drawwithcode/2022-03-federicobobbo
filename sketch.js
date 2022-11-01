let mySong;

function preload() {
  BulevarPoster = loadFont('Assets/Font/Bulevar/Bulevar-Poster.ttf');
  mySong = loadSound("Assets/Sound/Coltrane.mp3");
}

function setup() {
	createCanvas(windowWidth-50, windowHeight-100, WEBGL);
	angleMode(DEGREES)
	colorMode(HSB)
	frameRate(60)

//p5.easycam e la classe che permette le interazioni da mouse ed il render della camera 3D
	Dw.EasyCam.prototype.apply = function(n) {
    var o = this.cam;
    n = n || o.renderer,
    n && (this.camEYE = this.getPosition(this.camEYE), this.camLAT = this.getCenter(this.camLAT), this.camRUP = this.getUpVector(this.camRUP), n._curCamera.camera(this.camEYE[0], this.camEYE[1], this.camEYE[2], this.camLAT[0], this.camLAT[1], this.camLAT[2], this.camRUP[0], this.camRUP[1], this.camRUP[2]))
    };
	cam = createEasyCam();
	cam.zoom(400);
	
// p5.3D e' la classe che attraverso delle matrici genera un testo 3D
	word = new Word3D("INTERACT",10,width/1500, 100 ,true,BulevarPoster);
}

function draw() {
	background('#000000');
	noStroke();
	// mySong.play();
	fill('#ff0059')
	translate(0,-75)
	let locX = mouseX- windowWidth/2 ;
	let locY = mouseY- windowHeight/2 ;
	rotateY(frameCount)
	ambientLight(0, 0, 0);
	pointLight(0, 0, 255, locX, locY, -450);
	pointLight(0, 0, 255, locX, locY, 450);
	word.show(); 


}


