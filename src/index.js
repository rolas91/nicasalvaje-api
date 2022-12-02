const express = require('express');
const routes = require("./routes/routes");

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use('/whatsapp',routes);

app.listen(port, ()=> console.log(`server running in port ${port}`))