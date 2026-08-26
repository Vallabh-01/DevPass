require("dotenv").config();

const express = require("express");
const healthRoutes = require("./routes/health.routes");

const app = express();
app.use(express.json());
app.use("/api/health", healthRoutes);

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.json({
        message: "Temp. DevPass Api is running.",
    });
});

app.listen(PORT, () =>{
    console.log(`DevPass API running on http://localhost:${PORT}`);
});