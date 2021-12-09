"use strict";

function moveKnight(event) {
    event.target.classList.add('hoverScale');
    const colorKnight = event.target.classList;
    let parentKnight = event.target.parentNode;
    let knightColl = parentKnight.dataset.coll;
    let knightRow = parentKnight.dataset.row;
    console.log(knightColl, " ", knightRow)



    if (+knightRow + 2 <= 8 && +knightColl + 1 <= 8) {
        var knightMove1 = document.querySelector(`[data-row="${+knightRow + 2}"][data-coll="${+knightColl + 1}"]`);
        knightMove1.classList.add('hoverMove');
        moveKnight(knightMove1);
    }

    if (+knightRow + 2 <= 8 && +knightColl - 1 > 0) {
        var knightMove2 = document.querySelector(`[data-row="${+knightRow + 2}"][data-coll="${+knightColl - 1}"]`);
        knightMove2.classList.add('hoverMove');
        moveKnight(knightMove2);
    }

    if (+knightRow - 2 > 0 && +knightColl + 1 <= 8) {
        var knightMove3 = document.querySelector(`[data-row="${+knightRow - 2}"][data-coll="${+knightColl + 1}"]`);
        knightMove3.classList.add('hoverMove');
        moveKnight(knightMove3);
    }

    if (+knightRow - 2 > 0 && +knightColl - 1 > 0) {
        var knightMove4 = document.querySelector(`[data-row= "${+knightRow - 2}"][data-coll="${+knightColl - 1}"]`);
        knightMove4.classList.add('hoverMove');
        moveKnight(knightMove4);
    }

    if (+knightRow + 1 <= 8 && +knightColl - 2 > 0) {
        var knightMove5 = document.querySelector(`[data-row= "${+knightRow + 1}"][data-coll="${+knightColl - 2}"]`);
        knightMove5.classList.add('hoverMove');
        moveKnight(knightMove5);
    }

    if (+knightRow - 1 > 0 && +knightColl - 2 > 0) {
        var knightMove6 = document.querySelector(`[data-row= "${+knightRow - 1}"][data-coll="${+knightColl - 2}"]`);
        knightMove6.classList.add('hoverMove');
        moveKnight(knightMove6);
    }

    if (+knightRow + 1 <= 8 && +knightColl + 2 <= 8) {
        var knightMove7 = document.querySelector(`[data-row= "${+knightRow + 1}"][data-coll="${+knightColl + 2}"]`);
        knightMove7.classList.add('hoverMove');
        moveKnight(knightMove7);
    }

    if (+knightRow - 1 > 0 && +knightColl + 2 <= 8) {
        var knightMove8 = document.querySelector(`[data-row= "${+knightRow - 1}"][data-coll="${+knightColl + 2}"]`);
        knightMove8.classList.add('hoverMove');
        moveKnight(knightMove8);
    }



    function moveKnight(knig) {
        knig.addEventListener('dblclick', function (event) {
            let anotherShape = event.currentTarget;
            let whiteFigure = `<i class="fas fa-chess-knight whiteFigure"></i>`;
            let blackFigure = `<i class="fas fa-chess-knight blackFigure"></i>`;
            event.target.classList.remove('hoverScale');
            if (colorKnight.contains('whiteFigure')) {
                deleteAnotherShape(event, anotherShape, whiteFigure);
            } else if (colorKnight.contains('blackFigure')) {
                deleteAnotherShape(event, anotherShape, blackFigure);
            }
            parentKnight.innerHTML = "";
            let hoverMove = document.querySelectorAll('td');
            hoverMove.forEach(el => el.classList.remove('hoverMove'));
        })
    }
}