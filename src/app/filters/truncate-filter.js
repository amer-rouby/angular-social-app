module.exports = function(app) {
    app.filter('truncate', function() {

        return function(input, length, showMore) { 
            if (!input) return '';
            length = showMore ? input.length : length;
            return input.substring(0, length);
        };

    });
}