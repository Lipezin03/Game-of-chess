"use strict";


const chessBoard = {
    num: [8, 7, 6, 5, 4, 3, 2, 1,],
    letters: [1, 2, 3, 4, 5, 6, 7, 8],

    run() {

        let board = this.addBoard();
        let table = document.createElement('table');
        document.body.insertAdjacentElement('afterbegin', table);
        table.insertAdjacentHTML("afterbegin", board);
        this.addNumOnBoard();
        this.addLettersOnBoard();
        this.addFiguresOnDesk();
        this.addPawns();
        this.moveFigure();
    },



    addBoard() {
        let board = "";
        let color = "white";
        for (let i = 0; i < this.num.length; i++) {
            let row = "";
            if (color == "white") {
                row = `<tr>${this.addTd(color, this.num[i])}</tr>`;
                color = "black"
            } else {
                row = `<tr>${this.addTd(color, this.num[i])}</tr>`;
                color = "white";
            }
            board += row;
        }

        return board;
    },

    addTd(color, num) {
        let td = "";
        let rowColor = color;
        for (let k = 0; k < this.letters.length; k++) {
            if (rowColor == "white") {
                td += `<td class="${rowColor}" data-row="${num}" data-coll="${this.letters[k]}"></td>`;
                rowColor = "black";
            } else {
                td += `<td class="${rowColor}" data-row="${num}" data-coll="${this.letters[k]}"></td>`;
                rowColor = "white";
            }
        }
        return td;
    },

    addNumOnBoard() {
        let rowNum = document.querySelectorAll('tr');
        rowNum.forEach((row, num) => {
            let col = `<td>${num + 1}</td>`
            row.insertAdjacentHTML("beforeend", col);
        })
        let num = 8;
        rowNum.forEach((row) => {
            let col = `<td>${num}</td>`;
            num--;
            row.insertAdjacentHTML("afterbegin", col);
        })
    },

    addLettersOnBoard() {
        let letters = this.letters;
        let tbody = document.querySelector('tbody');
        let tr = document.createElement('tr');
        tr.innerHTML = "<td></td>";
        letters.forEach((letters) => {
            tr.innerHTML += `<td>${String.fromCharCode(letters + 96)}</td>`;
        })
        tbody.insertAdjacentElement("beforeend", tr);


        let trReverse = document.createElement('tr');
        trReverse.innerHTML = "<td></td>";
        letters.reverse();
        letters.forEach((letters) => {
            trReverse.innerHTML += `<td>${String.fromCharCode(letters + 96)}</td>`;
        })
        tbody.insertAdjacentElement("afterbegin", trReverse);
    },

    addFiguresOnDesk() {
        for (let k = 0; k < positions.length; k++) {
            let row1 = document.querySelector(`[data-row="${positions[k].coordRow}"][data-coll="${positions[k].coordCol}"]`);
            row1.innerHTML = `<i class="fas fa-chess-${positions[k].figure} ${positions[k].color + "Figure"}"></i>`;
        }
    },

    addPawns() {
        let colorWhite = "white";
        let colorBlack = "black";
        let row2 = document.querySelectorAll(`[data-row="2"]`);
        let row7 = document.querySelectorAll(`[data-row="7"]`);
        row2.forEach(row => {
            row.innerHTML = `<i class="fas fa-chess-pawn ${colorWhite + 'Figure'}"></i>`;
        });
        row7.forEach(row => {
            row.innerHTML = `<i class="fas fa-chess-pawn ${colorBlack + 'Figure'}"></i>`;
        });

    },

    moveFigure() {

        let pawns = document.querySelectorAll('.fa-chess-pawn.whiteFigure');
        let body = document.body;


        body.addEventListener('click', function (event) {

            if (event.target.classList.contains('fa-chess-pawn') && event.target.classList.contains('whiteFigure')) {
                movePawnWhite(event);
            } else if (event.target.classList.contains('fa-chess-knight')) {
                moveKnight(event);
            } else if (event.target.classList.contains('fa-chess-bishop')) {
                moveBishop(event);
            } else if (event.target.classList.contains('fa-chess-queen')) {
                moveQueen(event);
            } else if (event.target.classList.contains('fa-chess-rook')) {
                moveRook(event);
            } else if (event.target.classList.contains('fa-chess-king')) {
                moveKing(event);
            } else if (event.target.classList.contains('fa-chess-pawn') && event.target.classList.contains('blackFigure')) {
                movePawnBlack(event);
            }

        })




    },


}
function deleteAnotherShape(event, anotherShape, figure) {
    if (event.target.classList.contains('fas')) {
        anotherShape.innerHTML = figure;
    } else {
        event.target.innerHTML = figure;
    }
}

chessBoard.run();

let buttonEl = document.createElement('button');
let buttonEl2 = document.createElement('button');
let tableEl = document.querySelector('table');
let tdEl = document.querySelectorAll('td')
tableEl.insertAdjacentElement('beforeend', buttonEl);
buttonEl.classList.add('button');
buttonEl.textContent = "Поменять поле на черные!"
tableEl.insertAdjacentElement('beforeend', buttonEl2);
buttonEl2.classList.add('button2');
buttonEl2.textContent = "Поменять поле на белые!"

buttonEl.addEventListener('click', function (event) {
    console.log(event.target)

    let tbody = document.querySelector('tbody');
    tbody.classList.add('fieldcСhange');
    tbody.classList.remove('fieldcСhange2');
    tdEl.forEach((td) => {
        td.classList.add('fieldcСhange');
        td.classList.remove('fieldcСhange2');
    })




})

buttonEl2.addEventListener('click', function (event) {
    console.log(event.target)

    let tbody = document.querySelector('tbody');

    tbody.classList.add('fieldcСhange2');
    tbody.classList.remove('fieldcСhange');
    tdEl.forEach((td) => {
        td.classList.add('fieldcСhange2');
        td.classList.remove('fieldcСhange');
    })



})


