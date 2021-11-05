const router = require('express').Router();

router.post('/create', async(req, res) => {
    console.log(req.body);
    try {
        await req.storage.createPart(req.body);

        res.status(200).json({ ok: true });
    } catch (err) {
        console.log(err.message);
        res.status(400).json({ message: err.message });
    }
});

router.get('/navigationSystems', async(req, res) => {
    try {
        let products = await req.storage.getNavigationSystems();

        res.status(200).json(products);
    } catch (err) {
        console.log(err.message);
        res.status(400).json({ ok: false, message: err.message });
    }
});

router.get('/:id', async(req, res) => {
    try {
        const product = await req.storage.getPartById(req.params.id);
        res.status(200).json(product);
    } catch (err) {
        console.log(err.message);
        res.status(400).send({ ok: false });
    }

});

router.get('/', async(req, res) => {
    try {
        const products = await req.storage.getAllParts();

        res.status(200).json(products);
    } catch (err) {
        console.log(err.message);
        res.status(400).send({ ok: false });
    }
});



module.exports = router;