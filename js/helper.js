function isInsideBoard(coordinates, currentPosition) {
    return coordinates.y_1 <= currentPosition.clientY &&
        coordinates.y_2 >= currentPosition.clientY &&
        coordinates.x_1 <= currentPosition.clientX &&
        coordinates.x_2 >= currentPosition.clientX;
}
