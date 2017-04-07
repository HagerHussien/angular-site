angular.module('myApp',["ngRoute"]) ;

angular.module("myApp").run(function($rootScope,$location){

  $rootScope.searchProducts=  function(){
    $location.url('/search');
  }

})
/*
// for day 1 
var app = angular.module('myApp',[]) ;
app.controller('myCtrl',function(){
	console.log('myCtrl');
})
//this is a bad way and not prefered
*/
/*
angular.module('myApp').controller('myCtrl',function($scope){
console.log('myCtrl');
	$scope.users=[
	{
		name:"hager",
		track:"os"
	},
	{
		name:"hussien",
		track:"mob"
	},
	{
		name:"osman",
		track:"ui"
	},

];

$scope.user={};
$scope.tracks=[{
	id:"1" ,
	name:"os"
},{
	id: "2",
	name:"mob"
}
]

	$scope.register=function(valid){
		console.log=($scope.user);
	console.log(valid);
		if(valid){
			
		console.log($scope.user);
		}
	}

	$scope.myText2="New Message2";
	$scope.myText1="New Message1";
	setTimeout(function(){
		console.log('New Message');
	},2000);
})

angular.module('myApp').controller('newCtrl',function($scope){
	console.log('newCtrl');

$scope.tracks=[{
	id:"1" ,
	name:"os"
},{
	id: "2",
	name:"mob"
},{
	id: "3",
	name:"ui"
}
]

})
*/


