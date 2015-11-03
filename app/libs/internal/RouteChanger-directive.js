(function () {

    angular.module('app')
        .directive('routeChange', ['$location', function ($location) {
            return {
                link: function (scope, element, attrs) {
                    element.on('click', function () {
                        scope.$apply(function () {
                            $location.path(attrs.routeChange);
                        });
                    });
                }
            }
        }]);
})()