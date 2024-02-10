module.exports = function(app) {
    require('./home-component')(app);
    require('./about-component')(app);
    require('./contact-component')(app);
}