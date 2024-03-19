module.exports = function(app) {
    require('./truncate-filter')(app);
    require('./englishToArabic-filter')(app);
}