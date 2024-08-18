

const homeHandle = (req, res) => {
    res.render('home.ejs');
}

const handleGetHomePage = (req, res) => {
    res.render('aboutme.ejs')
}

module.exports = {
    homeHandle,handleGetHomePage
}