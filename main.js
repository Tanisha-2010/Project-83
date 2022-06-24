var last_pos_of_x, last_pos_of_y;
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "black";
line_width = 5;
mouse_event = "";

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
    mouse_event = "mouse_down";
}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e) {
    mouse_event = "mouse_up";
}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e) {
    mouse_event = "mouse_leave";
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e) {
    cur_x_pos = e.clientX - canvas.offsetLeft;
    cur_y_pos = e.clientY - canvas.offsetTop;

    if (mouse_event == "mouse_down") {
        ctx.beginPath();
        ctx.lineWidth = line_width;
        ctx.strokeStyle = color;
        console.log("last_pos_of_x=" + last_pos_of_x + "last_pos_of_y=" + last_pos_of_y);
        ctx.moveTo(last_pos_of_x, last_pos_of_y);
        console.log("cur_x_pos=" + cur_x_pos + "cur_y_pos=" + cur_y_pos);
        ctx.lineTo(cur_x_pos, cur_y_pos);
        ctx.stroke();
    }
    last_pos_of_x = cur_x_pos;
    last_pos_of_y = cur_y_pos;
}

width = screen.width;
new_width = screen.width - 70;
new_height = screen.height - 300;

if (width < 992) {
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").width = new_height;
    document.body.style.overflow = "hidden";
}

canvas.addEventListener("touchstart", my_touchstart);

function my_touchstart(e) {
    console.log(e);

    color = document.getElementById("color").value;
    width_of_lie = document.getElementById("width_of_line").value;

    last_pos_of_x = e.touches[0].clientX - canvas.offsetLeft;
    last_pos_of_y = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove", my_touchmove);

function my_touchmove(e) {
    cur_x_pos = e.touches[0].clientX - canvas.offsetLeft;
    cur_y_pos = e.touches[0].clientY - canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = line_width;
    console.log("Last position of x and y coordinates=");
    console.log("x=" + last_pos_of_x + "y=" + last_pos_of_y);
    ctx.moveTo(last_pos_of_x, last_pos_of_y);

    console.log("current position ofx and y coordinates=");
    console.log("x=" + cur_x_pos + "y=" + cur_y_pos);
    ctx.lineTo(cur_x_pos, cur_y_pos);
    ctx.stroke();

    last_pos_of_x = cur_x_pos;
    last_pos_of_y = cur_y_pos;
}

function clearCanvas() {
    ctx.clearRect(0, 0, 800, 600);
}