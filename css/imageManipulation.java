public static void flipHorizontal(){
	int [][][] temp = new int [height] [width] [3];
	for (int row = 0; row < height; row++){
		for (int col = 0; col < width; col++){
			temp [row][col] = pixelData [row][width-col-1];
		}
	for (int row = 0; row < height; row++){
		for (int col = 0; col < width; col++){
			pixelData [row][col] = temp [row][col];
		}
	}
	return;
}

public static void flipVertical(){
	int [][][] temp = new int [height] [width] [3];
	for (int row = 0; row < height; row++){
		for (int col = 0; col < width; col++){
			temp [row][col] = pixelData [height-row-1][col];
		}
	for (int row = 0; row < height; row++){
		for (int col = 0; col < width; col++){
			pixelData [row][col] = temp [row][col];
		}
	}
	return;
}

public static void invert(){
	int [][][] temp = new int [height] [width] [3];
	for (int row = 0; row < height; row++){
		for (int col = 0; col < width; col++){
			temp [row][col][0] = 255 - pixelData [row][col][0];
			temp [row][col][1] = 255 - pixelData [row][col][1];
			temp [row][col][2] = 255 - pixelData [row][col][2];
		}
	for (int row = 0; row < height; row++){
		for (int col = 0; col < width; col++){
			pixelData [row][col] = temp [row][col];
		}
	}
	return;
}

public static boolean inRange(int [] oldColor, int range, int[] curPixel){
	boolean isInRange = true;
	for (int pixel = 0; pixel < 3; pixel++;){
		if (!(oldColor[pixel]-range <= curPixel[pixel] &&
		    curPixel[pixel] <= oldColor[pixel]+range)){
				isInRange = false;
		}
    }
    return isInRange;
}

public static void replaceColor(int[] oldColor, int[] newColor, int range){
	for (int row = 0; row < height; row++){
		for (int col = 0; col < width; col++){
			int [] curPixel = pixelData[row][col];
			if (inRange(oldColor,range,curPixel)){
				curPixel[0] = newColor[0];
				curPixel[1] = newColor[1];
				curPixel[2] = newColor[2];
			}

		}
	return;
}



