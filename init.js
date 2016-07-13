var canvas = document.getElementById('in-vitro').getContext('2d');
var cells = [];

canvas.strokeStyle = '#e1e1e1';
canvas.fillStyle = '#c3c800';

init();
draw();


function init() {
    for (var i = 0; i < 180; i++) {
        cells[i] = [];
        for (var j = 0; j < 64; j++) {
            cells[i][j] = 0;
        }
    }

}


function draw() {
    canvas.clearRect(0, 0, 1512, 512);
    cells.forEach(function(row, x) {
        row.forEach(function(cell, y) {
            canvas.beginPath();
            canvas.rect(x * 8, y * 8, 6, 6);
            if (cell) {
                canvas.fill();
            } else {
                canvas.stroke();
            }
        });
    });
}
