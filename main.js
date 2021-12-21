var mouseEvent= "empty";
var last_x, last_y;

canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
var color= "red";
var lineWidth= 1;
var radius= 20;
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    color= document.getElementById("color").value;
    lineWidth= document.getElementById("lineWidth").value;
    radius= document.getElementById("radius").value;
    mouseEvent= "mousedown";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    mouse_x= e.clientX -canvas.offsetLeft;
    mouse_y= e.clientY -canvas.offsetTop;
    if (mouseEvent == "mousedown"){
        ctx.beginPath();
        ctx.strokeStyle= color;
        ctx.lineWidth= lineWidth;
        ctx.radius= radius;
        console.log("last position of x and y");
        console.log("X - "+ last_x+ ", Y - " + last_y);
        ctx.arc(200, 200, 40, 0, 2*Math.PI);
        console.log("current position of x and y");
        console.log("X - "+ mouse_x+ ", Y - " + mouse_y);
        ctx.lineTo(mouse_x, mouse_y);
        ctx.stroke();
    }
    last_x= mouse_x;
    last_y= mouse_y;
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    mouseEvent= "mouseUP";

}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
    mouseEvent= "mouseLEAVE";
    
}
function clearingSpace(){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}