'use strict';

(function () {

	angular.module('app').config(function ($routeProvider) {
		$routeProvider.when('/Category/:genre', {
			templateUrl: 'category.html',
			controller: 'CategoryController',
			controllerAs: 'categoryCtrl',
			resolve: {
				musicPreparationService: function musicPreparationService($route) {

					var item = {
						title: 'test',
						description: 'qwe qweq weq wqwe qweq wwe'
					};
					var temp = [];
					for (var i = 0; i < 20; i++) {
						temp.push(JSON.parse(JSON.stringify(item)));
					}

					return {
						music: temp,
						genre: $route.current.params.genre
					};
				}
			}

		});
	});
})();