const path = require('path');
const express = require('express');
const app = express();
require('dotenv').config();

// Serve static files
app.use(express.static('/dist/AlejandroFabraPortfolio'));

// Send all requests to index.html
app.get('*', (req, res) => {
  res.sendFile(path.join( __dirname,'/dist/AlejandroFabraPortfolio/index.html'));
});

app.listen(process.env.PORT, ()=>{
  console.log(`servidor corriendo en el puerto ${process.env.PORT}`)
})