module.exports = function (app) {
    app.directive('contactFormDirective', function () {
        return {
            restrict: 'E',
            templateUrl: 'src/app/directives/contact-form-directive/contact-form-directive.html' ,
            controller: 'contactFormController',
            controllerAs: 'ctrl', 
            scope: {
                
            },
            
        }
    })
};