module.exports = function(app) {
    require('./home-component')(app);
    require('./tasks-component')(app);
    require('./contact-component')(app);
}