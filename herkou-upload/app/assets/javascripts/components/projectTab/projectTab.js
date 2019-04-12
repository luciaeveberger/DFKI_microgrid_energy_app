angular.module('iMode')

    .factory('projectTab',[
        '$location',
        function($location){

        // make these subjective or not
        var tabs = [
            {
                title:              '1 overview',
                id:                 'overview',
                enabled:            true,
                valid:              false
            },
            {
                title:              '2 system',
                id:                 'system',
                enabled:            true,
                valid:              false
            },
            {
                title:              '3 resources',
                id:                 'resources',
                enabled:            true
            },
            {
                title:              '4 loads',
                id:                 'loads',
                enabled:            true
            },
            {
                title:              '5 components',
                id:                 'components',
                enabled:            true
            },
            {
                title:              '6 settings',
                id:                 'settings',
                enabled:            true
            },
            {
                title:              'results',
                id:                 'results',
                enabled:            false
            }];

        var isActive = function (url) {
            var currentUrl = $location.path();
            return currentUrl === url;
        };

        var getUrl = function(projectId, tab){
            return '/project/' + projectId + '/' +tab.id;
        };
        return {
            tabs : tabs,
            isActive: isActive,
            getUrl: getUrl
        }
    }])

    .directive('imodeProjectTab', ['projectTab', '$routeParams', function(projectTab, $routeParams){
        return {
            restrict: 'A',
            templateUrl: 'projectTab/template.html',
            link: function (scope, element, attrs) {

                scope.tabs = projectTab.tabs;
                scope.isValid = projectTab.isValid;
                scope.isActive = projectTab.isActive;
                scope.getUrl = projectTab.getUrl;
                scope.projectId = $routeParams.projectId;
            }
        }
    }]);