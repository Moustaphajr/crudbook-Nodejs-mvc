const Book = require("../models/book");
const Afficher = (req, res) => {
  Book.find()
    .then((result) => {
      res.render("afficher", { book: result, title: "Liste des livres" });
    })
    .catch((error) => console.log(error));
};

const CreateBook = (req, res) => {
  res.render("createbook", { title: "create a book" });
};

const DeleteBook = (req, res) => {
  const id = req.params.id;

  Book.findByIdAndRemove({ _id: id }, { new: true })
    .then((result) => {
      res.redirect("/afficher");
    })
    .catch((err) => {
      console.log(err);
    });
};

const GetUpdateBook = (req, res) => {
  const id = req.params.id;
  Book.findOneAndUpdate({ _id: id }, req.body)
    .then((result) => {
      res.render("modifier", { title: "modifier un livre", book: result });
      console.log(req.url);
    })
    .catch((err) => {
      console.log(err);
    });
};

const EditBook = (req, res) => {
  const id = req.params.id;
  Book.findByIdAndUpdate({ _id: id }, req.body)
    .then((result) => {
      res.redirect("/afficher");
    })
    .catch((err) => {
      console.log(err);
    });
};

const CreateNewBook = (req, res) => {
  const book = new Book(req.body);
  book
    .save()
    .then((result) => {
      res.redirect("/afficher");
    })
    .catch((error) => {
      console.log(error);
    });
};

const Redirect = (req, res) => {
  res.redirect("/afficher");
};

module.exports = {
  Afficher,
  CreateBook,
  DeleteBook,
  GetUpdateBook,
  EditBook,
  CreateNewBook,
  Redirect,
};
