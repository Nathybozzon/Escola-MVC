const express = require("express");
const router = express.Router();

const alunosController = require("../Controllers/alunos-controller");

router.get("/", alunosController.listaAlunos);

router.get("/cadastroAluno", alunosController.cadastrarAlunos_get);
router.post("/cadastroAluno", alunosController.cadastrarAlunos_post);

router.get("/deletarAluno/:id", alunosController.deletarAluno);

router.get("/editarAluno/:id", alunosController.editarAluno_get);
router.post("/editarAluno", alunosController.editarAluno_post);


module.exports = router;