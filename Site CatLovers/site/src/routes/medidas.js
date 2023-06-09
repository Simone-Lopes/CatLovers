var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas/:idPergunta", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.get("/tempo-real/:idPergunta", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
});

router.post("/cadastrarRespostas", function (req, res) {
    medidaController.cadastrarRespostas(req, res);
})



module.exports = router;