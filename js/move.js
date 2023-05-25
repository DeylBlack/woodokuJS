let figures = document.querySelectorAll('.figure');

figures.forEach(figure => {
    move(figure)
})

function move(figure) {
    figure.onmousedown = function(event) {
        figure.style.position = 'absolute';
        figure.style.zIndex = 1000;
        figure.style.display = 'grid';
        figure.style.gridTemplateColumns = '60px 60px';

        document.body.append(figure);

        function moveAt(pageX, pageY) {
            figure.style.left = pageX - figure.offsetWidth / 2 + 'px';
            figure.style.top = pageY - figure.offsetHeight / 2 + 'px';
        }

        moveAt(event.pageX, event.pageY);

        function onMouseMove(event) {
            console.log(event, 'ev move')
            moveAt(event.pageX, event.pageY);
        }

        document.addEventListener('mousemove', onMouseMove);

        figure.onmouseup = function() {
            document.removeEventListener('mousemove', onMouseMove);
            figure.onmouseup = null;
            figure.className = 'setted'

            if (figuresList.children.length < 3) {
                generateCanvas2x2();

                figures = document.querySelectorAll('.figure');

                figures.forEach((figure) => {
                    move(figure)
                })
                console.log(figures)
            }

        };

        figure.ondragstart = function() {
            return false;
        };

    };
}
