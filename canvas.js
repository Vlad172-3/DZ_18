let cnvs1 = document.querySelector('#cnvs1');
let cnvs2 = document.querySelector('#cnvs2');
let cnvs3 = document.querySelector('#cnvs3');

if (cnvs3.getContext) {
    let smile = cnvs3.getContext("2d");
    smile.beginPath();
    smile.fill();
    smile.fillStyle = "yellow";
    smile.beginPath();
    smile.arc(150,130,110,0,2*Math.PI);
    smile.fill();

    smile.beginPath();
    smile.arc(148,155,60,0,Math.PI,false);
    smile.fill();
    smile.lineWidth =3;
    smile.strokeStyle = "black";
    smile.stroke()

    smile.beginPath();
    smile.ellipse(115, 100, 20, 30, Math.PI, 0,  2*Math.PI);
    smile.fillStyle = "black";
    smile.fill();

    smile.beginPath();
    smile.ellipse(180, 100, 20, 30, Math.PI, 0,  2*Math.PI);
    smile.fillStyle = "black";
    smile.fill();
}
if (cnvs2.getContext) {
    let ship = cnvs2.getContext("2d");
    ship.moveTo(80,200)
    ship.lineTo(530,200);
    ship.lineTo(480,250);
    ship.lineTo(130,250);
    ship.fillStyle="yellow";
    ship.fill();
    ship.closePath();
    ship.stroke();

    ship.beginPath();
    ship.moveTo(380,200)
    ship.lineTo(220,200)
    ship.lineTo(300,100);
    ship.fillStyle="red";
    ship.fill();
    ship.closePath();
    ship.stroke();

    ship.beginPath();
    ship.moveTo(300,100)
    ship.lineTo(300,60)
    ship.strokeStyle="white";
    ship.stroke();

    ship.beginPath();
    ship.moveTo(300,60)
    ship.lineTo(340,60)
    ship.lineTo(330,70)
    ship.lineTo(340,80)
    ship.lineTo(300,80)
    ship.strokeStyle="black";
    ship.fillStyle="blue";
    ship.fill();
    ship.stroke();
}
if (cnvs1.getContext) {
    let pic = cnvs1.getContext("2d")
    pic.beginPath();
    pic.moveTo(0,280);
    pic.lineTo(400,280);
    pic.lineTo(400,300);
    pic.lineTo(0,300)
    pic.closePath();
    pic.strokeStyle ="green"
    pic.fillStyle = "green"
    pic.fill();
    pic.stroke();

    pic.beginPath();
    pic.moveTo(0,250);
    pic.lineTo(400,250);
    pic.lineTo(400,280);
    pic.lineTo(0,280);
    pic.closePath();
    pic.strokeStyle ="#7FFF00"
    pic.fillStyle = "#7FFF00"
    pic.fill();
    pic.stroke();

    pic.beginPath();
    pic.moveTo(0,0);
    pic.lineTo(400,0);
    pic.lineTo(400,250);
    pic.lineTo(0,250);
    pic.closePath();
    pic.strokeStyle ="#6495ED"
    pic.fillStyle = "#6495ED"
    pic.fill();
    pic.stroke();

    pic.beginPath();
    pic.moveTo(100,235);
    pic.lineTo(200,235);
    pic.lineTo(200,280);
    pic.lineTo(100,280);
    pic.closePath();
    pic.strokeStyle ="Chocolate"
    pic.fillStyle = "Chocolate"
    pic.fill();
    pic.stroke();

    pic.beginPath();
    pic.moveTo(130,215);
    pic.lineTo(170,215);
    pic.lineTo(200,235);
    pic.lineTo(100,235);
    pic.closePath();
    pic.strokeStyle ="Crimson"
    pic.fillStyle = "Crimson"
    pic.fill();
    pic.stroke();

    pic.beginPath();
    pic.moveTo(110,250);
    pic.lineTo(130,250);
    pic.lineTo(130,270);
    pic.lineTo(110,270);
    pic.closePath();
    pic.strokeStyle ="yellow"
    pic.fillStyle = "yellow"
    pic.fill();
    pic.stroke();
    
    pic.beginPath();
    pic.moveTo(170,250);
    pic.lineTo(190,250);
    pic.lineTo(190,270);
    pic.lineTo(170,270);
    pic.closePath();
    pic.strokeStyle ="yellow"
    pic.fillStyle = "yellow"
    pic.fill();
    pic.stroke();

    pic.beginPath();
    pic.arc(55,50,20,0,2*Math.PI);
    pic.fillStyle = "yellow";
    pic.fill();

    pic.beginPath();
    pic.moveTo(70,70);
    pic.lineTo(90,100);
    pic.lineWidth="3"
    pic.strokeStyle ="yellow"
    pic.fillStyle = "yellow"
    pic.fill();
    pic.stroke();

    pic.beginPath();
    pic.moveTo(80,50);
    pic.lineTo(120,60);
    pic.lineWidth="3"
    pic.strokeStyle ="yellow"
    pic.fillStyle = "yellow"
    pic.fill();
    pic.stroke();

    pic.beginPath();
    pic.moveTo(80,50);
    pic.lineTo(120,60);
    pic.lineWidth="3"
    pic.strokeStyle ="yellow"
    pic.fillStyle = "yellow"
    pic.fill();
    pic.stroke();

    pic.beginPath();
    pic.moveTo(70,30);
    pic.lineTo(100,10);
    pic.lineWidth="3"
    pic.strokeStyle ="yellow"
    pic.fillStyle = "yellow"
    pic.fill();
    pic.stroke();

    pic.beginPath();
    pic.moveTo(30,50);
    pic.lineTo(5,60);
    pic.lineWidth="3"
    pic.strokeStyle ="yellow"
    pic.fillStyle = "yellow"
    pic.fill();
    pic.stroke();

    pic.beginPath();
    pic.moveTo(30,65);
    pic.lineTo(8,80);
    pic.lineWidth="3"
    pic.strokeStyle ="yellow"
    pic.fillStyle = "yellow"
    pic.fill();
    pic.stroke();

    pic.beginPath();
    pic.moveTo(50,75);
    pic.lineTo(45,100);
    pic.lineWidth="3"
    pic.strokeStyle ="yellow"
    pic.fillStyle = "yellow"
    pic.fill();
    pic.stroke();

    pic.beginPath();
    pic.moveTo(55,27);
    pic.lineTo(43,10);
    pic.lineWidth="3"
    pic.strokeStyle ="yellow"
    pic.fillStyle = "yellow"
    pic.fill();
    pic.stroke();

    pic.beginPath();
    pic.moveTo(33,34);
    pic.lineTo(10,14);
    pic.lineWidth="3"
    pic.strokeStyle ="yellow"
    pic.fillStyle = "yellow"
    pic.fill();
    pic.stroke();

    pic.beginPath();
    pic.moveTo(10,250)
    pic.lineTo(10,280);
    pic.strokeStyle ="Firebrick"
    pic.stroke();

    pic.beginPath();
    pic.moveTo(20,250)
    pic.lineTo(20,280);
    pic.strokeStyle ="Firebrick"
    pic.stroke();

    pic.beginPath();
    pic.moveTo(30,250)
    pic.lineTo(30,280);
    pic.strokeStyle ="Firebrick"
    pic.stroke();

    pic.beginPath();
    pic.moveTo(40,250)
    pic.lineTo(40,280);
    pic.strokeStyle ="Firebrick"
    pic.stroke();

    pic.beginPath();
    pic.moveTo(50,250)
    pic.lineTo(50,280);
    pic.strokeStyle ="Firebrick"
    pic.stroke();

    pic.beginPath();
    pic.moveTo(60,250)
    pic.lineTo(60,280);
    pic.strokeStyle ="Firebrick"
    pic.stroke();

    pic.beginPath();
    pic.moveTo(70,250)
    pic.lineTo(70,280);
    pic.strokeStyle ="Firebrick"
    pic.stroke();

    pic.beginPath();
    pic.moveTo(80,250)
    pic.lineTo(80,280);
    pic.strokeStyle ="Firebrick"
    pic.stroke();

    pic.beginPath();
    pic.moveTo(90,250)
    pic.lineTo(90,280);
    pic.strokeStyle ="Firebrick"
    pic.stroke();

    pic.beginPath();
    pic.moveTo(210,250)
    pic.lineTo(210,280);
    pic.strokeStyle ="Firebrick"
    pic.stroke();

    pic.beginPath();
    pic.moveTo(220,250)
    pic.lineTo(220,280);
    pic.strokeStyle ="Firebrick"
    pic.stroke();

    pic.beginPath();
    pic.moveTo(230,250)
    pic.lineTo(230,280);
    pic.strokeStyle ="Firebrick"
    pic.stroke();

    pic.beginPath();
    pic.moveTo(240,250)
    pic.lineTo(240,280);
    pic.strokeStyle ="Firebrick"
    pic.stroke();

    pic.beginPath();
    pic.moveTo(250,250)
    pic.lineTo(250,280);
    pic.strokeStyle ="Firebrick"
    pic.stroke();

    pic.beginPath();
    pic.moveTo(260,250)
    pic.lineTo(260,280);
    pic.strokeStyle ="Firebrick"
    pic.stroke();

    pic.beginPath();
    pic.moveTo(270,250)
    pic.lineTo(270,280);
    pic.strokeStyle ="Firebrick"
    pic.stroke();

    pic.beginPath();
    pic.moveTo(280,250)
    pic.lineTo(280,280);
    pic.strokeStyle ="Firebrick"
    pic.stroke();

    pic.beginPath();
    pic.moveTo(290,250)
    pic.lineTo(290,280);
    pic.strokeStyle ="Firebrick"
    pic.stroke();

    pic.beginPath();
    pic.moveTo(300,250)
    pic.lineTo(300,280);
    pic.strokeStyle ="Firebrick"
    pic.stroke();

    pic.beginPath();
    pic.moveTo(310,250)
    pic.lineTo(310,280);
    pic.strokeStyle ="Firebrick"
    pic.stroke();

    pic.beginPath();
    pic.moveTo(320,250)
    pic.lineTo(320,280);
    pic.strokeStyle ="Firebrick"
    pic.stroke();

    pic.beginPath();
    pic.moveTo(330,250)
    pic.lineTo(330,280);
    pic.strokeStyle ="Firebrick"
    pic.stroke();

    pic.beginPath();
    pic.moveTo(340,250)
    pic.lineTo(340,280);
    pic.strokeStyle ="Firebrick"
    pic.stroke();

    pic.beginPath();
    pic.moveTo(350,250)
    pic.lineTo(350,280);
    pic.strokeStyle ="Firebrick"
    pic.stroke();

    pic.beginPath();
    pic.moveTo(360,250)
    pic.lineTo(360,280);
    pic.strokeStyle ="Firebrick"
    pic.stroke();

    pic.beginPath();
    pic.moveTo(370,250)
    pic.lineTo(370,280);
    pic.strokeStyle ="Firebrick"
    pic.stroke();

    pic.beginPath();
    pic.moveTo(380,250)
    pic.lineTo(380,280);
    pic.strokeStyle ="Firebrick"
    pic.stroke();

    pic.beginPath();
    pic.moveTo(390,250)
    pic.lineTo(390,280);
    pic.strokeStyle ="Firebrick"
    pic.stroke();

    pic.beginPath();
    pic.arc(340,47,24,0,2*Math.PI)
    pic.fillStyle = "white";
    pic.fill();

    pic.beginPath();
    pic.arc(310,50,24,0,2*Math.PI)
    pic.fillStyle = "white";
    pic.fill();

    pic.beginPath();
    pic.arc(325,69,7,0,2*Math.PI)
    pic.fillStyle = "white";
    pic.fill();

    pic.beginPath();
    pic.ellipse(350, 40, 9, 20, Math.PI/4, 0,  2*Math.PI);
    pic.fillStyle = "white";
    pic.fill();

    pic.beginPath();
    pic.arc(250,100,24,0,2*Math.PI)
    pic.fillStyle = "white";
    pic.fill();

    pic.beginPath();
    pic.arc(270,120,24,0,2*Math.PI)
    pic.fillStyle = "white";
    pic.fill();

    pic.beginPath();
    pic.arc(226,110,24,0,2*Math.PI)
    pic.fillStyle = "white";
    pic.fill();

    pic.beginPath();
    pic.arc(160,50,24,0,2*Math.PI)
    pic.fillStyle = "white";
    pic.fill();

    pic.beginPath();
    pic.arc(190,50,24,0,2*Math.PI)
    pic.fillStyle = "white";
    pic.fill();

    pic.beginPath();
    pic.arc(200,25,10,0,2*Math.PI)
    pic.fillStyle = "white";
    pic.fill();

    pic.beginPath();
    pic.ellipse(207, 22, 8, 15  , Math.PI/2, 0,  2*Math.PI);
    pic.fillStyle = "white";
    pic.fill();
}
