"use strict";


function moveBishop(event) {
    event.target.classList.add('hoverScale');
    const colorBishop = event.target.classList;
    let parentBishop = event.target.parentNode;
    let bishopColl = parentBishop.dataset.coll;
    let bishopRow = parentBishop.dataset.row;

    while ((+bishopRow <= 8 && +bishopRow > 0) || (+bishopColl <= 8 && +bishopColl > 0)) {
        if (+bishopRow + 1 <= 8 && +bishopColl + 1 <= 8) {
            var bishopMove1 = document.querySelector(`[data-row="${+bishopRow + 1}"][data-coll="${+bishopColl + 1}"]`);
            bishopMove1.classList.add('hoverMove');

            moveBishop(bishopMove1)
        }
        +bishopRow++;
        + bishopColl++;
    }

    bishopColl = parentBishop.dataset.coll;
    bishopRow = parentBishop.dataset.row;

    while ((+bishopRow <= 8 && +bishopRow > 0) || (+bishopColl <= 8 && +bishopColl > 0)) {
        if (+bishopRow + 1 <= 8 && +bishopColl - 1 > 0) {
            var bishopMove2 = document.querySelector(`[data-row="${+bishopRow + 1}"][data-coll="${+bishopColl - 1}"]`);
            bishopMove2.classList.add('hoverMove');

            moveBishop(bishopMove2)
        }
        +bishopRow++;
        + bishopColl--;
    }

    bishopColl = parentBishop.dataset.coll;
    bishopRow = parentBishop.dataset.row;

    while ((+bishopRow <= 8 && +bishopRow > 0) || (+bishopColl <= 8 && +bishopColl > 0)) {
        if (+bishopRow - 1 > 0 && +bishopColl + 1 <= 8) {
            var bishopMove2 = document.querySelector(`[data-row="${+bishopRow - 1}"][data-coll="${+bishopColl + 1}"]`);
            bishopMove2.classList.add('hoverMove');

            moveBishop(bishopMove2)
        }
        +bishopRow--;
        + bishopColl++;
    }

    bishopColl = parentBishop.dataset.coll;
    bishopRow = parentBishop.dataset.row;

    while ((+bishopRow <= 8 && +bishopRow > 0) || (+bishopColl <= 8 && +bishopColl > 0)) {
        if (+bishopRow - 1 > 0 && +bishopColl - 1 > 0) {
            var bishopMove2 = document.querySelector(`[data-row="${+bishopRow - 1}"][data-coll="${+bishopColl - 1}"]`);
            bishopMove2.classList.add('hoverMove');

            moveBishop(bishopMove2)
        }
        +bishopRow--;
        + bishopColl--;
    }

    function moveBishop(bishop) {
        bishop.addEventListener('dblclick', function (event) {
            let anotherShape = event.currentTarget;
            let whiteFigure = `<i class="fas fa-chess-bishop whiteFigure"></i>`;
            let blackFigure = `<i class="fas fa-chess-bishop blackFigure"></i>`;
            event.target.classList.remove('hoverScale');
            if (colorBishop.contains('whiteFigure')) {
                deleteAnotherShape(event, anotherShape, whiteFigure);
            } else if (colorBishop.contains('blackFigure')) {
                deleteAnotherShape(event, anotherShape, blackFigure);
            }
            parentBishop.innerHTML = "";
            let hoverMove = document.querySelectorAll('td');
            hoverMove.forEach(el => el.classList.remove('hoverMove'));
        })
    }
}