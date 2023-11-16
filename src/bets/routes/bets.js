const { Router } = require("express");
const { createBet } = require("../controllers/bets");

const router = Router();

router.get('/', createBet);

module.exports = router;