const router = require('express').Router();


router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    console.log(req.body);
    try {
        let user = await req.auth.register(name, email, password);
        console.log(user);
        res.json({
            _id: user._id,
            email: user.email,
            accessToken: user.token,
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