module.exports = function(app) {
    app.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: "src/app/components/home-component/home-view.html",
                controller: 'homeController',
                controllerAs: "ctrl"
            })
                
            .when('/tasks', {
                templateUrl: 'src/app/components/tasks-component/tasks-view.html',
                controller: 'tasksController',
                controllerAs: "ctrl"
            })

            .when('/contact', {
                templateUrl: 'src/app/components/contact-component/contact-view.html',
                controller: 'contactController',
                controllerAs: "ctrl"
            })

            .otherwise({
                redirectTo: '/'
            });
    });
}