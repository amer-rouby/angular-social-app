module.exports = function(app) {
    require('./components')(app);
    require('./app-routes')(app);
    require('./directives')(app);
    require('./services')(app);
    require('./filters')(app);
    require('./models')(app);
}