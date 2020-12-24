const { Router } = require('express');

const router = Router();

router.get('/', (req, res, next) => {
    res.json({'ols' : 'mundo'});
});

module.exports = router;