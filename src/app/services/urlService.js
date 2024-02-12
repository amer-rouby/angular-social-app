module.exports = function(app) {
    app.factory('urlService', function() {

        const API_BASE_URL = 'https://jsonplaceholder.typicode.com';
        
        return {
            posts: API_BASE_URL + '/posts',
            postComments: API_BASE_URL + '/posts/{postId}/comments',
            todos: API_BASE_URL + '/todos',
        }
    });
}