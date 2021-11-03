const router = require('express').Router();

router.post('/create', async (req, res) => {
    const { category, type, brand, model, yearFrom, yearTo, engineType, partColor, imageUrl, condition, title } = req.body;
    console.log(req.body);
    try {
        await req.storage.createPart(req.body);

        res.status(200).json({ ok: true });
    } catch (err) {
        console.log(err.message);
        res.status(400).json({message: err.message});

    }
});




module.exports = router;
