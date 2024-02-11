function updateColors() {
    const foregroundColor = document.getElementById('foreground').value;
    const backgroundColor = document.getElementById('background').value;
  
    document.body.style.backgroundColor = backgroundColor;
    document.body.style.color = foregroundColor;
  
    // Optionally, update other text elements if desired
    const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, a');
    textElements.forEach(element => element.style.color = foregroundColor);
  }