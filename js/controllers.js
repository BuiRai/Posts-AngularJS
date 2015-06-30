angular.module("FinalApp")
/*Un controlador*/
.controller("MainController", function($scope, $resource, PostResource){
	/*URL de la API: http://jsonplaceholder.typicode.com/posts/:id*/
	User = $resource("http://jsonplaceholder.typicode.com/users/:id", {id: "@id"});

	// query() -> GET/posts -> Devuelve un arreglo de posts
	//Obteniendo los posts
	$scope.posts = PostResource.query();
	//Obteniendo los usuarios
	$scope.users = User.query();
	$scope.removePost = function(post){
		PostResource.delete({id : post.id}, function(data){
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
.controller("PostController", function($scope, PostResource, $routeParams, $location){
	$scope.title = "Editar Post";
	$scope.post = PostResource.get({id : $routeParams.id});
	$scope.savePost = function(){
		PostResource.update({id : $scope.post.id}, {data: $scope.post}, function(data){
			console.log(data);
			/*Redigir a otra página*/
			$location.path("/post/"+$scope.post.id);
		});
	}
})

/*Otro controlador*/
.controller("NewPostController", function($scope, PostResource){
	$scope.post = {};
	$scope.title = "Crear Post";
	$scope.savePost = function(){
		PostResource.save({data: $scope.post}, function(data){
			console.log(data);
		});
	}
});