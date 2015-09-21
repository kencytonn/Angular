 var app=angular.module('bookstore',[]);

app.controller('BookController', function($scope){
	$scope.onebook="mybook";

	$scope.books=[
		{name:'Kifo Kisimani',
		 price:200,
		  images:'cover.jpg'
		 
		},
		{name:'Living ', price:8000,images:'images.jpeg'},
		{name:'Kifo Kisimani', price:200,images:'cover.jpg'},
		{name:'Living', price:8000,images:'cover.jpg'}
	];
});