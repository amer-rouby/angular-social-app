module.exports = function(app) {
    require('./card-post-directive')(app);
    require('./contact-form-directive')(app);
    require("./pagination-directive")(app);
    require("./english-to-arabic-directive")(app);
}