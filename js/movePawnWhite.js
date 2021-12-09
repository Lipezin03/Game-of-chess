"use strict";

function movePawnWhite(event) {
    event.target.classList.add('hoverScale');
    let parentPawn = event.target.parentNode;
    let pawnColl = parentPawn.dataset.coll;
    let pawnRow = parentPawn.dataset.row;

    let pawnMove1 = document.querySelector(`[data-row="${+pawnRow + 1}"][data-coll="${pawnColl}"]`);
    let pawnMove2 = document.querySelector(`[data-row="${+pawnRow + 2}"][data-coll="${pawnColl}"]`);
    let pawnDeleteFigure1 = document.querySelector(`[data-row="${+pawnRow + 1}"][data-coll="${+pawnColl + 1}"]`);
    let pawnDeleteFigure2 = document.querySelector(`[data-row="${+pawnRow + 1}"][data-coll="${+pawnColl - 1}"]`);

    pawnMove1.classList.add('hoverMove');
    if (pawnRow == "2") {
        pawnMove2.classList.add('hoverMove');
    }


    pawnMove1.addEventListener('dblclick', function (event) {
        event.target.classList.remove('hoverScale');
        event.target.innerHTML = `<i class="fas fa-chess-pawn whiteFigure"></i>`;
        parentPawn.innerHTML = "";
        pawnMove1.classList.remove('hoverMove');
        pawnMove2.classList.remove('hoverMove');
    })


    if (pawnDeleteFigure1 !== null && pawnDeleteFigure1.innerHTML !== "") {
        pawnDeleteFigure1.classList.add('hoverMove');
        pawnDeleteFigure1.addEventListener('dblclick', function (event) {
            let anotherShape = event.currentTarget;
            let whiteFigure = `<i class="fas fa-chess-pawn whiteFigure"></i>`;
            deleteAnotherShape(event, anotherShape, whiteFigure);
            event.target.classList.remove('hoverScale');
            // event.target.innerHTML = `<i class="fas fa-chess-pawn whiteFigure"></i>`;
            parentPawn.innerHTML = "";
            let hoverMove = document.querySelectorAll('td');
            hoverMove.forEach(el => el.classList.remove('hoverMove'));
        })
    }

    if (pawnDeleteFigure2 !== null && pawnDeleteFigure2.innerHTML !== "") {
        pawnDeleteFigure2.classList.add('hoverMove');
        pawnDeleteFigure2.addEventListener('dblclick', function (event) {
            let anotherShape = event.currentTarget;
            let whiteFigure = `<i class="fas fa-chess-pawn whiteFigure"></i>`;
            deleteAnotherShape(event, anotherShape, whiteFigure);
            event.target.classList.remove('hoverScale');
            // event.target.innerHTML = `<i class="fas fa-chess-pawn whiteFigure"></i>`;
            parentPawn.innerHTML = "";
            let hoverMove = document.querySelectorAll('td');
            hoverMove.forEach(el => el.classList.remove('hoverMove'));
        })
    }

    pawnMove2.addEventListener('dblclick', function (event) {
        if (pawnRow == "2") {
            event.target.classList.remove('hoverScale');
            event.target.innerHTML = `<i class="fas fa-chess-pawn whiteFigure"></i>`;
            parentPawn.innerHTML = "";
            pawnMove1.classList.remove('hoverMove');
            pawnMove2.classList.remove('hoverMove');
        }

    })
}