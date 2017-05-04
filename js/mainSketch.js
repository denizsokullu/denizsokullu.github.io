
//CMU Design Census p5.js file
var images = {
	CD:[[],[],[],[]],
	ID:[[],[],[],[]],
	IX:[[],[],[],[]],
	CDImageCount: 5,
	CDImageCount1: 5,
	CDImageCount2: 4,
	CDImageCount3: 4,
	IDImageCount:4,
	IDImageCount1:4,
	IDImageCount3: 4,
	IXImageCount: 4,
	IXImageCount2: 4,
	IXImageCount3: 4
}
var mouseMovedBool = false;

var multiplier = .83333
var ratio = 895/1700;
var limit = 2042;

var cWidth;
var cHeight;

var song;
var drawOnce = true;
var bg;

var play = true;

var playToggle;

function preload(){
	song = loadSound("assets/"+songString);
	masterVolume(0.2);
}

function setup (){
	var playToggle = select("#playToggle");
	playToggle.mousePressed(function(){
	  playToggle = document.getElementById('playToggle');
	  if (play){
	  	playToggle.innerHTML = "Sound On"
	  	masterVolume(0.0);
	  	play = !play;
	  }
	  else if (!play){
	  	playToggle.innerHTML = "Sound Off"
	  	masterVolume(0.075);
	  	play = !play;
	  }
	});
	song.playMode("sustain");
	song.play();
	if (windowWidth <= limit){
		var cWidth = windowWidth*multiplier*0.94;	
	}
	else{
		var cWidth = limit*multiplier*0.94;	
	}
	var cHeight = (895*cWidth)/1700;
	var canvas = createCanvas(cWidth,cHeight);
	canvas.parent('sketch-holder');


	bg = createImg("assets/"+bgString);

	bg.parent('sketch-holder');
	bg.style("z-index","-1");
	bg.style("top","0");
	bg.style("left","0");
	bg.style("width","100.00%");
	bg.style("height","auto");
	bg.style("position","relative");

	for (var i = 1; i < 2; i++){
		for (var j = 1; j < images["CDImageCount"+str(i)]+1; j++){
			images.CD[i][j] = 
			[loadImage("assets/CD"+str(i)+str(j)+".png"),
			 loadImage("assets/CD"+str(i)+str(j)+"hover.png")]
		}
	}
	for (var i = 2; i < 3; i++){
		for (var j = 1; j < images["CDImageCount"+str(i)]+1; j++){
			images.CD[i][j] = 
			[loadImage("assets/CD"+str(i)+str(j)+".png"),
			 loadImage("assets/CD"+str(i)+str(j)+"hover.png")]
		}
	}
	for (var i = 3; i < 4; i++){
		for (var j = 1; j < images["CDImageCount"+str(i)]+1; j++){
			images.CD[i][j] = 
			[loadImage("assets/CD"+str(i)+str(j)+".png"),
			 loadImage("assets/CD"+str(i)+str(j)+"hover.png")]
		}
	}
	for (var i = 1; i < 2; i++){
		for (var j = 1; j < images.IDImageCount+1; j++){
			images.ID[i][j] = 
						[loadImage("assets/ID"+str(i)+str(j)+".png"),
			 			 loadImage("assets/ID"+str(i)+str(j)+"hover.png")]
		}
	}
	for (var i = 3; i < 4; i++){
		for (var j = 1; j < images.IDImageCount3+1; j++){
			images.ID[i][j] = 
						[loadImage("assets/ID"+str(i)+str(j)+".png"),
			 			 loadImage("assets/ID"+str(i)+str(j)+"hover.png")]
		}

	}
	for (var i = 3; i < 4; i++){
		for (var j = 1; j < images.IXImageCount+1; j++){
			console.log(images.IX[i]);
			images.IX[i][j] =
						 [loadImage("assets/IX"+str(i)+str(j)+".png"),
			 			 loadImage("assets/IX"+str(i)+str(j)+"hover.png")]
		}
		console.log(images.IX[3]);
	}
	//draw the initial images
	drawImage(state,era);

	//Play the song

}

function mouseOver(x,y,w,h){
	if (x <= mouseX && mouseX <= x+w &&
		y <= mouseY && mouseY <= y+h){
		return true;
	}
	return false;
}

