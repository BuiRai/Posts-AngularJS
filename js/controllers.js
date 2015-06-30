angular.module("FinalApp")
/*Un controlador*/
.controller("MainController", function($scope, $resource){
	/*URL de la API: http://jsonplaceholder.typicode.com/posts/:id*/
	Post = $resource("http://jsonplaceholder.typicode.com/posts/:id", {id: "@id"});
	User = $resource("http://jsonplaceholder.typicode.com/users/:id", {id: "@id"});

	// query() -> GET/posts -> Devuelve un arreglo de posts
	//Obteniendo los posts
	$scope.posts = Post.query();
	//Obteniendo los usuarios
	$scope.users = User.query();
	$scope.removePost = function(post){
		Post.delete({id : post.id}, function(data){
			console.log(data);
		});

		/*Como regla, realmente no se elimina el post, puesto que se está utilizando una herramienta de pruebas 'JsonPlaceholder'*/
		/*Un filtro para borrar el arreglo posts, cuando el id que se le pasa a la funcion sea diferente del id de un elemento del arreglo devolvera true y no hara nada, si devuelve false lo elimina del arreglo oroginal*/
		$scope.posts = $scope.posts.filter(function(element){
			return element.id !== post.id;
		});
	}
	
})

/*Otro controlador*/
.controller("PostController", function($scope, $resource, $routeParams){
	Post = $resource("http://jsonplaceholder.typicode.com/posts/:id", {id: "@id"});
	$scope.post = Post.get({id : $routeParams.id});
})

/*Otro controlador*/
.controller("NewPostController", function($scope, $resource){
	Post = $resource("http://jsonplaceholder.typicode.com/posts/:id", {id: "@id"});
	$scope.post = {};
	$scope.title = "Crear Post";
	$scope.savePost = function(){
		Post.save({data: $scope.post}, function(data){
			console.log(data);
		});
	}
});