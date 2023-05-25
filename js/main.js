function startGame() {
    let currentTime = 0;

    const board = document.getElementById('board');
    for (let i = 1; i < 10; i++) {
        let cell = document.createElement(`div`)
        cell.className = 'cell';
        cell.id = 'cell';
        board.append(cell)

        for (let j = 1; j < 10; j++) {
            let innerCells = document.createElement(`div`)
            innerCells.className = j
            // innerCells.innerText = j
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
