// Sample data for demonstration
const methods = [{
        name: "Ayurveda",
        description: "An ancient Indian system of medicine that uses a wide range of treatments and techniques, including herbal remedies, dietary adjustments, and yoga.",
        rating: 4.5,
        reviews: [
            { user: "User1", comment: "Great system of medicine with effective remedies." },
            { user: "User2", comment: "Helped me manage my health issues naturally." }
        ]
    },
    {
        name: "Traditional Chinese Medicine",
        description: "A holistic system of medicine that includes acupuncture, herbal medicine, dietary therapy, and various mind-body practices.",
        rating: 4.2,
        reviews: [
            { user: "User3", comment: "Acupuncture sessions have been very beneficial for my chronic pain." },
            { user: "User4", comment: "Herbal remedies have improved my overall health." }
        ]
    }
];

// Function to display methods
function displayMethods() {
    const mainContent = document.getElementById("main-content");
    methods.forEach(method => {
                const methodElement = document.createElement("div");
                methodElement.classList.add("method");
                methodElement.innerHTML = `
            <h2>${method.name}</h2>
            <p>${method.description}</p>
            <div class="rating">Rating: ${method.rating}</div>
            <h3>Reviews:</h3>
            <ul>
                ${method.reviews.map(review => `<li><strong>${review.user}:</strong> ${review.comment}</li>`).join("")}
            </ul>
        `;
        mainContent.appendChild(methodElement);
    });
}

// Call the function to display methods when the page loads
window.onload = displayMethods;