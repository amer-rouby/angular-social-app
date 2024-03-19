module.exports = function (app) {
    app.directive('englishToArabicDirective', function () {
        return {
            restrict: 'A',
            require: 'ngModel',
            scope: {
                data: "=?"
            },
            link: function (scope, ele, attrs, ngModelCtrl) {
                debugger
                ngModelCtrl.$parsers.push(function(value) {
                    debugger

                    if(!value){
                        return value;
                    }
                    
                    var input = value;

                    var arabicNumbers = {
                        '0': '٠',
                        '1': '١',
                        '2': '٢',
                        '3': '٣',
                        '4': '٤',
                        '5': '٥',
                        '6': '٦',
                        '7': '٧',
                        '8': '٨',
                        '9': '٩'
                    };

                    var result = '';

                    for (var i = 0; i < input.length; i++) {
                        var char = arabicNumbers[input.charAt(i)] ? arabicNumbers[input.charAt(i)]: input.charAt(i);
                        result += char;
                    }

                    // var arabicNumbers = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];

                    // var result = '';

                    // for (var i = 0; i < input.length; i++) {
                    //     var char = input.charAt(i);
                    //     if (!isNaN(char)) {
                    //         result += arabicNumbers[parseInt(char)];
                    //     } else {
                    //         result += char;
                    //     }
                    // }
                    debugger
                    ele[0].value = result;
                    return value;
                  });
          
                  ngModelCtrl.$formatters.push(function(value) {
                    debugger

                    if(!scope.data){
                        return scope.data;
                    }

                    var input = scope.data;

                    var arabicNumbers = {
                        '0': '٠',
                        '1': '١',
                        '2': '٢',
                        '3': '٣',
                        '4': '٤',
                        '5': '٥',
                        '6': '٦',
                        '7': '٧',
                        '8': '٨',
                        '9': '٩'
                    };

                    var result = '';

                    for (var i = 0; i < input.length; i++) {
                        var char = arabicNumbers[input.charAt(i)] ? arabicNumbers[input.charAt(i)]: input.charAt(i);
                        result += char;
                    }

                    scope.data = result;
                    return scope.data;
                  });
            }
        }
    });
}