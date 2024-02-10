module.exports = function(app) {
    app.controller('aboutController', function(postService) {
        
        let vm = this;
        vm.posts = [];

        function getAllPosts() {
            postService.getPosts().then(function(result){
                vm.posts = result.data;
            })
        }

        getAllPosts();
    });
}