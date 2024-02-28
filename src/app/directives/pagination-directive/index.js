module.exports = function(app) {
    require('./pagination-directiveCtrl')(app);
    require('./pagination-directive')(app);
}