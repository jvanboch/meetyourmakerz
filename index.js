
const express = require('express')
const app = express()
const path = require("path");
const port = 3000
app.use(express.static(`${__dirname}/client/dist`));

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/client/dist/index.html`);
});

  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
  