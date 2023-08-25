const GameController = require("../controllers/ReadyToPlay.controller")

module.exports = (app) =>{
  app.post("/api/game/create", GameController.createGame )
  app.get('/api/game/info/:id', GameController.getOneGameByID)
  app.get('/api/game', GameController.getAllGame)
  app.put('/api/game/edit/:id', GameController.editGame)
  app.delete("/api/game/delete/:id", GameController.deleteGame)
}