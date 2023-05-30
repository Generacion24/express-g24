const express = require('express');
const router = express.Router();

// colocar las rutas aquí
router.get('/', (req, res) => {
    res.render("home");
});

router.get('/about-us', (req, res) => {
    res.send('Acerca de nuestra compañia')
})

router.get('/team', (req, res) => {
    return res.send("Este es nuestro equipo! 💥");
});

router.get('/team/:name', (req, res) => {
    const { name } = req.params
    return res.send(`${name} es parte del equipo 💥`)
})


router.get('/about-me', (req, res) => {
    return res.render('about-me')
})

router.get('/projects', (req, res) => {
    res.render('projects')
})

router.get('/project/:id', (req, res) => {
    const { id } = req.params
    res.send(`Este es mi proyecto de id = ${id}`)
})



module.exports = router;
