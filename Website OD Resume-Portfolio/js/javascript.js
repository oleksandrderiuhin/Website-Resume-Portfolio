function showText(option) {
    // Remove the active class from both buttons
    document.getElementById("oneWay").classList.remove("active");
    document.getElementById("return").classList.remove("active");

    // Hide both text contents
    document.getElementById("oneWayText").classList.add("hidden");
    document.getElementById("returnText").classList.add("hidden");

    // Show the selected text content and make the button active
    if (option === 'oneWay') {
        document.getElementById("oneWay").classList.add("active");
        document.getElementById("oneWayText").classList.remove("hidden");
    } else if (option === 'return') {
        document.getElementById("return").classList.add("active");
        document.getElementById("returnText").classList.remove("hidden");
    }
}

var aboutmeText = document.getElementById("aboutmeText");
if(aboutmeText) {
aboutmeText.addEventListener("click", function () {
var anchor = document.querySelector("[data-scroll-to='aboutme-container']");
if(anchor) {
anchor.scrollIntoView({"block":"start","behavior":"smooth"})
}
});
}

var educationText = document.getElementById("educationText");
if(educationText) {
educationText.addEventListener("click", function () {
var anchor = document.querySelector("[data-scroll-to='educations-container']");
if(anchor) {
anchor.scrollIntoView({"block":"start","behavior":"smooth"})
}
});
}

var skillText = document.getElementById("skillsText");
if(skillText) {
skillText.addEventListener("click", function () {
var anchor = document.querySelector("[data-scroll-to='skills-container']");
if(anchor) {
anchor.scrollIntoView({"block":"start","behavior":"smooth"})
}
});
}

var contactmeText = document.getElementById("contactmeText");
if(contactmeText) {
contactmeText.addEventListener("click", function () {
var anchor = document.querySelector("[data-scroll-to='contactme-container']");
if(anchor) {
anchor.scrollIntoView({"block":"start","behavior":"smooth"})
}
});
}
