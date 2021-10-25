const router = require('express').Router();


router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    try {
        let userData = await req.auth.register(name, email, password);
        res.json({
            name: userData.name,
            _id: userData._id,
            email: userData.email,
            authToken: userData.authToken,
            isAdmin: userData.isAdmin,
        });
    } catch (err) {
        console.log(err.message);
        res.json({
            type: 'error',
            message: err.message,
        });
    }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        let userData = await req.auth.login(email, password);
        res.json({
            name: userData.name,
            _id: userData._id,
            email: userData.email,
            authToken: userData.authToken,
        });
    } catch (err) {
        console.log(err.message);
        res.status(400).json({
            type: 'error',
            ok: false,
            message: err.message,
        });
    }
});


router.get('/logout', async (req, res) => {
    console.log('Logging out...');
    req.auth.logout();
    res.json({ ok: true });
});

module.exports = router;