const connection = require("./../config/db");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  connection.query("SELECT * from burgers", (err, result) => {
    const dataObj = {
      burgers: result,
    };
    res.render("index", dataObj);
  });
});
router.post("/save-new-burger", (req, res) => {
  const { burger_name } = req.body;
  connection.query(
    `INSERT INTO burgers (burger_name) VALUES ('${burger_name}')`,
    (err, result) => {
      if (err) throw error;
      res.redirect("/");
    }
  );
});

router.post("/eat-the-burger", (req, res) => {
  const { id } = req.body;
  connection.query(
    `UPDATE burgers set devoured=1 where burgers.id ='${id}'`,
    (err, result) => {
      if (err) throw error;
      res.redirect("/");
    }
  );
});

module.exports = router;
