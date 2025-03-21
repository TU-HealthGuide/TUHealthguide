const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

let appointments = [];

app.post("/api/book", (req, res) => {
    const { name, email, date } = req.body;
    if (!name || !email || !date) {
        return res.status(400).json({ message: "All fields are required" });
    }
    appointments.push({ name, email, date });
    res.json({ message: "Appointment booked successfully!" });
});

app.get("/api/appointments", (req, res) => {
    res.json(appointments);
});

app.listen(5000, () => console.log("Server running on port 5000"));
