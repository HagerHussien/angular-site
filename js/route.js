angular.module('myApp').config(function($routeProvider){

$routeProvider.when('/',{
	templateUrl:'views/home.html',
	controller:'products'
})


.when('/register',{
	templateUrl:'views/register.html' ,
	controller:"register"

})

.when('/login',{
	templateUrl:'views/login.html' ,
	controller:"register"

})

.when('/profile',{
	templateUrl:'views/profile.html' ,
	controller:"register"

})

.when('/products',{
	templateUrl:'views/products.html',
	controller:'products',
	resolve:{

		resolvedProducts : function(products){
			return products.getAllFromServer().then(function(res){
				return res ;
			}) ;
		},

	}
})


.when('/product/:index',{
	templateUrl:'views/product.html',
	controller:'product'
})

.when('/search',{
	templateUrl:'views/search.html',
	controller:"search"
})

})