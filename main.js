window.addEventListener("load", () => {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 1;
    ctx.rect(150, 143, 430, 200);
    ctx.stroke();


    color = "blue";

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 3;
    ctx.arc(205, 210, 40, 0, 2*Math.PI);
    ctx.stroke();

    color = "yellow";

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 3;
    ctx.arc(260, 237, 40, 0, 2*Math.PI);
    ctx.stroke();

    color = "black";

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 3;
    ctx.arc(305, 210, 40, 0, 2*Math.PI);
    ctx.stroke();

    color = "green";

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 3;
    ctx.arc(360, 237, 40, 0, 2*Math.PI);
    ctx.stroke();

    color = "red";

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 3;
    ctx.arc(415, 210, 40, 0, 2*Math.PI);
    ctx.stroke();


});