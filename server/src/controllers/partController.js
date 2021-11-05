const router = require('express').Router();

router.post('/create', async(req, res) => {
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

router.post('/add/:id', async(req, res) => {
    try {
        await req.auth.getToken();
        const user = await userService.getUserByEmail(req.user.email);
        if (!user.email) {
            res.status(401).json({ message: 'You need to be logged in, in order to buy items!' });
            throw new Error('You need to be logged in, in order to buy items!');
        }

        await req.storage.addPartToCart(req.params.id, user.email);

    } catch (err) {
        console.log(err.message);
        res.status(400).json({ ok: false });
    }
});



module.exports = router;