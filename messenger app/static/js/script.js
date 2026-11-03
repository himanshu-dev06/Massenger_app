
const input = document.querySelector(".message_input input");
const button = document.querySelector(".message_input button");
const chat = document.querySelector(".Messages");

// Check that all HTML elements are found
if (!input || !button || !chat) {
    console.error("Messenger elements not found!");
} else {

    // Function to send a message
    function sendMessage() {

        const text = input.value.trim();

        // Don't send empty messages
        if (text === "") {
            return;
        }

        // Create a new message
        const message = document.createElement("div");

        message.className = "Message Send";
        message.textContent = text;

        // Add message to chat
        chat.appendChild(message);

        // Clear input box
        input.value = "";
    }

    // Send when button is clicked
    button.addEventListener("click", sendMessage);

    // Send when Enter is pressed
    input.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            sendMessage();
        }
    });
}
