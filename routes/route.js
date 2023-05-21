const express = require("express");
const router = express.Router();
const {
  Afficher,
  CreateBook,
  DeleteBook,
  GetUpdateBook,
  EditBook,
  Redirect,
} = require("../controller/controlleur");

router.get("/afficher", Afficher);

router.get("/create", CreateBook);

router.get("/delete/:id", DeleteBook);

router.get("/edit/:id", GetUpdateBook);

router.post("/edit/:id", EditBook);

router.post("/afficher", EditBook);

router.get("/", Redirect);

module.exports = router;
