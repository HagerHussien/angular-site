angular.module('myApp').controller("register",function($scope,$location,$rootScope){

	$scope.registerFn=function(valid){
	
		// $scope.user={};

	valid=valid?valid&&($scope.user.password==$scope.user.repassword):false
	if (valid) {
	//console.log(valid);
	//console.log($scope.user);
		$rootScope.loguser=$scope.user;
		$location.url('/login');
	}
	}
	$scope.loginFn=function(valid){
		// $scope.user={};
//console.log($rootScope.loguser);
	valid=valid?valid&&($rootScope.loguser.username==$scope.user.username)&&($rootScope.loguser.password==$scope.user.password):false
	if (valid) {

	//console.log(valid);
	//console.log($scope.user);
		$location.url('/profile');
	
	}

	}


}) 

angular.module('myApp').controller("products",function($scope,$http,products,$routeParams){

	$scope.products=products;
	//console.log(products.getAllProducts());
	products.getAllFromServer().then(function(data){

		console.log(data);
		$scope.products=data;

	} , function(err){
		console.log(err);

	});

	//console.log(resolvedProducts);
	
}) 



angular.module('myApp').controller("product",function($scope,products ,$http,$routeParams, $timeout){

	 $scope.product={

	 	name:'hager',
	 	images:'#',
		rate:4,
	 	description :'helloworld'
	 };


	//$scope.number = 15.23872836289364 ;
	
	setTimeout(function(){
		$scope.number=5;
		$scope.$apply();
	} , 3000);


	/*$timeout(function(){

		$scope.number=1;

	} , 3000);
	*/

	products.getFromServer($routeParams.index).then(function(data){
		console.log(data);
		$scope.product=data;

	} , function(err){
		console.log(err);

	});

// 	$http({

// 		url :'https://jsonplaceholder.typicode.com/posts/'+ $routeParams.index 
// 	}).then(function(res){
// 		$scope.post=res ;
// 		console.log(res);

// 	})
// }) 

})



angular.module('myApp').controller("starRating",function(){

	
	
}) 

angular.module("myApp").controller("search", function($scope,$location,$rootScope,products) {
// console.log($scope)
products.getAllFromServer().then(function(data){
    $scope.products = data
    // console.log(data)
},function(err){
    console.log("no data");
});


});