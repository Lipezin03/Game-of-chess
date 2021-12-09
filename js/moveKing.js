"use strict";

function moveKing(event) {
    event.target.classList.add('hoverScale');
    const colorKing = event.target.classList;
    let parentKing = event.target.parentNode;
    let kingColl = parentKing.dataset.coll;
    let kingRow = parentKing.dataset.row;

    if (+kingRow + 1 <= 8 && +kingColl + 1 <= 8) {
        var kingMove1 = document.querySelector(`[data-row="${+kingRow + 1}"][data-coll="${+kingColl + 1}"]`);
        kingMove1.classList.add('hoverMove');

        moveKing(kingMove1)
    }

    if (+kingRow - 1 > 0 && +kingColl - 1 > 0) {
        var kingMove2 = document.querySelector(`[data-row="${+kingRow - 1}"][data-coll="${+kingColl - 1}"]`);
        kingMove2.classList.add('hoverMove');

        moveKing(kingMove2)
    }

    if (+kingRow + 1 <= 8 && +kingColl - 1 > 0) {
        var kingMove3 = document.querySelector(`[data-row="${+kingRow + 1}"][data-coll="${+kingColl - 1}"]`);
        kingMove3.classList.add('hoverMove');

        moveKing(kingMove3)
    }

    if (+kingRow - 1 > 0 && +kingColl + 1 <= 8) {
        var kingMove4 = document.querySelector(`[data-row="${+kingRow - 1}"][data-coll="${+kingColl + 1}"]`);
        kingMove4.classList.add('hoverMove');

        moveKing(kingMove4)
    }

    if (+kingRow - 1 > 0) {
        var kingMove5 = document.querySelector(`[data-row="${+kingRow - 1}"][data-coll="${kingColl}"]`);
        kingMove5.classList.add('hoverMove');

        moveKing(kingMove5)
    }

    if (+kingRow + 1 <= 8) {
        var kingMove6 = document.querySelector(`[data-row="${+kingRow + 1}"][data-coll="${kingColl}"]`);
        kingMove6.classList.add('hoverMove');

        moveKing(kingMove6)
    }

    if (+kingColl + 1 <= 8) {
        var kingMove7 = document.querySelector(`[data-row="${kingRow}"][data-coll="${+kingColl + 1}"]`);
        kingMove7.classList.add('hoverMove');

        moveKing(kingMove7)
    }

    if (+kingColl - 1 > 0) {
        var kingMove8 = document.querySelector(`[data-row="${kingRow}"][data-coll="${+kingColl - 1}"]`);
        kingMove8.classList.add('hoverMove');

        moveKing(kingMove8)
    }

    function moveKing(king) {
        king.addEventListener('dblclick', function (event) {
            let anotherShape = event.currentTarget;
            let whiteFigure = `<i class="fas fa-chess-king whiteFigure"></i>`;
            let blackFigure = `<i class="fas fa-chess-king blackFigure"></i>`;
            event.target.classList.remove('hoverScale');
            if (colorKing.contains('whiteFigure')) {
                deleteAnotherShape(event, anotherShape, whiteFigure);
            } else if (colorKing.contains('blackFigure')) {
                deleteAnotherShape(event, anotherShape, blackFigure);
            }
            parentKing.innerHTML = "";
            let hoverMove = document.querySelectorAll('td');
            hoverMove.forEach(el => el.classList.remove('hoverMove'));
        })
    }
}