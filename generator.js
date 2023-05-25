function generateCanvas2x2() {
    const figuresList = document.getElementById('figures');
    const figure = document.createElement(`div`)
    figure.setAttribute('draggable', 'true')
    figure.className = 'figure'
    figure.id = 'figure'
    figure.style.width = '120px';
    figure.style.height = '120px';

    for (let i = 1; i <= 4; i++) {
        console.log('SUB')
        let subFigure = document.createElement(`div`);
        subFigure.className = 'sub';
        subFigure.style.width = '60px';
        subFigure.style.height = '60px';

        getRandomInt(4);

        console.log(getRandomInt(4))

        subFigure.style.background = i === getRandomInt(4) ? 'transparent' : 'red'

        figure.appendChild(subFigure)
    }

    figuresList.append(figure)
}

function generateCanvas3x2() {
    const figuresList = document.getElementById('figures');
    const figure = document.createElement(`div`)
    figure.setAttribute('draggable', 'true')
    figure.className = 'figure'
    figure.id = 'figure'
    figure.style.width = '120px';
    figure.style.height = '180px';

    for (let i = 1; i <= 6; i++) {
        console.log('SUB')
        let subFigure = document.createElement(`div`);
        subFigure.className = 'sub';
        subFigure.style.width = '60px';
        subFigure.style.height = '60px';

        subFigure.style.background = 'red'


        getRandomInt(4);

        console.log(getRandomInt(4))

        figure.appendChild(subFigure)
    }

    const removableFirst = getRandomInt(6);
    const removableSecond = getRandomInt(6);

    if (Math.abs((removableFirst - removableSecond)) !== 1) {
        figure.children[removableFirst].style.background = 'transparent'
        figure.children[removableSecond].style.background = 'transparent'
    }

    figuresList.append(figure);
}

function generateCanvas3x3() {
    const figuresList = document.getElementById('figures');
    // figuresList.className = 'big'
    const figure = document.createElement(`div`)
    figure.setAttribute('draggable', 'true')
    figure.className = 'figure-big'
    figure.id = 'figure'
    figure.style.width = '180px';
    figure.style.height = '180px';

    for (let i = 1; i <= 9; i++) {
        console.log('SUB')
        let subFigure = document.createElement(`div`);
        subFigure.className = 'sub';
        subFigure.style.width = '60px';
        subFigure.style.height = '60px';

        subFigure.style.background = 'red'


        getRandomInt(4);

        console.log(getRandomInt(4))

        figure.appendChild(subFigure)
    }

    for (let i = 0; i < 5; i++) {
        figure.children[getRandomInt(6)].style.background = 'transparent'
    }

    // if (Math.abs((removableFirst - removableSecond)) !== 1) {
    //     figure.children[removableFirst].style.background = 'transparent'
    //     figure.children[removableSecond].style.background = 'transparent'
    // }

    figuresList.append(figure);
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const figuresList = document.getElementById('figures');

generateCanvas2x2();
generateCanvas3x2();
generateCanvas3x3();

const time = setInterval(() => {
    if (figuresList.children.length < 3) {
        generateCanvas2x2();
    }
}, 100)

const board = document.getElementById('board');
const figures = document.getElementById('figures');
const figure = document.getElementById('figure');

board.ondragover = allowDrop;

function allowDrop(event) {
    event.preventDefault();
}

figure.ondragstart = drag;

function drag(event) {
    event.dataTransfer.setData('id', event.target.id)
}

board.ondrop = drop;

function drop(event) {
    let itemId = event.dataTransfer.getData('id')
    console.log(itemId)
    event.target.append(document.getElementById(itemId))
}