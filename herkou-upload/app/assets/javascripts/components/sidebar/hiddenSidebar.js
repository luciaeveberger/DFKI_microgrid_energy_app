angular.module('iMode')

    .controller('hiddenSidebarCtrl', [
        '$scope',
        'project',
        function($scope, project) {

            $scope.project = project.project;

            /*
             * Sidebar
             */
            $scope.sidebarTabs = [
                {
                    id: 'nodeSchematic',
                    label: 'Node Schematic',
                    isOpen: false
                },
                {
                    id: 'domainSchematic',
                    label: 'Domain Schematic',
                    isOpen: false
                },
                // {
                //     id: 'suggestions',
                //     label: 'System Optimization',
                //     isOpen: false
                // },
                // {
                //     id: 'optimization',
                //     label: 'Optimization Results',
                //     isOpen: false
                // }
            ];

            $scope.sidebarTabToggle = function(tab){
                tab.isOpen = !tab.isOpen;
            };

            /*
             * Components
             */
            var components = [
                {
                    id:         'generator',
                    cssClass:   'generator'
                },
                {
                    id:         'windturbine',
                    cssClass:   'windturbine'
                },
                {
                    id:         'photovoltaic',
                    cssClass:   'photovoltaic'
                },
                {
                    id:         'battery',
                    cssClass:   'battery'
                },
                {
                    id:         'heatpump',
                    cssClass:   'heatpump'
                },
                {
                    id:         'electricheater',
                    cssClass:   'electricheater'
                },
                {
                    id:         'heatstorage',
                    cssClass:   'heatstorage'
                },
                {
                    id:         'compressionchiller',
                    cssClass:   'compressionchiller'
                },
                {
                    id:         'coolingstorage',
                    cssClass:   'coolingstorage'
                }
            ];

            /*
             * Domain schematic
             */
            $scope.getGeneralSchematicComponents = function () {
                return components.filter(function (x) {

                    return $scope.project.components[x.id];
                })
            };

            /*
             * Node schematic
             */
            $scope.getNodeComponents = function(nodeId){
                return components.filter(function (x) {
                    var c = $scope.project.components[x.id];
                    return (c && c.node==nodeId);
                })
            };

        }])

    .directive('hiddenSidebar', [
        function(){
        return {
            restrict: 'A',
            templateUrl: 'sidebar/hiddenSidebar.html'
        }
    }]);