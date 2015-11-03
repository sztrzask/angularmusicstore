(function(){
	class CategoryController{
		constructor($http, musicPreparationService, $routeParams){
			var self = this;
			self.$inject = ['$http','musicPreparationService'];
			self.music = musicPreparationService.music;
			self.genre = musicPreparationService.genre;
		}
	}
	angular.module('app').controller('CategoryController' , CategoryController);
})();