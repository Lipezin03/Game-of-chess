"use strict";

function moveQueen(event) {
    event.target.classList.add('hoverScale');
    const colorQueen = event.target.classList;
    let parentQueen = event.target.parentNode;
    let queenColl = parentQueen.dataset.coll;
    let queenRow = parentQueen.dataset.row;

    while ((+queenRow <= 8 && +queenRow > 0) || (+queenColl <= 8 && +queenColl > 0)) {
        if (+queenRow + 1 <= 8 && +queenColl + 1 <= 8) {
            var queenMove1 = document.querySelector(`[data-row="${+queenRow + 1}"][data-coll="${+queenColl + 1}"]`);
            queenMove1.classList.add('hoverMove');

            moveQueen(queenMove1);
        }
        +queenRow++;
        +queenColl++;
    }

    queenColl = parentQueen.dataset.coll;
    queenRow = parentQueen.dataset.row;

    while ((+queenRow <= 8 && +queenRow > 0) || (+queenColl <= 8 && +queenColl > 0)) {
        if (+queenRow + 1 <= 8 && +queenColl - 1 > 0) {
            var queenMove2 = document.querySelector(`[data-row="${+queenRow + 1}"][data-coll="${+queenColl - 1}"]`);
            queenMove2.classList.add('hoverMove');

            moveQueen(queenMove2);
        }
        +queenRow++;
        +queenColl--;
    }

    queenColl = parentQueen.dataset.coll;
    queenRow = parentQueen.dataset.row;

    while ((+queenRow <= 8 && +queenRow > 0) || (+queenColl <= 8 && +queenColl > 0)) {
        if (+queenRow - 1 > 0 && +queenColl - 1 > 0) {
            var queenMove3 = document.querySelector(`[data-row="${+queenRow - 1}"][data-coll="${+queenColl - 1}"]`);
            queenMove3.classList.add('hoverMove');

            moveQueen(queenMove3);
        }
        +queenRow--;
        +queenColl--;
    }

    queenColl = parentQueen.dataset.coll;
    queenRow = parentQueen.dataset.row;

    while ((+queenRow <= 8 && +queenRow > 0) || (+queenColl <= 8 && +queenColl > 0)) {
        if (+queenRow - 1 > 0 && +queenColl + 1 <= 8) {
            var queenMove4 = document.querySelector(`[data-row="${+queenRow - 1}"][data-coll="${+queenColl + 1}"]`);
            queenMove4.classList.add('hoverMove');

            moveQueen(queenMove4);
        }
        +queenRow--;
        +queenColl++;
    }

    queenColl = parentQueen.dataset.coll;
    queenRow = parentQueen.dataset.row;

    while (+queenRow <= 8 && +queenRow > 0) {
        if (+queenRow + 1 <= 8) {
            var queenMove5 = document.querySelector(`[data-row="${+queenRow + 1}"][data-coll="${queenColl}"]`);
            queenMove5.classList.add('hoverMove');

            moveQueen(queenMove5);
        }
        +queenRow++;

    }

    queenColl = parentQueen.dataset.coll;
    queenRow = parentQueen.dataset.row;

    while (+queenRow <= 8 && +queenRow > 0) {
        if (+queenRow - 1 > 0) {
            var queenMove6 = document.querySelector(`[data-row="${+queenRow - 1}"][data-coll="${queenColl}"]`);
            queenMove6.classList.add('hoverMove');

            moveQueen(queenMove6);
        }
        +queenRow--;

    }

    queenColl = parentQueen.dataset.coll;
    queenRow = parentQueen.dataset.row;

    while (+queenColl <= 8 && +queenColl > 0) {
        if (+queenColl - 1 > 0) {
            var queenMove7 = document.querySelector(`[data-row="${queenRow}"][data-coll="${+queenColl - 1}"]`);
            queenMove7.classList.add('hoverMove');

            moveQueen(queenMove7);
        }
        +queenColl--;

    }

    queenColl = parentQueen.dataset.coll;
    queenRow = parentQueen.dataset.row;

    while (+queenColl <= 8 && +queenColl > 0) {
        if (+queenColl + 1 <= 8) {
            var queenMove8 = document.querySelector(`[data-row="${queenRow}"][data-coll="${+queenColl + 1}"]`);
            queenMove8.classList.add('hoverMove');

            moveQueen(queenMove8);
        }
        +queenColl++;

    }


    // let tdDblClick = document.querySelectorAll('td');
    // tdDblClick.forEach(function (td) {
    //     td.addEventListener('dblclick', function (event) {
    //         let anotherShape = event.currentTarget;
    //         let whiteFigure = `<i class="fas fa-chess-queen whiteFigure"></i>`;
    //         let blackFigure = `<i class="fas fa-chess-queen blackFigure"></i>`;
    //         event.target.classList.remove('hoverScale');
    //         if (colorQueen.contains('whiteFigure')) {
    //             deleteAnotherShape(event, anotherShape, whiteFigure);
    //         } else if (colorQueen.contains('blackFigure')) {
    //             deleteAnotherShape(event, anotherShape, blackFigure);
    //         }
    //         parentQueen.innerHTML = "";
    //         let hoverMove = document.querySelectorAll('td');
    //         hoverMove.forEach(el => el.classList.remove('hoverMove'));
    //     })
    // })


    function moveQueen(queen) {
        queen.addEventListener('dblclick', function (event) {
            let anotherShape = event.currentTarget;
            let whiteFigure = `<i class="fas fa-chess-queen whiteFigure"></i>`;
            let blackFigure = `<i class="fas fa-chess-queen blackFigure"></i>`;
            event.target.classList.remove('hoverScale');
            if (colorQueen.contains('whiteFigure')) {
                deleteAnotherShape(event, anotherShape, whiteFigure);
            } else if (colorQueen.contains('blackFigure')) {
                deleteAnotherShape(event, anotherShape, blackFigure);
            }
            parentQueen.innerHTML = "";
            let hoverMove = document.querySelectorAll('td');
            hoverMove.forEach(el => el.classList.remove('hoverMove'));
        })
    }



}