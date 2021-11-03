const difficult = document.getElementById('difficult');

const buttPlay = document.getElementById('playGame');

const containerBox = document.querySelector('.container-box');

let size = 0;
let numberCell = 0 ;

buttPlay.addEventListener('click', function (){

    containerBox.innerHTML = '';

    let difficultGrid = difficult.value;
    console.log(difficultGrid);

    switch (difficultGrid) {

        case '1':
            size = 100;
            numberCell = 10;
            break;

        case '2':
            size = 81;
            numberCell = 9;
            break;

        case '3':
            size = 49;
            numberCell = 7;
    }

    for (let i = 1; i <= size; i++) {

        const square = genSquare(numberCell);

        square.innerHTML = (i);

        containerBox.append(square);

        square.addEventListener('click', () => square.classList.toggle('click'));
    }

});


function genSquare(numCell) {

    const node = document.createElement('div');
    node.classList.add('square');
    node.style.width =`calc(100% / ${numCell})`
    node.style.height =`calc(100% / ${numCell})`

    return node;
}


