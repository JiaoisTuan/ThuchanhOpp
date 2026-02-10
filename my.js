function Circle(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
}

function createCircle() {
    let ctx = document.getElementById("myCanvas").getContext("2d")
    let circle = new Circle(500, 500, 80)
    let radius=Math.floor(Math.random()*300 )
    let circle2=new Circle(700,500,radius)
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI)
    ctx.fillStyle = "green"
    ctx.fill();

    ctx.beginPath()
    ctx.arc(circle2.x,circle2.y,circle2.radius,0,2*Math.PI)
    ctx.fillStyle="blue"
    ctx.fill()

}function getRandomHex(){
    return Math.floor(Math.random()*225);
}function getRabdomColor(){
    let red=getRandomHex()
    let green=getRandomHex()
    let blue=getRandomHex()
    return "rgb(" + red +"," + blue +"," + green +")"
}
function createrEven(){
    let ctx=document.getElementById("myCanvas").getContext("2d")
    let radius=Math.floor(Math.random()*200)
    let color=getRabdomColor();
    let x= Math.random()*window.innerWidth;
    let y =Math.random()*window.innerHeight
    let circle= new Circle(x,y,radius);
    ctx.beginPath()
    ctx.arc(circle.x,circle.y,circle.radius,0,2*Math.PI)
    ctx.fillStyle=color
    ctx.fill()

}
 function action(){
    for (let i=0 ; i<20;i++){
        createrEven()
        createCircle()
    }
 }
 action()