class cell {

    constructor(x, y, w) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.offset = 90;
        this.pressed = false;
        this.col = 81;

    }
    // functions to check which player is playing
    play1() {
        this.col = color(255, 0, 0);
        this.own = 1;
        turn = 2;

    }
    play2() {
        this.col = color(0, 255, 255);
        this.own = 2;
        turn = 1;
    }
    show() {
        fill(this.col);
        strokeWeight(5);
        rect(this.x + this.offset, this.y + this.offset, this.w, this.w);
    }

}