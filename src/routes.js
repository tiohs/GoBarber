const { Router } = require('express');

const router = Router();

router.get('/', (req, res, next) => {
    res.json({'ols' : 'Hello Hamilton Silva'});
});

module.exports = router;