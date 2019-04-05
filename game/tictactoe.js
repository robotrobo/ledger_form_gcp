let w = 100; //width of each cell

let game = new Array(3); // creating a 2d array of order(3*3) to hold all the cells 
let turn = 1;

function mouseClicked() {
    // cheking which cell is pressed each time a mouse key is pressed
    updateBoard(mouseX, mouseY);
}
// checks which player is playing
function updateBoard(mouseX, mouseY) {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {

            let x = game[i][j].x;
            let y = game[i][j].y;
            off = 90;
            // console.log(mouseX, mouseY)
            if (mouseX >= x + off && mouseX <= x + off + 100 && mouseY >= y + off && mouseY <= y + off + 100) {
                // console.log(i, j);

                game[i][j].pressed = true;
                if (turn == 1) {
                    game[i][j].play1();
                } else if (turn == 2) {
                    game[i][j].play2();
                }
                console.log(game[i][j].own)
                break;

            }
        }
    }

    if (checkWin()) {
        alert(`player${turn==1?2:1} wins`)
        window.location.href = "index.html"
    }
}

function setup() {
    createCanvas(500, 500);
    background(51);
    for (let i = 0; i < 3; i++) game[i] = new Array(3);
    // initialises each cell object and gives it its x, y coordinates
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            game[i][j] = new cell(j * w, i * w, w);
        }

    }
    // checks which cell the mouse is pressed on


}

function checkWin() {
    // flag = 0;
    for (let i = 0; i < 3; i++) {
        if ((game[i][0].own != undefined) || (game[i][1].own != undefined) || (game[i][2].own != undefined)) {
            if ((game[i][0].own == game[i][1].own) && (game[i][1].own == game[i][2].own)) {
                {
                    console.log(game[i][0].own + " " + game[i][1].own + " " + game[i][2].own)
                    return true;
                }
            }
        }
    }
    for (let i = 0; i < 3; i++) {
        if ((game[0][i].own != undefined) || (game[1][i].own != undefined) || (game[2][i].own != undefined)) {
            if ((game[0][i].own == game[1][i].own) && (game[1][i].own == game[2][i].own)) {
                console.log(
                    "dadada"
                )
                console.log(game[0][i].own + " " + game[1][i].own + " " + game[2][i].own)
                return true;
            }
        }
    }
    if ((game[0][0].own != undefined) || (game[1][1].own != undefined) || (game[2][2].own != undefined)) {
        if ((game[0][0].own == game[1][1].own) && (game[1][1].own == game[2][2].own)) {
            console.log(
                "dadada"
            )
            console.log(game[0][0].own + " " + game[1][1].own + " " + game[2][2].own)
            return true;
        }
    }
    if ((game[0][2].own != undefined) || (game[1][1].own != undefined) || (game[2][0].own != undefined)) {
        if ((game[0][2].own == game[1][1].own) && (game[1][1].own == game[2][0].own)) {
            console.log(
                "dadada"
            )
            console.log(game[0][2].own + " " + game[1][1].own + " " + game[2][0].own)
            return true;
        }
    }

}

function draw() {
    // draws a rectangle at each cell
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            game[i][j].show();
        }
    }
}