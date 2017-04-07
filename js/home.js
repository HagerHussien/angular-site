angular.module('myApp').controller("home",function(products){

	//$scope.products=
	console.log(products.getAllProducts());
	
	console.log(products.getAllFromServer());

}) 