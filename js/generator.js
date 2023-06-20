/*
    num - number
    r - right
    l - left
    d - down
    u -up
    md - middle
    m - miss
    f - filled
    ch - chrest
    dg - diagonal
    cb - cube
    | - splitter
 */

const FiguresCollection1xN = new Map([
    [
        // type: '1x1',
        0,
        [
            [1],
        ],
    ],
    [
        // type: '1x1',
        1,
        [
            [1, 1],
        ],
    ],
    [
        // type: '1x3',
        2,
        [
            [1, 1, 1],
        ],
    ],
    [
        // type: '1x4',
        3,
        [
            [1, 1, 1, 1],
        ],
    ],
    [
        // type: '1x5',
        4,
        [
            [1, 1, 1, 1, 1],
        ],
    ],
]);

const FiguresCollectionNx1 = new Map([
    [
        // type: '2x1',
        0,
        [
            [1],
            [1],
        ],
    ],
    [
        // type: '3x1',
        1,
        [
            [1],
            [1],
            [1],
        ],
    ],
    [
        // type: '4x1',
        2,
        [
            [1],
            [1],
            [1],
            [1],
        ],
    ],
    [
        // type: '5x1',
        3,
        [
            [1],
            [1],
            [1],
            [1],
            [1],
        ],
    ],
]);

const FiguresCollection2x2 = new Map([
    [
        // type: '2x2-f',
        0,
        [
            [1, 1],
            [1, 1],
        ],
    ],
    [
        // type: '2x2-r|d|m',
        1,
        [
            [1, 1],
            [1, 0],
        ],
    ],
    [
        // type: '2x2-l|d|m',
        2,
        [
            [1, 1],
            [0, 1],
        ],
    ],
    [
        // type: '2x2-|r|u|m',
        3,
        [
            [1, 0],
            [1, 1],
        ],
    ],
    [
        // type: '2x2-l|u|m',
        4,
        [
            [0, 1],
            [1, 1],
        ],
    ],
    [
        // type: '2x2-r|dg',
        5,
        [
            [0, 1],
            [1, 0],
        ],
    ],
    [
        // type: '2x2-l|dg',
        6,
        [
            [1, 0],
            [0, 1],
        ],
    ],
]);

const FiguresCollection2x3 = new Map([
    [
        // type: '2x3-r|u|f',
        0,
        [
            [1, 1],
            [1, 0],
            [1, 0],
        ],
    ],
    [
        // type: '2x3-r|m|f',
        1,
        [
            [1, 0],
            [1, 1],
            [1, 0],
        ],
    ],
    [
        // type: '2x3-r|d|f',
        2,
        [
            [1, 0],
            [1, 0],
            [1, 1],
        ],
    ],
    [
        // type: '2x3-l|u|f',
        3,
        [
            [1, 1],
            [0, 1],
            [0, 1],
        ],
    ],
    [
        // type: '2x3-l|m|f',
        4,
        [
            [0, 1],
            [1, 1],
            [0, 1],
        ],
    ],
    [
        // type: '2x3-l|d|f',
        5,
        [
            [0, 1],
            [0, 1],
            [1, 1],
        ],
    ],
]);

const FiguresCollection3x3 = new Map([
    [
        // type: '3x3-ch',
        0,
        [
            [0, 1, 0],
            [1, 1, 1],
            [0, 1, 0],
        ],
    ],
    [
        // type: '3x3-l|dg',
        1,
        [
            [1, 0, 0],
            [0, 1, 0],
            [0, 0, 1],
        ],
    ],
    [
        // type: '3x3-r|dg',
        2,
        [
            [0, 0, 1],
            [0, 1, 0],
            [1, 0, 0],
        ],
    ],
    [
        // type: '3x3-r|u|cb|m',
        3,
        [
            [1, 0, 0],
            [1, 0, 0],
            [1, 1, 1],
        ],
    ],
    [
        // type: '3x3-l|u|cb|m',
        4,
        [
            [0, 0, 1],
            [0, 0, 1],
            [1, 1, 1],
        ],
    ],
    [
        // type: '3x3-r|d|cb|m',
        5,
        [
            [1, 1, 1],
            [1, 0, 0],
            [1, 0, 0],
        ],
    ],
    [
        // type: '3x3-l|d|cb|m',
        6,
        [
            [1, 1, 1],
            [0, 0, 1],
            [0, 0, 1],
        ],
    ],
]);

