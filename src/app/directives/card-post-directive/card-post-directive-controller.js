module.exports = function (app) {
  app.controller("cardPostDirectiveController", function (postService) {
    let vm = this;

    vm.loadComments = function (post) {
      post.showComments = !post.showComments;
      if (post.showComments) {
        getPostComments(post);
      }
    };

    vm.showMore = function (post) {
      post.showMore = !post.showMore;
    };
    
    vm.showMoreComment = function (post) {
      post.showMoreComment = !post.showMoreComment;
    };

    function getPostComments(post) {
      postService.getPostComments(post.id).then(function (result) {
        post.comments = result.data;
      });
    }

    vm.handledLiked = function (post) {
      post.isLike = !post.isLike;
      post.likes = post.isLike ? ++post.likes : --post.likes;
    };
  });
};
