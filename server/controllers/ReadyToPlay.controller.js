const ReadyToPlay = require("../models/ReadyToPlay.models")

const createGame = (req,res) => {
  ReadyToPlay.create(req.body)
    .then((newGame) => {
      res.json({newGame});
    })
    .catch((err) => {
      res.status(400).json({ err });
    });
};

const getAllGame = (req,res) => {
  ReadyToPlay.find()
    .then((allGame) => {
      res.json(allGame);
    })
    .catch((err) => {
      res.status(400).json({ err });
    });
};

const getOneGameByID = (req,res) => {
  ReadyToPlay.findOne({_id:req.params.id})
    .then((queriedGame) => {
      res.json(queriedGame);
    })
    .catch((err) => {
      res.status(400).json({ err });
    });
};

const editGame = (req,res) => {
  ReadyToPlay.findOneAndUpdate({_id:req.params.id}, req.body,{
    new: true,
    runValidators: true,
  })
    .then((editedStore) => {
      res.json({ editedStore });
    })
    .catch((err) => {
      res.status(400).json({ err });
    });
};

const deleteGame = (req,res) => {
  ReadyToPlay.deleteOne({_id:req.params.id})
    .then((deletedGame) => {
      res.json({ deletedGame });
    })
    .catch((err) => {
      res.status(400).json({ err });
    });
};

module.exports = {
  createGame,
  getOneGameByID,
  getAllGame,
  editGame,
  deleteGame,
};