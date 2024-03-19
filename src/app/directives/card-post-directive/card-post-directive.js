module.exports = function (app) {
    app.directive('cardPostDirective', function () {
        return {
            restrict: 'E',
            templateUrl: 'src/app/directives/card-post-directive/card-post-directive.html' ,
            controller: 'cardPostDirectiveController',
            controllerAs: 'ctrl', 
            scope: {
                post: "=?",
                posts: "=?",
                showComments: "=?",
            },
            
        }
    })
};