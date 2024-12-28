// function showContent(section) {
//     const sections = document.querySelectorAll('.content-section');
//     sections.forEach(sec => sec.classList.add('hidden'));

//     const selectedSection = document.getElementById(section);
//     if (selectedSection) {
//         selectedSection.classList.remove('hidden');
//     }
// }

// const exceldata = document.getElementById("excel");
// const paidinfo = document.getElementById("paid");
// const receivedinfo = document.getElementById("received");
// const repairsinfo = document.querySelectorAll("repairs");
// const castinginfo = document.getElementById("casting");
// const chainsinfo = document.querySelectorAll("chains");
// const overallinfo = document.getElementById("overall");
const navOptions = document.getElementById(".nav-option");

navOptions.forEach(option => {
    option.addEventListener("click", () => {
        const section = option.getAttribute("data-section");

        // Generate dynamic content based on the section
        userInputs.innerHTML = getUserInputTemplate(section);

        // Close navigation after selection
        // sideNav.style.width = "0";?\
    });
});

// Function to return different input templates
function getUserInputTemplate(section) {
    switch (section) {
        case "paid":
            return `
                <h2>About Input</h2>
                <input type="text" placeholder="Tell us about yourself">
                console.log(1)
            `;
        case "received":
            return `
                <h2>Services Input</h2>
                <input type="text" placeholder="Enter the service you need">
                console.log(2)
            `;
        case "castingitems":
            return `
                <h2>Contact Input</h2>
                <input type="text" placeholder="Enter your contact details">
                console.log(3)
            `;
        case "chains":
            return `
                <h2>Services Input</h2>
                <input type="text" placeholder="Enter the service you need">
            `;
        case "overallbalance":
            return `
                <h2>Contact Input</h2>
                <input type="text" placeholder="Enter your contact details">
            `;
        default:
            return `<h2>Select a Navigation Option</h2>`;
    }
}
