let figures = document.querySelectorAll('.figure');

figures.forEach(figure => {
    move(figure);
})

function move(figure) {
    figure.onmousedown = function(event) {
        if (figure.className === 'setted') {
            return;
        }

        figure.style.position = 'absolute';
        figure.style.zIndex = 1000;
        figure.style.display = 'grid';
        figure.style.gridTemplateColumns = figure.className.includes('big') ? 'repeat(3, 60px);' : 'repeat(2, 60px);';

        document.body.append(figure);

        function moveAt(pageX, pageY) {
            figure.style.left = pageX - figure.offsetWidth / 2 + 'px';
            figure.style.top = pageY - figure.offsetHeight / 2 + 'px';
        }

        moveAt(event.pageX, event.pageY);

        function onMouseMove(event) {
            const currentPosition = {
                clientY: event.clientY,
                clientX: event.clientX
            };
            if (isInsideBoard(boardInformation.coordinates, currentPosition)) {
                // console.log(event, 'ev move')
            }
            moveAt(event.pageX, event.pageY);
        }

        document.addEventListener('mousemove', onMouseMove);

        figure.onmouseup = function(event) {
            console.log(event)

            const currentPosition = {
                clientY: event.clientY,
                clientX: event.clientX
            };

            document.removeEventListener('mousemove', onMouseMove);

            if (figuresList.children.length < 3 && isInsideBoard(boardInformation.coordinates, currentPosition)) {
                figure.onmouseup = null;
                figure.className = 'setted';
                generateCanvas2x2();

                figures = document.querySelectorAll('.figure');

                figures.forEach((figure) => {
                    move(figure)
                })
            } else {
                figure.style.top = '50px';
                figure.style.position = 'absolute';
                figure.style.left = '50px';
            }

        };

        figure.ondragstart = function() {
            return false;
        };

    };
}
