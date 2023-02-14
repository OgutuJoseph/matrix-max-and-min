const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT || 5001;

/** Routes */
const routes = require('./routes');
app.use(routes)

app.listen(port, () => {
    console.log(`Server has started on port: ${port}`)
});