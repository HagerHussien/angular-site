angular.module('myApp').factory("products",function($q,$http){

return {

		getAllProducts:function(){
		
				return [
				
				{
					name:'product A' ,
					price:'200' ,
					desc:'hello world ' ,
				},
				
				{
					name:'product B' ,
					price:'200' ,
					desc:'hello world ' ,
				},
				
				{
					name:'product C' ,
					price:'200' ,
					desc:'hello world ' ,
				}


				]


				},
		getAllFromServer:function(){

			var def =$q.defer();
			$http({
				url:'json/products.json' ,
				method:'GET'

			}).then(function(res){
				// console.log(res);
				if(res.data.length){
					def.resolve(res.data)
				}else{
					def.reject('there is no data ')
				}

			},function(err){
				// console.log(err);
				def.reject(err);
			})
			return def.promise ;

		},
		getFromServer:function(index){

			var def =$q.defer();
			$http({
				url:'json/products.json' ,
				method:'GET'

			}).then(function(res){
				// console.log(res);
				if(res.data.length){
					for (var i = 0; i < res.data.length; i++) {
						
						 if(i==index)
						 {
						 	// return res.data[i];
					def.resolve(res.data[i])

						 }
						 
					}



				}else{
					def.reject('there is no data ')
				}

			},function(err){
				// console.log(err);
				def.reject(err);
			})
			return def.promise ;

		}

		}


})


