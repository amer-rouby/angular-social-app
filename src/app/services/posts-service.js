module.exports = function(app) {
    app.service('postService', function($http, urlService) {
        let vm = this;

        vm.getPosts = getPosts;

        vm.getPostComments = getPostComments;

        function getPosts() {
            return $http.get(urlService.posts).then(function(result){
                return result;
            })
        }

        function getPostComments(postId) {
            debugger
            return $http.get(urlService.postComments.replace('{postId}', postId)).then(function(result){
                return result;
            })
        }
    });
}