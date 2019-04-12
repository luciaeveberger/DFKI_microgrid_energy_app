'use strict';

angular.module('iMode')

    .controller('ProjectSettingsCtrl', [
        '$scope',
        'project',
        'simulationParserResource',
        function($scope, 
            project,
                 simulationParserResource){

            $scope.project = project.project;
            $scope.runSimulation = function () {
                simulationParserResource.create($scope.project).$promise
                    .then(function(results){
                        console.log(results);
                    });

            };

            /*
             * Tabs
             */
            $scope.settingsTabs = [
                {
                    id: "physical",
                    label: "Physical",
                    color: "",
                    showItems: true,
                    items:[
                        {
                            label: "Calculation type",
                            id: "calculationType",
                            enabled: true
                        },
                        {
                            label: "Optimization objective",
                            id: "optimizationObjective",
                            enabled: true
                        }
                    ]
                },
                {
                    id: "economic",
                    label: "Economic",
                    color: "",
                    items:[
                        {
                            label: "item",
                            id: "item",
                            enabled: false
                        }
                    ]
                },
                {
                    id: "environmental",
                    label: "Environmental",
                    color: "",
                    items:[
                        {
                            label: "item",
                            id: "item",
                            enabled: false
                        }
                    ]
                }
            ];

            $scope.selectedItem = $scope.settingsTabs[0].items[0];

            $scope.sidebarTabToggle = function(tab){
                tab.showItems = !tab.showItems;
            };

            $scope.selectItem = function (item) {
                $scope.selectedItem     = item;
            };

            $scope.isItemSelected = function (item) {
                return ($scope.selectedItem && $scope.selectedItem.id == item.id);
            };

            /*
             * Optimization Objective
             */
            $scope.optimizationObjectOptions     = $scope.project.settings.optimizationObject;
            $scope.selectedOptimizationObject    = $scope.optimizationObjectOptions[0];


            $scope.componentDeselected = function (c, list) {
                return list.indexOf(c.id) > -1;
            };

            $scope.deselectComponent = function(c, list){
                var idx = list.indexOf(c.id);

                if ( idx > -1) {
                    list.splice(idx, 1);
                }
                else {
                    list.push(c.id);
                }
            };

            // Economic
            $scope.optObjEconomicTabs = [
                {
                    id: 'capex',
                    label: 'Capex'
                },
                {
                    id: 'opex',
                    label: 'Opex'
                }
            ];

            $scope.selectedOptObjEconomicTab = $scope.optObjEconomicTabs[0];

            $scope.selectOptObjEconomicTab = function(tab){
                $scope.selectedOptObjEconomicTab = tab;
            };

            $scope.showOptObjEconomicTab = function(tabId){
                return $scope.selectedOptObjEconomicTab.id == tabId;
            };

            // Environmental
            $scope.optObjEnvironmentalTabs = [
                {
                    id: 'co2emissions',
                    label: 'CO2 Emissions'
                },
                {
                    id: 'primaryEnergy',
                    label: 'Primary energy'
                }
            ];

            $scope.selectedOptObjEnvironmentalTab = $scope.optObjEnvironmentalTabs[0];

            $scope.selectOptObjEnvironmentalTab = function(tab){
                $scope.selectedOptObjEnvironmentalTab = tab;
            };

           

            $scope.showOptObjEnvironmentalTab = function(tabId){
                return $scope.selectedOptObjEnvironmentalTab.id == tabId;
            };

        }]);

