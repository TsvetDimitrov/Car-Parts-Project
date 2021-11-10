const router = require('express').Router();


router.post('/', async(req, res) => {
    console.log(req.body);
    try {
        await req.storage.createCar(req.body);

        res.status(200).json({ ok: true });
    } catch (err) {
        console.log(err.message);
    }
});

module.exports = router;