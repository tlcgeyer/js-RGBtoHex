function convert() {
    const red = document.getElementById('red').value;
    const green = document.getElementById('green').value;
    const blue = document.getElementById('blue').value;

    if (isValidInput(red) && isValidInput(green) && isValidInput(blue)) {
        const hex = rgbToHex(red, green, blue);
        document.getElementById('hex').value = hex;
    } else {
        alert('Please enter valid RGB values (0-255)');
    }
}

function isValidInput(value) {
    return /^\d+$/.test(value) && value >= 0 && value <= 255;
}

function componentToHex(c) {
    const hex = c.toString(16);
    return hex.length == 1 ? '0' + hex : hex;
}

function rgbToHex(r, g, b) {
    return '#' + componentToHex(parseInt(r)) + componentToHex(parseInt(g)) + componentToHex(parseInt(b));
}
