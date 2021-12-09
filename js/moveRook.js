"use strict";

function moveRook(event) {
    event.target.classList.add('hoverScale');
    const colorRook = event.target.classList;
    let parentRook = event.target.parentNode;
    let rookColl = parentRook.dataset.coll;
    let rookRow = parentRook.dataset.row;

    while (+rookRow <= 8 && +rookRow > 0) {
        if (+rookRow + 1 <= 8) {
            var rookMove1 = document.querySelector(`[data-row="${+rookRow + 1}"][data-coll="${rookColl}"]`);
            rookMove1.classList.add('hoverMove');

            moveRook(rookMove1)
        }
        +rookRow++;
    }

    rookColl = parentRook.dataset.coll;
    rookRow = parentRook.dataset.row;

    while (+rookRow <= 8 && +rookRow > 0) {
        if (+rookRow - 1 > 0) {
            var rookMove2 = document.querySelector(`[data-row="${+rookRow - 1}"][data-coll="${rookColl}"]`);
            rookMove2.classList.add('hoverMove');

            moveRook(rookMove2)
        }
        +rookRow--;
    }

    rookColl = parentRook.dataset.coll;
    rookRow = parentRook.dataset.row;

    while (+rookColl <= 8 && +rookColl > 0) {
        if (+rookColl - 1 > 0) {
            var rookMove3 = document.querySelector(`[data-row="${rookRow}"][data-coll="${+rookColl - 1}"]`);
            rookMove3.classList.add('hoverMove');

            moveRook(rookMove3)
        }
        +rookColl--;
    }

    rookColl = parentRook.dataset.coll;
    rookRow = parentRook.dataset.row;

    while (+rookColl <= 8 && +rookColl > 0) {
        if (+rookColl + 1 <= 8) {
            var rookMove4 = document.querySelector(`[data-row="${rookRow}"][data-coll="${+rookColl + 1}"]`);
            rookMove4.classList.add('hoverMove');

            moveRook(rookMove4)
        }
        +rookColl++;
    }

    function moveRook(rook) {
        rook.addEventListener('dblclick', function (event) {
            let anotherShape = event.currentTarget;
            let whiteFigure = `<i class="fas fa-chess-rook whiteFigure"></i>`;
            let blackFigure = `<i class="fas fa-chess-rook blackFigure"></i>`;
            event.target.classList.remove('hoverScale');
            if (colorRook.contains('whiteFigure')) {
                deleteAnotherShape(event, anotherShape, whiteFigure);
            } else if (colorRook.contains('blackFigure')) {
                deleteAnotherShape(event, anotherShape, blackFigure);
            }
            parentRook.innerHTML = "";
            let hoverMove = document.querySelectorAll('td');
            hoverMove.forEach(el => el.classList.remove('hoverMove'));
        })
    }

}