function generateCanvas1xN() {
    const figuresList = document.getElementById('figures');

    const everyTimeNewFigure = FiguresCollection1xN.get(getRandomInt(4));
    const figure = generateFigure(everyTimeNewFigure.length * 60, 60, false, everyTimeNewFigure.length)

    everyTimeNewFigure.forEach((item, index) => {
        console.log(item)
        item.forEach((matrixElement) => {
            let subFigure = generateSubFigure(matrixElement)

            figure.appendChild(subFigure)
        })
    })

    figuresList.append(figure)
}

function generateCanvasNx1() {
    const figuresList = document.getElementById('figures');
    const everyTimeNewFigure = FiguresCollectionNx1.get(getRandomInt(3));

    const figure = generateFigure(60, everyTimeNewFigure.length * 60, false, everyTimeNewFigure.length)

    everyTimeNewFigure.forEach((item, index) => {
        console.log(item)
        item.forEach((matrixElement) => {
            let subFigure = generateSubFigure(matrixElement)

            figure.appendChild(subFigure)
        })
    })

    figuresList.append(figure)
}

function generateCanvas2x2() {
    const figuresList = document.getElementById('figures');
    const figure = generateFigure(120, 120)

    const everyTimeNewFigure = FiguresCollection2x2.get(getRandomInt(6));

    everyTimeNewFigure.forEach((item, index) => {
        console.log(item)
        item.forEach((matrixElement) => {
            let subFigure = generateSubFigure(matrixElement)

            figure.appendChild(subFigure)
        })
    })

    figuresList.append(figure)
}

function generateCanvas2x3() {
    const figuresList = document.getElementById('figures');
    const figure = generateFigure(120, 180)

    const everyTimeNewFigure = FiguresCollection2x3.get(getRandomInt(5));

    everyTimeNewFigure.forEach((item, index) => {
        console.log(item)
        item.forEach((matrixElement) => {
            let subFigure = generateSubFigure(matrixElement)

            figure.appendChild(subFigure)
        })
    })

    figuresList.append(figure)
}

function generateCanvas3x3() {
    const figuresList = document.getElementById('figures');
    const figure = generateFigure(180, 180, true)

    const everyTimeNewFigure = FiguresCollection3x3.get(getRandomInt(6));

    everyTimeNewFigure.forEach((item, index) => {
        item.forEach((matrixElement) => {
            let subFigure = generateSubFigure(matrixElement)

            figure.appendChild(subFigure);
        })
    })

    figuresList.append(figure)
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getCoords(elem) {
    let box = elem.getBoundingClientRect();

    return {
        top: box.top + window.pageYOffset,
        right: box.right + window.pageXOffset,
        bottom: box.bottom + window.pageYOffset,
        left: box.left + window.pageXOffset
    };
}

function generateFigure(width, height, isBig, isSmall) {
    const figure = document.createElement(`div`)
    figure.setAttribute('draggable', 'true')
    figure.className = `figure ${isBig ? 'big' : ''}`
    figure.id = 'figure'
    figure.style.width = `${width}px`;
    figure.style.height = `${height}px`;
    figure.style.gridTemplateColumns = `repeat(${isBig ? 3 : isSmall ? isSmall : 2}, 60px)`;

    return figure;
}

function generateSubFigure(matrixElement) {
    let subFigure = document.createElement(`div`);
    subFigure.className = 'sub';
    subFigure.style.width = '60px';
    subFigure.style.height = '60px';
    subFigure.style.border = !matrixElement ? 'none' : '1px solid'

    subFigure.style.background = !matrixElement ? 'transparent' : 'red';

    return subFigure;
}

const figuresList = document.getElementById('figures');

generateCanvas1xN()
// generateCanvasNx1()
generateCanvas2x2();
// generateCanvas2x3();
generateCanvas3x3();
