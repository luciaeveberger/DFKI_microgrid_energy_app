angular.module('iMode')

    .factory('systemTab',[
        '$location',
        'project',
        '$scope',
        function($location, project, $scope){
            $scope.project = project.project;
            $scope.systemTabs = [
                {
                    id: "system",
                    label: "physical*",
                    color: "none",
                    showItems: true,
                    items:[
                        {
                            label: "energy domains",
                            id: "energy",
                            enabled: true
                        },
                        {
                            label: "system nodes",
                            id: "system",
                            enabled: true
                        }
                    ]
                },
                {
                    id: "Economic",
                    label: "economic*",
                    color: "none",
                    showItems: true,
                    items:[
                        {
                            label: "general",
                            id: "systemNodes",
                            enabled: true
                        }
                    ]
                }
            ];

            return {
            }
        }])

        .directive('imodeSystemTab', ['systemTab', '$routeParams', function(systemTab, $routeParams){
            return {
                restrict: 'A',
                templateUrl: 'forms/systemTab.html',
                link: function (scope, element, attrs) {
                    console.log('i evaluate!!')
                }
            }
        }]);