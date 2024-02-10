module.exports = function(app) {
    require('./posts-service')(app);
    require('./urlService')(app);
}