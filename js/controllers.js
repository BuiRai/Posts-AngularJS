angular.module("FinalApp")
.controller("MainController", function($scope, $resource){
	/*URL de la API: http://jsonplaceholder.typicode.com/posts/:id*/
	Post = $resource("http://jsonplaceholder.typicode.com/posts/:id", {id: "@id"});
	User = $resource("http://jsonplaceholder.typicode.com/users/:id", {id: "@id"});

	// query() -> GET/posts -> Devuelve un arreglo de posts
	//Obteniendo los posts
	$scope.posts = Post.query();
	//Obteniendo los usuarios
	$scope.users = User.query();
	
});