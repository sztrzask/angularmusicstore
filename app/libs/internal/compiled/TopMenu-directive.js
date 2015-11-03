'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
	var TopMenuController = function TopMenuController($route) {
		_classCallCheck(this, TopMenuController);
	};

	angular.module('app').directive('topMenu', function () {
		return {
			templateUrl: 'menu/menu.html',
			restrict: 'E',
			controller: TopMenuController,
			controllerAs: 'topMenu'
		};
	});
})();