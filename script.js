document.getElementById("appointmentForm").addEventListener("submit", async function(event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const date = document.getElementById("date").value;

    const response = await fetch("http://localhost:5000/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, date })
    });

    const data = await response.json();
    document.getElementById("confirmationMessage").textContent = data.message;
    document.getElementById("confirmationMessage").classList.remove("hidden");
});
