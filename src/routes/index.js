const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
  res.json('por aca te devuelvo una cadena');
});

module.exports = router;
