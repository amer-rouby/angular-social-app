module.exports = function (app) {
    app.filter('englishToArabic', function () {
        return function (input) {
            if (!input) {
                return '';
            }

            var arabicNumbers = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];

            var result = '';
            for (var i = 0; i < input.length; i++) {
                var char = input.charAt(i);
                if (!isNaN(char)) {
                    result += arabicNumbers[parseInt(char)];
                } else {
                    result += char;
                }
            }

            return result;
        };
    });
}