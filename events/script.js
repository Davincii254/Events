// Change background color of h1 element on click
function changeMyBackground() {
    const h1 = document.getElementsByTagName('h1')[0];
    h1.style.background = 'orange';
}

// Change background color of h2 element on mousedown
function changeH2Background() {
    const h2 = document.getElementsByTagName('h2')[0];
    h2.style.background = 'orange';
}

// Revert background color of h2 element on mouseup
function revertBackground() {
    const h2 = document.getElementsByTagName('h2')[0];
    h2.style.background = 'white';
}

// Change background color of div element on mouse over
function changeDivBackground(newColor) {
    document.getElementsByTagName('div')[0].style.background = newColor;
}

// Function to handle form submission event
function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission behavior
    
    // Get input value from form
    const name = document.getElementById('name').value;
  
    // Display result
    const resultContainer = document.getElementById('result');
    resultContainer.textContent = `Hello, ${name}! Form submitted successfully.`;
}

// Event listener for form submission
const form = document.getElementById('myForm');
form.addEventListener('submit', handleSubmit);