function drawImage(state,era){
	changed = false;
	if (windowWidth <= limit){
		var cWidth = windowWidth*multiplier*0.94;	
	}
	else{
		var cWidth = limit*multiplier;	
	}
	var cHeight = (895*cWidth)/1700;
	
	var p = document.getElementById("content");
	var h = document.getElementById("contentTitle");
	for(var i = 1; i < images[state+"ImageCount"+str(era)]+1;i++){
		imageName = state+str(era)+str(i);

		x = locations[imageName][0];
		y = locations[imageName][1];

		curImage = images[state][era][i][0];
		aspectRatio = curImage.height/curImage.width;
		if (windowWidth <= limit){
			var cWidth = windowWidth*multiplier*0.94;	
		}
		else{
			var cWidth = limit*multiplier*0.93;	
		}
		var cHeight = (895*cWidth)/1700;

		dY = cHeight/895;
		dX = cWidth/1700;

		var bump = 1.12;



		if(mouseOver(x*dX,y*dY,curImage.width*multiplier,curImage.width*multiplier*aspectRatio)){

			curImage = images[state][era][i][1];

			x = locations[imageName+"hover"][0];
			y = locations[imageName+"hover"][1];

			if (era == 1 && state == "CD" && i == 1){
				h.innerHTML = "Poster: Paul Rand";
				p.innerHTML = "Before the turn of the century, many communication designers admired Paul Rand, an art director and graphic designer known for his logo designs."
			}
			else if (era == 1 && state == "CD" && i == 2){
				h.innerHTML = "Book: Apple <Desi></Desi>gn"
				p.innerHTML = "Your peers were very interested in identity and branding."
			}
			else if (era == 1 && state == "CD" && i == 3){
				p.innerHTML = "The 1980s saw the rise of the home computer, and designers transitioned from working by hand to working on desktops such as the power mac 7100. Computers changed the design industry, making work faster and easier. You probably used some programs on the computer for design work, but it was not your primary tool. A lot of your peers worked more with their cameras and with paper."
			}
			else if (era == 1 && state == "CD" && i == 4){
				p.innerHTML = "The 1980s saw the rise of the home computer, and designers transitioned from working by hand to working on desktops such as the power mac 7100. Computers changed the design industry, making work faster and easier. You probably used some programs on the computer for design work, but it was not your primary tool. A lot of your peers worked more with their cameras and with paper."
			}
			else if (era == 1 && state == "CD" && i == 5){
				p.innerHTML = "Though people are using computers more for work, you still can’t live without your pens and paper. You still rely a lot on your sketchbook."
			}

			else if (era == 2 && state == "CD" && i == 1){
				h.innerHTML = "Poster: Michael Beirut"
				p.innerHTML = "In the 2000s, many communication designers admired Michael Beirut, a famous graphic designer known for his work with Pentagram."
			}
			else if (era == 2 && state == "CD" && i == 2){
				p.innerHTML = "After the Dot Com bubble burst, the iMac G3 saved Apple from financial ruin and was known for its innovative design. You probably worked on one of these in the early 2000s and will forever remember its colorful casing. Also, the first version of Adobe Creative Suite was released in 2003 and has become one of the most popular graphics software."
			}
			else if (era == 2 && state == "CD" && i == 3){
				p.innerHTML = " In this era, communication designers started working with tablets, but they still enjoyed drawing and sketching by hand."
			}
			else if (era == 2 && state == "CD" && i == 4){
				p.innerHTML = " Your peers were very interested in print and advertising."
			}

			else if (era == 3 && state == "CD" && i == 1){
				h.innerHTML = "Poster: Stefan Sagmeister"
				p.innerHTML = "Since 2010, many communication designers have admired designers such as Stefan Sagmeister, who is known for his controversial and unorthodox graphic design work."
			}
			else if (era == 3 && state == "CD" && i == 2){
				h.innerHTML = "Book: Lean UX"
				p.innerHTML = "Your peers are very interested in user experience design."
			}
			else if (era == 3 && state == "CD" && i == 3){
				h.innerHTML = "Computer: Apple iMac"
				p.innerHTML = "One of the most common desktops at this time is the current iMac, a dependable and well designed computer that has almost become industry standard. Communication designers often work with programs like Sketch and Adobe Creative Cloud."
			}
			else if (era == 3 && state == "CD" && i == 4){
				h.innerHTML = "Whiteboard & Post-its"
				p.innerHTML = "Though a lot of work is digital now, communication designers still find it valuable to work with physical things like post its and whiteboards."
			}			



			changed = true;
			image(curImage,x*dX,y*dY,curImage.width*multiplier*dX*bump,curImage.width*multiplier*aspectRatio*dY*bump);	
			// }
		}

		else{
			if(!changed){
				p.innerHTML = "";
				h.innerHTML = "";
			}
				image(curImage,x*dX,y*dY,curImage.width*multiplier*dX*bump,curImage.width*multiplier*aspectRatio*dY*bump);
			}
		}
	}

function draw(){


	if (drawOnce){
		clear();
		drawImage(state,era);
		drawOnce = false;
	}

	if(mouseMovedBool){
		clear();

		mouseMovedBool = false;
		drawImage(state,era);

	}
}

function mouseMoved(){
	mouseMovedBool = true;
}



function mousePressed(){

}
