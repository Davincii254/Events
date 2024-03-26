// Craeting and adding nodes
// Function to insert a new <hr> element before the first paragraph
function insertNewElement() {
    // Create a new <hr> element
    const newEl = document.createElement('hr');
    // Find the parent node where the new element will be inserted
    const parentNode = document.querySelector('#firstP');
    // Insert the new element before the first child of the parent node
    parentNode.insertBefore(newEl, parentNode.firstChild);
}

// Function to insert new text dynamically into the second paragraph
function insertNewText() {
    // Create a new text node with the desired text content
    const newText = document.createTextNode(' This is dynamically added text!');
    // Find the parent node where the new text will be inserted
    const parentNode = document.getElementById('secondP');
    // Append the new text node to the end of the parent node
    parentNode.appendChild(newText);
}




// Removing nodes
// Get the list node
const listNode = document.querySelector('#myList');

// Function to remove the first child element of the list
function removeListFirstChild() {
    // Remove the first child element of the list node
    listNode.removeChild(listNode.firstChild);
}

// Function to remove all child elements of the list
function removeAllListChildren() {
    // Loop through all child elements of the list node and remove them one by one
    while (listNode.firstChild) {
        listNode.removeChild(listNode.firstChild);
    }
}

// Function to remove the entire list
function removeList() {
    // Remove the entire list node
    listNode.remove();
}
