const path  = require('path');
const chalk = require('chalk');
const express = require('express');
const hbs = require('hbs');

const app = express();

const port = process.env.PORT || 3000;
const staticPath = path.join(__dirname, './client');
const viewsPath = path.join(__dirname, './client/templates/views');
const partialsPath = path.join(__dirname, './client/templates/partials');

app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);
app.use(express.static(staticPath));

app.get('/', (req, res) => {
  res.render("index", {});
});

app.listen(port, () => {
  console.log(chalk.inverse.yellow(`Connected on port ${port}`));
});
