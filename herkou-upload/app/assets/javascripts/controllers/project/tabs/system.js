'use strict';

angular.module('iMode')
    .directive('energyInputs', function() {
        return {
            templateUrl: 'views/forms/energy-domain.html'
        };
    })
    .directive('economicInputs', function() {
        return {
            templateUrl: 'views/forms/economic.html'
        };
    })
    .directive('systemInputs', function() {
        return {
            templateUrl: 'views/forms/system.html'
        };
    })
    .directive('networkInput', function() {
        return {
            templateUrl: 'views/forms/network.html'
        };
    })
    .controller('ProjectSystemCtrl', [
        '$scope',
        'project',
        '$location',
        '$routeParams',
        'simulationResource',
        function(
            $scope, 
            project, 
            $location,
            $routeParams,
            simulationResource
        ){
            $scope.project = project.project;
            var myHash = location.hash.split('/');
            var projectId = myHash[2];

            // energy domain indexing
            $scope.subVarEN = 0;
            $scope.subVarDict = {'myIndex': 0};
            // system domain indexing
            $scope.subVar = 0;
            $scope.subVarSYDict = {'myIndex': 0};
            //network domain indexing
            $scope.subVarNet = 0;
            $scope.subVarNTDict = {'myIndex': 0};

            $scope.formEnabled = false;
            $scope.toggleForms = {createNewEnergy:false, createNewNetwork:false, createNewSystem:false};
            $scope.unitLookup = {'electricity': 'kV', 'cooling': 'C', 'heat':'C'};

            $scope.subVarNet = 0;




            // can be persisted with the related from the first page
            $scope.substitute = 'electricity';

            $scope.nodesAttachmentOptions = ['electricity', 'heat', 'cooling'];
            $scope.systemAttachmentOptions = {};

            angular.copy($scope.project.system.systemNodes.nodes[0], $scope.systemAttachmentOptions);
            $scope.systemAttachmentOptions.name = "New" +  $scope.project.system.systemNodes.nodes.length;

            simulationResource.get({id: projectId}).$promise
                .then(
                    function (data) {
                        $scope.project.system = data.project.system;
                        }
                );
            $scope.showNodes = false;
            $scope.systemTabs = [
                {
                    id: "system",
                    label: "physical",
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
                        },
                        {
                            label: "network",
                            id: "network",
                            enabled: true
                        }
                    ]
                },
                {
                    id: "Economic",
                    label: "economic",
                    color: "none",
                    showItems: true,
                    items:[
                        {
                            label: 'general figures',
                            id: "economics",
                            enabled: true
                        }
                    ]
                }
            ];
            $scope.toggleNew = function () {
                $scope.selectedItem.id  = 'create-new';
            };
            $scope.toggleNewDomain = function (integer_variant) {
                if (integer_variant == 1){
                    $scope.toggleForms.createNewEnergy = true;
                }
                if (integer_variant == 2){
                    $scope.toggleForms.createNewSystem = true;
                }
                if (integer_variant == 3){
                    $scope.toggleForms.createNewNetwork = true;
                }
                $scope.createNewEnergy = true;
            };
            $scope.toggleNewSytem = function () {
                $scope.createNewSystem = true;
            };
            $scope.hideNewDomain = function (interval_variant) {
                if (interval_variant == 1){
                    $scope.toggleForms.createNewEnergy = false;
                }
                if (interval_variant == 2){
                    $scope.toggleForms.createNewSystem = false;
                }
                if (interval_variant == 3){
                    $scope.toggleForms.createNewNetwork = false;
                }
            };
            $scope.toggleOld = function () {
                $scope.selectedItem.id  = 'system';
            };
            $scope.saveDetails = function () {
                $scope.project = project.project;
                simulationResource.update({ id:projectId }, project).$promise
                    .then(
                        function (data) {
                            $scope.project.system = data.project.system;
                        });
            };

            $scope.emptyNew =  {
                id: 1,
                domain: {
                    type_name: 'electricity',
                    domain_name:'',
                    description: '',
                    rated_potential: {electricity_voltage: {val: '0.4', uom: 'kV'}},
                    allowed_deviation: {val: '100', uom: '%'}
                }
            };
            $scope.emptyNode = {
                id: 2,
                    name: 'N2 (Default)',
                description: 'System-internal node components can be installed at.',
                defaultNode: true,
                position: {
                distanceToDefault: {
                    eastWest: 100,
                        northSouth: 100
                },
                lengthOfConnections: {}
            },
                buses: {
                    electric: true,
                        heat: true,
                        cooling: true
                }
            };
            $scope.emptyNetwork = {
                id:0,
                name:'New Network',
                description:'',
                buses: {
                    electric: true,
                    heat: true,
                    cooling: true
                },
                start_bus: 'electric',
                end_bus: 'electric'
            };
            $scope.totalSum  = (1 + $scope.project.system.generalEconomicFigures.rates.discount_rate.base_fraction.val
                + $scope.project.system.generalEconomicFigures.rates.discount_rate.risk_fraction.val)/
                (1 +  $scope.project.system.generalEconomicFigures.rates.inflation_rate.val) - 1;


            $scope.changedInput = function(item) {
                $scope.itemHolder = item;
            };

            $scope.saveNewDomain = function (integer_variant) {
                if (integer_variant == 1) {
                    $scope.emptyNew.id = $scope.project.system.energyDomain.length;
                    var domain = {};
                    angular.copy($scope.emptyNew, domain);
                    $scope.project.system.energyDomain.push(domain);
                    $scope.emptyNew.domain.description = '';
                    $scope.emptyNew.domain.domain_name = '';
                    $scope.saveDetails();
                }
                if (integer_variant == 2){
                    $scope.systemAttachmentOptions.id = $scope.project.system.systemNodes.nodes.length;
                    var domain = {};
                    angular.copy($scope.systemAttachmentOptions, domain);
                    $scope.project.system.systemNodes.nodes.push(domain);
                    $scope.systemAttachmentOptions.name = "New" +  $scope.project.system.systemNodes.nodes.length;
                    $scope.saveDetails();
                }
                if (integer_variant == 3) {
                    $scope.emptyNetwork.id = $scope.project.system.networkNodes.networks.length;
                    var domain = {};
                    angular.copy($scope.emptyNetwork, domain);
                    $scope.project.system.networkNodes.networks.push(domain);
                    $scope.saveDetails();
                }

            };

            $scope.deleteElement = function (item, integer_variant) {
                if (integer_variant == 1) {
                    var indexOf = parseInt(item);
                    for (var i in  $scope.project.system.energyDomain){
                        if ($scope.project.system.energyDomain[i].id == indexOf){
                            var n = $scope.project.system.energyDomain.indexOf($scope.project.system.energyDomain[i]);
                            if (n >= 1) {
                                $scope.project.system.energyDomain.splice( n, 1 );
                            }
                        }
                    }
                    $scope.saveDetails();
                    $scope.subVarDict.myIndex = 0;
                }
                if (integer_variant == 2) {
                    var indexOf = parseInt(item);
                    for (var i in  $scope.project.system.systemNodes.nodes){
                        if ($scope.project.system.systemNodes.nodes[i].id == indexOf){
                            var n = $scope.project.system.systemNodes.nodes.indexOf($scope.project.system.systemNodes.nodes[i]);
                            if (n >= 1) {
                                $scope.project.system.systemNodes.nodes.splice( n, 1 );
                            }
                        }
                    }
                    $scope.saveDetails();
                    $scope.subVarSYDict.myIndex = 0;
                }
                if (integer_variant == 3) {
                    var indexOf = parseInt(item);
                    for (var i in  $scope.project.system.networkNodes.networks){
                        if ($scope.project.system.networkNodes.networks[i].id == indexOf){
                            var n = $scope.project.system.networkNodes.networks.indexOf($scope.project.system.networkNodes.networks[i]);
                            if (n >= 1) {
                                $scope.project.system.networkNodes.networks.splice( n, 1 );
                            }
                        }
                    }
                    $scope.saveDetails();
                    $scope.subVarNTDict.myIndex = 0;
                }
            };

            $scope.deleteDomain = function (n) {
                var index = n.id;
                if (index > 1) {
                    $scope.project.system.energyDomain.splice(index - 1, n.id);
                }
            };
            $scope.deleteSystemNode = function (index) {
                console.log(index);
            };

            $scope.selectedItem = $scope.systemTabs[0].items[0];

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
             *  NODES
             */
            $scope.systemNodesTabs = [
                {
                    id: 'position',
                    label: 'Position'
                },
                {
                    id: 'buses',
                    label: 'Buses'
                }
            ];

            $scope.selectedSystemNodesTab = $scope.systemNodesTabs[0];

            $scope.selectSystemNodesTab = function(tab){
                $scope.selectedSystemNodesTab = tab;
            };

            $scope.showSystemNodesTab = function(tabId){
                return $scope.selectedSystemNodesTab.id == tabId;
            };
            $scope.showNodeProfile = function(){
                $scope.showNodes = true;
            };
            $scope.saveNode = function () {
                $scope.formSubmitted = true;

            }

            var emptyNode = {
                id: '',
                name: '',
                description: '',
                defaultNode: false,
                position: {
                    distanceToDefault: {
                        eastWest: '',
                        northSouth:''
                    },
                    lengthOfConnections: {}
                },
                buses: {
                    electric: false,
                    heat: false,
                    cooling: false
                }
            };

            $scope.selectItemFromNav = function (selectedElement, integer_variant) {
                if (integer_variant ==1) {
                    var indexOf = selectedElement.id;
                    $scope.selectedItem.id  = 'energy';
                    for (var i in  $scope.project.system.energyDomain) {
                        if ($scope.project.system.energyDomain[i].id == indexOf) {
                            var n = $scope.project.system.energyDomain.indexOf($scope.project.system.energyDomain[i]);
                            $scope.subVarDict = {'myIndex': parseInt(selectedElement.id)};
                        }
                    }
                }
                if(integer_variant ==2 ){
                    $scope.selectedItem.id  = 'system';
                }
                if(integer_variant ==3 ){
                    $scope.selectedItem.id  = 'network';
                }

            }

            // @need to remodel structure
            // $scope.selectedNode = $scope.nodes[0];

            $scope.createNode = function(){
                $scope.showNodes = true;
                var node = {};
                angular.copy(emptyNode, node);
                node.id = ++$scope.project.system.nodeId;
                node.name = "N"+node.id;
                $scope.nodes.push(node);
                $scope.selectedNode = node;
            };


            $scope.deleteNode = function(n){
                var index = $scope.nodes.indexOf(n);
                if (index > -1){
                    $scope.nodes.splice(index, 1);
                    $scope.selectedNode = $scope.nodes[index - 1];
                }
            };

            $scope.selectNode = function(n){
                $scope.selectedNode = n;
                $scope.toggleNodeAniamtion = !$scope.toggleNodeAniamtion
            };

            $scope.getOthersNodes = function(){
                return $scope.nodes.filter(function (x) {
                    return x.id != $scope.selectedNode.id;
                })
            };

        }]);