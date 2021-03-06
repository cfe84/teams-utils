const express = require("express")

const PORT = process.env.PORT || 8080

const app = express()

app.use(express.static("./static"))

app.listen(PORT, () => { console.log(`Listening to ${PORT}`) })