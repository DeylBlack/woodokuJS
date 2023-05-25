let gameScore = 0;

function startGame() {
    let currentTime = 0;

    const board = document.getElementById('board');

    document.body.onmouseover = (() => {
        let settedFigures = document.querySelectorAll('.setted')

        if (settedFigures.length > 5) {
            console.log('I AM HERE')
            settedFigures.forEach((item) => {
                gameScore += settedFigures.length;
                item.remove();

                let score = document.getElementById('score')
                score.innerText = gameScore * 1000
            })
        }
    });

    for (let i = 1; i < 10; i++) {
        let cell = document.createElement(`div`)
        cell.className = 'cell';
        cell.id = 'cell';
        board.append(cell)

        for (let j = 1; j < 10; j++) {
            let innerCells = document.createElement(`div`)
            innerCells.className = j
            innerCells.innerText = innerCells.getBoundingClientRect().x + '' + innerCells.getBoundingClientRect().y;

            innerCells.onclick = ((el) => {
                console.log(el.target)
                console.log(getCoords(el.target))
            })

            cell.append(innerCells)
        }
    }

    const newTimer = setTimeout(() => {
        const timer = document.getElementById('timer');

        currentTime++;

        timer.innerText = currentTime

        const cellListener = document.getElementById('cell')

        console.log(cellListener.children)
    }, 1000)
}

startGame();
