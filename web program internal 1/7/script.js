const setBackgroundColor = () => {
    const colors = {
        red: '#ff0000',
        green: '#008000',
        blue: '#0000ff'
    };

    const selectedColor = document.querySelector('input[name="color"]:checked').value;

    if (selectedColor) {
        document.body.style.backgroundColor = colors[selectedColor];
    } else {
        alert('Please select a color.');
    }
};