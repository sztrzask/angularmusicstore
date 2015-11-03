(function(){
	
	class TopMenuController
	{
		constructor($route)
		{
			
		}
	}
	
	angular.module('app')
		.directive('topMenu', function () {
			return {
				 templateUrl: 'menu/menu.html',
				 restrict:'E', 
				 controller: TopMenuController,
				 controllerAs: 'topMenu'
			};
		});
		
		
		
})()