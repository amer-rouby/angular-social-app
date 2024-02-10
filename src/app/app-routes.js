module.exports = function(app) {
    app.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: "src/app/components/home-component/home-view.html",
                controller: 'homeController',
                controllerAs: "ctrl"
            })
            
            .when('/about', {
                templateUrl: 'src/app/components/about-component/about-view.html',
                controller: 'aboutController',
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