const router = require('express').Router();


router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    console.log(req.body);
    try {
        let userData = await req.auth.register(name, email, password);
        res.json({
            name: userData.name,
            _id: userData._id,
            email: userData.email,
            accessToken: userData.token,
        });
    } catch (err) {
        console.log(err.message);
        res.json({
            type: 'error',
            message: err.message,
        });
    }

});

module.exports = router;