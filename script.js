const statusElement = document.getElementById("status");
const enterButton = document.getElementById("enterBtn");

function handleEnterClick() {
    const newHeading = document.createElement("h1");
    newHeading.textContent = "Entered Metaverse";
    newHeading.id = "status"; // Retain the ID
    newHeading.setAttribute("aria-live", "polite"); // Accessibility enhancement
    statusElement.replaceWith(newHeading);
}

enterButton.addEventListener("click", handleEnterClick);