'use strict';

(function () {
	angular.module('app', ['ngMaterial', 'ngRoute']).config(function ($locationProvider) {

		$locationProvider.html5Mode({
			enabled: true,
			requireBase: false
		});
	});
})();