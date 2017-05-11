
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
	IDImageCount2:4,
	IDImageCount3: 4,
	IXImageCount: 4,
	IXImageCount2: 4,
	IXImageCount3: 4
}
var mouseMovedBool = false;

var multiplier = .83333
var ratio = 895/1700;
var limit = 2042;
var loLimit = 1630;

var cWidth;
var cHeight;

var song;
var drawOnce = true;
var bg;

var play = true;

var playToggle;

function preload(){
	song = loadSound("assets/"+songString);
	masterVolume(1);
}

function setup (){
	var playToggle = select("#playToggle");
	playToggle.mousePressed(function(){
	  playToggle = document.getElementById('playToggle');
	  if (play){
	  	playToggle.innerHTML = "SOUND ON"
	  	masterVolume(0.0);
	  	play = !play;
	  }
	  else if (!play){
	  	playToggle.innerHTML = "SOUND OFF"
	  	masterVolume(0.075);
	  	play = !play;
	  }
	});
	song.playMode("sustain");
	song.play();
	if (windowWidth <= loLimit){
		var cWidth = windowWidth*multiplier*0.85;
	}
	else if (windowWidth <= limit){
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
	if (windowWidth <= loLimit){
			bg.style("left","40px");
	}
	else{
			bg.style("left","0px");
	}
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
	for (var i = 2; i < 3; i++){
		for (var j = 1; j < images.IDImageCount2+1; j++){
			images.ID[i][j] = 
						[loadImage("assets/ID"+str(i)+str(j)+".png"),
			 			 loadImage("assets/ID"+str(i)+str(j)+"hover.png")]
			console.log(images.ID[i][j]);
			console.log(i,j);

		}
	}
	for (var i = 3; i < 4; i++){
		for (var j = 1; j < images.IDImageCount3+1; j++){
			images.ID[i][j] = 
						[loadImage("assets/ID"+str(i)+str(j)+".png"),
			 			 loadImage("assets/ID"+str(i)+str(j)+"hover.png")]
		}

	}
	for (var i = 2; i < 3; i++){
		for (var j = 1; j < images.IXImageCount2+1; j++){
			images.IX[i][j] =
						 [loadImage("assets/IX"+str(i)+str(j)+".png"),
			 			 loadImage("assets/IX"+str(i)+str(j)+"hover.png")]
		}
	}
	for (var i = 3; i < 4; i++){
		for (var j = 1; j < images.IXImageCount+1; j++){
			images.IX[i][j] =
						 [loadImage("assets/IX"+str(i)+str(j)+".png"),
			 			 loadImage("assets/IX"+str(i)+str(j)+"hover.png")]
		}
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
	if (windowWidth <= loLimit){
		var cWidth = windowWidth*multiplier*.837;
	}
	else if (windowWidth <= limit){
		var cWidth = windowWidth*multiplier*0.94;	
	}
	else{
		var cWidth = limit*multiplier;	
	}
	var cHeight = (895*cWidth)/1700;
	
	var p = document.getElementById("content");
	var h = document.getElementById("contentTitle");
	console.log(state,era);
	for(var i = 1; i < images[state+"ImageCount"+str(era)]+1;i++){
		imageName = state+str(era)+str(i);

		x = locations[imageName][0];
		y = locations[imageName][1];

		curImage = images[state][era][i][0];
		aspectRatio = curImage.height/curImage.width;
		if (windowWidth <= loLimit){
			var cWidth = windowWidth*multiplier*.836;
		}	
		else if (windowWidth <= limit){
			var cWidth = windowWidth*multiplier*0.94;
		}
		else{
			var cWidth = limit*multiplier*0.93;	
		}
		var cHeight = (895*cWidth)/1700;

		dY = cHeight/895;
		dX = cWidth/1700;

		var bump = 1.12;
		// var bump = 1.12;

		resizeFactor = (cWidth/1000)*0.6;



		if(mouseOver(x*dX,y*dY,curImage.width*resizeFactor,curImage.width*aspectRatio*resizeFactor)){

			curImage = images[state][era][i][1];

			x = locations[imageName+"hover"][0];
			y = locations[imageName+"hover"][1];

			if (era == 1 && state == "CD" && i == 1){
				h.innerHTML = "Favorite Designer";
				p.innerHTML = "Before the turn of the century, many communication designers admired Paul Rand, an art director and graphic designer known for his logo designs."
			}
			else if (era == 1 && state == "CD" && i == 2){
				h.innerHTML = "Interest:";
				p.innerHTML = "Your peers were very interested in identity and branding."
			}
			else if (era == 1 && state == "CD" && i == 3){
				h.innerHTML = "Computer/Programs";
				p.innerHTML = "The 1980s saw the rise of the personal computers, and designers transitioned from working by hand to working on desktops such as the power mac 7100. You probably used some programs on the computer for design work, but it was not your primary tool."
			}
			else if (era == 1 && state == "CD" && i == 4){
				h.innerHTML = "Tools";
				p.innerHTML = " A lot of your peers worked more with their cameras and with paper."
			}
			else if (era == 1 && state == "CD" && i == 5){
				h.innerHTML = "Tools";
				p.innerHTML = "Though people are using computers more for work, you still can’t live without your pens and paper. You still rely a lot on your sketchInterest:."
			}

			else if (era == 2 && state == "CD" && i == 1){
				h.innerHTML = "Favorite Designer"
				p.innerHTML = "In the 2000s, many communication designers admired Michael Beirut, a famous graphic designer known for his work with Pentagram."
			}
			else if (era == 2 && state == "CD" && i == 2){
				h.innerHTML = "Computer/Programs";
				// You probably worked on one of these and will forever remember its colorful casing.
				p.innerHTML = "The iMac G3 was known for its innovative design.  Also, the first version of Adobe Creative Suite was released in 2003 as one of the most popular graphics software."
			}
			else if (era == 2 && state == "CD" && i == 3){
				h.innerHTML = "Tools";
				p.innerHTML = " In this era, communication designers started working with tablets, but they still enjoyed drawing and sketching by hand."
			}
			else if (era == 2 && state == "CD" && i == 4){
				h.innerHTML = "Interests";
				p.innerHTML = " Your peers were very interested in print and advertising."
			}

			else if (era == 3 && state == "CD" && i == 1){
				h.innerHTML = "Favorite Designer"
				p.innerHTML = "Since 2010, many communication designers have admired designers such as Stefan Sagmeister, who is known for his controversial and unorthodox graphic design work."
			}
			else if (era == 3 && state == "CD" && i == 2){
				h.innerHTML = "Interests"
				p.innerHTML = "Your peers are very interested in user experience design."
			}
			else if (era == 3 && state == "CD" && i == 3){
				h.innerHTML = "Computer/Programs"
				p.innerHTML = "One of the most common desktops at this time is the current iMac, a dependable and well designed computer that has almost become industry standard. Communication designers often work with programs like Sketch and Adobe Creative Cloud."
			}
			else if (era == 3 && state == "CD" && i == 4){
				h.innerHTML = "Tools"
				p.innerHTML = "Though a lot of work is digital now, communication designers still find it valuable to work with physical things like post its and whiteboards."
			}


			// ID ERA 1
			if (era == 1 && state == "ID" && i == 1){
				h.innerHTML = "Favorite Designer";
				p.innerHTML = "Before the turn of the century, many communication designers admired Paul Rand, an art director and graphic designer known for his logo designs."
			}
			else if (era == 1 && state == "ID" && i == 2){
				h.innerHTML = "Interests"
				p.innerHTML = "Your peers were very interested in identity and branding."
			}
			else if (era == 1 && state == "ID" && i == 3){
				h.innerHTML = "Computer/Programs"
				p.innerHTML = "The 1980s saw the rise of the home computer, and designers transitioned from working by hand to working on desktops such as the power mac 7100. You probably used some programs on the computer for design work, but it was not your primary tool."
			}
			else if (era == 1 && state == "ID" && i == 4){
				h.innerHTML = "Tools"
				p.innerHTML = " Though people are using computers more for work, you still can’t live without your pens and paper. You still rely a lot on your sketchbook."
			}	
			// ID ERA 2
			if (era == 2 && state == "ID" && i == 1){
				h.innerHTML = "Favorite Designer";
				p.innerHTML = "In the 2000s, many industrial designers admired Dieter Rams, a German industrial designer known for his work with Braun consumer products and the Functionalist school of thought."
			}
			else if (era == 2 && state == "ID" && i == 2){
				h.innerHTML = "Interests"
				p.innerHTML = " Your peers were very interested in industrial design and furniture."
			}
			else if (era == 2 && state == "ID" && i == 3){
				h.innerHTML = "Computer/Programs"
				p.innerHTML = "The 1980s saw the rise of the home computer, and designers transitioned from working by hand to working on desktops such as the power mac 7100. You probably used some programs on the computer for design work, but it was not your primary tool."
			}
			else if (era == 2 && state == "ID" && i == 4){
				h.innerHTML = "Tools"
				p.innerHTML = "In this era, industrial designers worked a lot with solidworks and sketched on whiteboards."
			}	

			// ID ERA 3
			else if (era == 3 && state == "ID" && i == 1){
				h.innerHTML = "Favorite Designer"
				p.innerHTML = "Since 2010, many industrial designers still continue to admire the Eames for their timeless and influential contributions to multiple fields of design."
			}
			else if (era == 3 && state == "ID" && i == 2){
				h.innerHTML = "Interests"
				p.innerHTML = "Your peers are very interested in wearables design."
			}
			else if (era == 3 && state == "ID" && i == 3){
				h.innerHTML = "Computer/Programs"
				p.innerHTML = "One of the most common desktops at this time is the current iMac, a dependable and well designed computer that has almost become industry standard. Communication designers often work with programs like Sketch and Adobe Creative Cloud."
			}
			else if (era == 3 && state == "ID" && i == 4){
				h.innerHTML = "Tools"
				p.innerHTML = "Though a lot of work is digital now, communication designers still find it valuable to work with physical things like post its and whiteboards."
			}

			// IX ERA 2
			else if (era == 2 && state == "IX" && i == 1){
				h.innerHTML = "Favorite Designer"
				p.innerHTML = "In the 2000s, many interaction designers admired John Maeda, who was known for his early work of combining programing and art and who is also successful in business and technology."
			}
			else if (era == 2 && state == "IX" && i == 2){
				h.innerHTML = "Computer/Programs"
				p.innerHTML = "After the Dot Com bubble burst, the iMac G3 saved Apple from financial ruin and was known for its innovative design. You probably worked on one of these in the early 2000s and will forever remember its colorful casing."
			}
			else if (era == 2 && state == "IX" && i == 3){
				h.innerHTML = "Tools"
				p.innerHTML = "In this era, interaction designers worked a lot with creative suite and also by hand with the whiteboard and post its."
			}
			else if (era == 2 && state == "IX" && i == 4){
				h.innerHTML = "Interests"
				p.innerHTML = "Your peers were very interested in user experience design and products."
			}

			// IX ERA 3
			else if (era == 3 && state == "IX" && i == 1){
				h.innerHTML = "Tools"
				p.innerHTML = "Interaction designers love their post its and whiteboards. Also, your peers are very interested in user experience design of course as well as service design."
			}
			else if (era == 3 && state == "IX" && i == 2){
				h.innerHTML = "Favorite Designer"
				p.innerHTML = "Since 2010, many interaction designers admire professionals like Don Norman, the author of Design of Everyday Things, who has expertise in human centered design and cognitive science."
			}
			else if (era == 3 && state == "IX" && i == 3){
				h.innerHTML = "Computer/Programs"
				p.innerHTML = "One of the most common desktops at this time is the current iMac, a dependable and well designed computer that has almost become industry standard. Communication designers often work with programs like Sketch and Adobe Creative Cloud."
			}
			else if (era == 3 && state == "IX" && i == 4){
				h.innerHTML = "Tools"
				p.innerHTML = "Interaction designers love their post its and whiteboards. Also, your peers are very interested in user experience design of course as well as service design."
			}	

			changed = true;
			image(curImage,x*dX,y*dY,curImage.width*multiplier*dX*bump,curImage.width*multiplier*aspectRatio*dY*bump);	
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
