var T9App = angular.module('T9App', []);


T9App.controller('T9Controller', function($scope, $timeout){
	 $scope.clickCount = 0;
	 $scope.textBox = "";
	 var timeoutHandler = null;
	 $scope.pressed = 0;
	 $scope.diff = 0;
	 $scope.mouseDown = function(){
	 	$scope.pressed = new Date();
	 }
	 $scope.mouseUp = function(){
	 	$scope.diff = Math.round((new Date()-$scope.pressed)/1000);
	 }
	 $scope.clicked = function(str1, str2, str3, val, str4){
	     if (timeoutHandler != null){
	          $timeout.cancel( timeoutHandler );
	     }
	     $scope.clickCount++;

	     timeoutHandler = $timeout(function()
	     {
	         //now you know the number of clicks.
	         //set the click count to zero for future clicks
	         if ($scope.clickCount==1){
	         	if($scope.diff>=1){
			 		$scope.textBox+=val;
			 		$scope.diff = 0;
			 	}
			 	else{
	         		$scope.textBox+=str1;
	         	}
	         }
	         if($scope.clickCount==2){
	         	$scope.textBox+=str2;
	         }
	         if($scope.clickCount==3){
	         	$scope.textBox+=str3;
	         }
	         if($scope.clickCount==4){
	         	if(str4!=undefined){
		         	$scope.textBox+=str4;
	         	}
	         }
	         $scope.clickCount = 0;
	     }, 400)
	 }
	 $scope.clicked_str = function(){
	 	$scope.textBox+="*";
	 }
	 $scope.clicked_0 = function(){
	 	$scope.textBox+="0";
	 }
	 $scope.clicked_hash = function(){
	 	$scope.textBox+="#";
	 }
})

