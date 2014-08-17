angular.module('myApp', ['duParallax']).
	controller('MyCtrl', function($scope, parallaxHelper){
		$scope.background = parallaxHelper.createAnimator(0.6, 150, -150);
	}

);