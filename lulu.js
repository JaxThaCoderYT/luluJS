//Made by JaxThaCoder
//Please don't try to pass this as your javascript library
//Check out my youtube channel JaxThaCoder
function loadlulu(){
    
    console.log('library loaded');
    setInterval(gameLoop,1000/30);
    document.write('<canvas id=canvas></canvas>');
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    sizeCanvas = function(w,h){
        canvas.width = w;
        canvas.height = h;
    }
    
    fillCanvas = function(color){
        ctx.fillStyle = color;
        ctx.fillRect(0,0,canvas.width,canvas.height);
    }
    
    rectangle = function(color,x,y,w,h){
        ctx.fillStyle = color;
        ctx.fillRect(x,y,w,h);
    }
    
    circle = function(color,x,y,size){
        ctx.arc(x, y, size, 0, 2 * Math.PI);
		ctx.fillStyle = color;
		ctx.fill();
    }
    
    square = function(color,x,y,size){
        ctx.fillStyle = color;
        ctx.fillRect(x,y,size,size);
    }
    
    text = function(text,color,size,x,y){
        ctx.font = ""+size+"px Comic Sans MS";
        ctx.fillStyle = color;
		ctx.fillText(text, x, y);
    }
}