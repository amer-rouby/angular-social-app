module.exports = function(app) {
    app.factory('urlService', function() {

        const API_BASE_URL = 'https://jsonplaceholder.typicode.com';
        const API_BASE_URL_IMG = 'https://angular.github.io/angular-phonecat/step-9/app/phones/phones.json';

        return {
            posts: API_BASE_URL + '/posts',
            postComments: API_BASE_URL + '/posts/{postId}/comments',
            phones: API_BASE_URL_IMG ,
        }
    });
}