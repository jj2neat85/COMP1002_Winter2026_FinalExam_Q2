// I'm used to nodejs so this was relatively easy, 
// Its weird that you use a function call to add an event listener instead of using a callback type thing like .on('submit', () => {}) but still works

// Get the form element and the message box elements
const registrationForm = document.getElementById('registrationForm');
const messageBox = document.getElementById('messageBox');
const messageText = document.getElementById('messageText');

// Add submit event listener to the form to handle form submission
registrationForm.addEventListener('submit', (event) => {

    // Prevent default browser behavior
    event.preventDefault();

    // Get the name from the form
    const userName = document.getElementById('nameInput').value;

    // Display the personalized message
    messageText.textContent = `Thank you ${userName}! You have registered.`;

    // Show the message box by removing the 'hidden' class
    messageBox.classList.remove('hidden');

    // Return. Honestly not needed here but its good practice.
    return;
});