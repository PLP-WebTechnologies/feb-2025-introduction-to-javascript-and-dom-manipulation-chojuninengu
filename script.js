// Function to change the text content of a paragraph
document.getElementById("changeTextBtn").addEventListener("click", function () {
    document.getElementById("intro").textContent = "The content has been changed dynamically using JavaScript!";
    document.getElementById("intro").style.color = "blue"; // Modify text color
});

// Function to add a new element dynamically
document.getElementById("addElementBtn").addEventListener("click", function () {
    // Create a new div element
    const newElement = document.createElement("div");
    newElement.textContent = "This is a dynamically added element!";
    newElement.style.padding = "20px";
    newElement.style.backgroundColor = "#f9f9f9";
    newElement.style.margin = "10px 0";
    newElement.style.border = "1px solid #ccc";

    // Append the new element to the container
                                                          document.getElementById("newElementContainer").appendChild(newElement);
});

// Function to remove the last dynamically added element
document.getElementById("removeElementBtn").addEventListener("click", function () {
    const container = document.getElementById("newElementContainer");

    if (container.children.length > 0) {
        container.removeChild(container.lastChild); // Removes the last child element
    }
});
