'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
	var CategoryController = function CategoryController($http, musicPreparationService, $routeParams) {
		_classCallCheck(this, CategoryController);

		var self = this;
		self.$inject = ['$http', 'musicPreparationService'];
		self.music = musicPreparationService.music;
		self.genre = musicPreparationService.genre;
	};

	angular.module('app').controller('CategoryController', CategoryController);
})();