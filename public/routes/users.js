const router = require('express').Router();

router.get('/users', (req,res) => {
  res.send('users');
});

router.get('/users/:id', (req,res) => {
  res.send(`Пользователь - ${req.params.id}`);
});

module.exports = router;