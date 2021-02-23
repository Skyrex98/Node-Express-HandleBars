const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const routes = require(path.join(__dirname, "./routes/api.js"));

app.use(routes);

app.listen(PORT, () => {
  console.log(`Server Started On PORT ${PORT}`);
});
