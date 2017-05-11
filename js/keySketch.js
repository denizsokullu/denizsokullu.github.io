

//CMU Design Census p5.js file
var images = [[],[],[],[]];
var mouseMovedBool = false;

var multiplier = .83333
var ratio = 895/1700;
var limit = 2042;
var loLimit = 1630;

var cWidth;
var cHeight;

var drawOnce = true;
var bg;

function setup (){
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

	for(var i = 0; i < 4; i++){
		images[i] = 
			[loadImage("assets/KEY"+str(i)+".png"),
			 loadImage("assets/KEY"+str(i)+"hover.png")];
		console.log(images[i]);
	}

	//draw the initial images
	drawImage();

}

function mouseOver(x,y,w,h){
	if (x <= mouseX && mouseX <= x+w &&
		y <= mouseY && mouseY <= y+h){
		return true;
	}
	return false;
}

function drawImage(){
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

	for(var i = 0; i < 4;i++){
		imageName = "KEY"+str(i);
		console.log(imageName)

		x = locations[imageName][0];
		y = locations[imageName][1];

		curImage = images[i][0];
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

			curImage = images[i][1];

			x = locations[imageName+"hover"][0];
			y = locations[imageName+"hover"][1];

			if (i == 3){
				h.innerHTML = "Favorite Designer";
				p.innerHTML = "What designer most inspired you as a student?"
			}
			else if (i == 2){
				h.innerHTML = "Interest";
				p.innerHTML = "What kind of design were you interested in at the time of graduation?"
			}
			else if (i == 1){
				h.innerHTML = "Computer/Programs";
				p.innerHTML = "What type of computer/digital tool did you use at the time of graduation?"
			}
			else if (i == 0){
				h.innerHTML = "Tools";
				p.innerHTML = "What are the tools you cannot work without?"
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
		drawImage();
		drawOnce = false;
	}

	if(mouseMovedBool){
		clear();

		mouseMovedBool = false;
		drawImage();

	}
}

function mouseMoved(){
	mouseMovedBool = true;
}

function mousePressed(){

}
