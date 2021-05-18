Canvas = document.getElementById("myCanvas");
cntx = Canvas.getContext("2d");


car1_width = 120;
car1_height = 70;
car1_image = "https://i.postimg.cc/YqdnnNX1/car1.png";
car1_x = 10;
car1_y = 10;

car2_width = 120;
car2_height = 70;
car2_image = "https://www.freeiconspng.com/uploads/green-top-car-png-16.png";
car2_x = 10;
car2_y = 100;

baground_image = "https://i.postimg.cc/bv5d35nK/racing.jpg";

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBaground;
    background_imgTag.src = baground_image;


    car1_imgTag = new Image();
    car1_imgTag.onload = uploadcar1;
    car1_imgTag.src = car1_image;

    car2_imgTag = new Image();
    car2_imgTag.onload = uploadcar2;
    car2_imgTag.src = car2_image;
}


function uploadBaground() {
    cntx.drawImage(background_imgTag, 0, 0, Canvas.width, Canvas.height);
}

function uploadcar1() {
    cntx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}

function uploadcar2() {
    cntx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == 38) {
        console.log("up arrow key");
        car1_up();

    }

    if (keyPressed == 40) {
        console.log("down arrow key");
        car1_down();

    }

    if (keyPressed == 37) {
        console.log("left arrow key");
        car1_left();

    }

    if (keyPressed == 39) {
        console.log("right arrow key");
        car1_right();

    }




    if (keyPressed == 87) {
        console.log("key w");
        car2_up();

    }

    if (keyPressed == 83) {
        console.log("key s");
        car2_down();
    }

    if (keyPressed == 65) {
        console.log("key a");
        car2_left();

    }

    if (keyPressed == 68) {
        console.log("key d");
        car2_right();

    }


    function car1_up() {
        if (car1_y >= 0) {
            car1_y = car1_y - 10;
            console.log("when up arrow is pressed, x=" + car1_x + " y=" + car1_y);
            uploadBaground();
            uploadcar1();
            uploadcar2();
        }
    }
    function car1_down() {
        if (car1_y <= 500) {
            car1_y = car1_y + 10;
            console.log("when down arrow is pressed, x=" + car1_x + " y=" + car1_y);
            uploadBaground();
            uploadcar1();
            uploadcar2();
        }
    }

    function car1_left() {
        if (car1_x >= 0) {
            car1_x = car1_x - 10;
            console.log("when left arrow is pressed, x=" + car1_x + " y=" + car1_y);
            uploadBaground();
            uploadcar1();
            uploadcar2();
        }
    }

    function car1_right() {
        if (car1_x <= 700) {
            car1_x = car1_x + 10;
            console.log("when right arrow is pressed, x=" + car1_x + " y=" + car1_y);
            uploadBaground();
            uploadcar1();
            uploadcar2();
        }
    }






    function car2_up() {
        if (car2_y >= 0) {
            car2_y = car2_y - 10;
            console.log("when w is pressed, x=" + car2_x + " y=" + car2_y);
            uploadBaground();
            uploadcar1();
            uploadcar2();
        }
    }
    function car2_down() {
        if (car2_y <= 500) {
            car2_y = car2_y + 10;
            console.log("when s is pressed, x=" + car2_x + " y=" + car2_y);
            uploadBaground();
            uploadcar1();
            uploadcar2();
        }
    }

    function car2_left() {
        if (car2_x >= 0) {
            car2_x = car2_x - 10;
            console.log("when a is pressed, x=" + car2_x + " y=" + car2_y);
            uploadBaground();
            uploadcar1();
            uploadcar2();
        }
    }

    function car2_right() {
        if (car2_x <= 700) {
            car2_x = car2_x + 10;
            console.log("when d is pressed, x=" + car2_x + " y=" + car2_y);
            uploadBaground();
            uploadcar1();
            uploadcar2();
        }
    }



    if(car1_x>700){
        console.log("White Car Won!!");
        document.getElementById('game_status').innerHTML="White Car Won!!";
    }

    if(car2_x>700){
        console.log("Cyan Car Won!!");
        document.getElementById('game_status').innerHTML="Cyan Car Won!!";
    }






}