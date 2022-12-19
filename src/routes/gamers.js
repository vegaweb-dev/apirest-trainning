const { Router } = require('express');
const router = Router();
const gamers = require('../gamers.json');

router.get('/', (req, res) => {
  res.json(gamers);
});

router.post('/', (req, res) => {
  console.log(req.body);
  const { id, name, age, records, medals } = req.body;
  if (name && age && records && medals) {
    const id = gamers.length + 1;
    const newGamer = { ...req.body, id };
    gamers.push(newGamer);
    res.json(gamers);
  } else {
    res.status(500).send('Something must have happened');
  }
});

module.exports = router;
