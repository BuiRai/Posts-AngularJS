angular.module("FinalApp")
.controller("MainController", function($scope, $resource){
	/*URL de la API: http://jsonplaceholder.typicode.com/posts/:id*/
	Post = $resource("http://jsonplaceholder.typicode.com/posts/:id", {id: "@id"});

	$scope.posts = Post.query();
	// query() -> GET/posts -> Devuelve un arreglo de posts
});