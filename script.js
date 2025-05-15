const statusParagraph = document.getElementById("status");
const enterButton = document.getElementById("enterBtn");

enterButton.addEventListener("click", () => {
    // Replace the <p> element with an <h1> element
    const newHeading = document.createElement("h1");
    newHeading.textContent = "<h1>Entered Metaverse</h1>";
    newHeading.id = "status"; // Retain the ID if needed

    statusParagraph.replaceWith(newHeading);
});