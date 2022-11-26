const express = require("express"),
    path = require("path"),
    app = express(),
    port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "app")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(port, () => {
    console.log(`Server started on port ${port}.`);
});
