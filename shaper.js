var cubeChecker = function (volume, side) {
    if (Math.cbrt(volume) == side && volume > 0) {
        return true;
    } else {
        return false
    }
};
console.log(cubeChecker(56.3, 1))
console.log(cubeChecker(8, 2))
console.log(cubeChecker(125, 5))