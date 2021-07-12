
var canvas = new fabric.Canvas('myCanvas');

ball_Y=0;
ball_X=0;
hole_Y=400;
hole_X=800;


block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.Image.fromURL("golf-h.png", function(Img) {
		hole_obj= Img;
		hole_obj.scaleToWidth(50);
		hole_obj.scaleToHeight(50);
		hole_obj.set({
top:hole_Y,
left:hole_X
});
canvas.add(hole_obj);
	});
	new_image();
}

function new_image()
{
	fabric.Image.fromURL("ball.png", function(Img) {
		ball_obj= Img;
		ball_obj.scaleToWidth(50);
		ball_obj.scaleToHeight(50);
		ball_obj.set({
top:ball_Y,
left:ball_X
});
canvas.add(ball_obj);
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if((ball_X==hole_X) && (ball_Y==hole_Y)){
		canvas.remove(ball_obj);
		document.getElementById("hd3").innerHTML="You have hit the goal!! Very good!!";
		document.getElementById("myCanvas").style.borderColor="red";
	}
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		
			if(ball_Y >= 0){
				ball_Y =ball_Y - block_image_height;
				console.log("block image height = " + block_image_height);
				console.log("when up arrow key is pressed, X= " + ball_X + "Y = " + ball_Y);
				canvas.remove(ball_obj);
				new_image();
			
		}
	}

	function down()
	{
		if(ball_Y <= 450){
			ball_Y =ball_Y + block_image_height;
			console.log("block image height = " + block_image_height);
			console.log("when down arrow key is pressed, X= " + ball_X + "Y = " + ball_Y);
			canvas.remove(ball_obj);
			new_image();
		}
	}

	function left()
	{
		if(ball_X >=0)
		{
			ball_X =ball_X - block_image_width;
			console.log("block image width = " + block_image_width);
			console.log("when left arrow key is pressed, X= " + ball_X + "Y = " + ball_Y);
			canvas.remove(ball_obj);
			new_image();
		}
	}

	function right()
	{
		if(ball_X <=1000)
		{
			ball_X =ball_X + block_image_width;
			console.log("block image width = " + block_image_width);
			console.log("when right arrow key is pressed, X= " + ball_X + "Y = " + ball_Y);
			canvas.remove(ball_obj);
			new_image();
		}
	
}
}
