'use strict';

angular.module('iMode')
    .directive('componentAdministrative', function() {
        return {
            templateUrl: 'views/forms/component-administrative.html'
        };
    })
    .directive('componentEconomic', function() {
        return {
            templateUrl: 'views/forms/component-economic.html'
        };
    })
    .directive('componentEnvironmental', function() {
        return {
            templateUrl: 'views/forms/component-environmental.html'
        };
    })
    .directive('componentTechnical', function() {
        return {
            templateUrl: 'views/forms/component-technical.html'
        };
    })

    .controller('ProjectComponentsCtrl', [
        '$scope',
        'project',
        'projectComponents',
        'componentResource',
        'componentEconomicResource',
        'componentInstallationResource', 
        'simulationResource',
        '$location',
        function(
            $scope,
            project,
            projectComponents,
            componentResource,
            componentEconomicResource,
            componentInstallationResource,
            simulationResource,
            $location) {
            $scope.project = project.project;
            var myHash = location.hash.split('/');
            var projectId = myHash[2];

            $scope.initData = function () {

                $scope.dummyData =[
                    {"key": "Investment Cost", "values": [ [0, 0],[20, 200], [40, 400], [60, 500], [80, 600], [100, 700]]},
                    {"key": "Replacement Cost", "values": [[0, 0],[20, 300], [40, 450],[60, 590],[80, 900],[100, 1200] ]}
                ];
            };
            simulationResource.get({id: projectId}).$promise
                .then(
                    function (data) {
                        $scope.project.components = data.project.components;
                    }
                );

            $scope.initData();
            $scope.loadsTabs = [
                {
                    id: "Electricity",
                    label: "Electricity",
                    color: "#3a8e98",
                    showCategories: true,
                    categories: [
                        {
                            label: "Components",
                            id: "primary",
                            color: "#81ca9c",
                            showItems: true,
                            items: [
                                {
                                    label: "electricity",
                                    id: "electricity",
                                    type: 'primary',
                                    enabled: true
                                },
                                {
                                    label: "heat",
                                    id: "heat",
                                    type: 'primary',
                                    enabled: true
                                },
                                {
                                    label: "cooling",
                                    id: "cooling",
                                    type: 'primary',
                                    enabled: true
                                }
                            ]
                        }
                    ]
                }
            ];
            $scope.selectedItem = {
                label: "electricity",
                id: "electricity",
                type: 'primary',
                enabled: true
            };
            $scope.selectItem = function (item) {
                $scope.selectedItem = item;
            };
            $scope.selected_parameter ={
                label: 'Dispatchable generation',
                id: 0,
                elements:[
                    {label:'Heat pump', id:'HP'},
                    {label:'Heat boiler', id:'Heat Boiler'}
                ]
            };

            $scope.componentSelection =
                {
                    heat: [
                        {
                            label: 'Dispatchable generation',
                            saving_label:'dispatchable_generation',
                            id: 0,
                            elements:[
                                            {label:'Heat pump', id:'HP'},
                                            {label:'Heat boiler', id:'Heat Boiler'}
                                            ]
                        },
                        {label: 'Storing',
                            saving_label:'storing',
                            id: 1,
                            elements:[
                                {label:'Heat storage', id:'HS'}
                            ]
                        },
                        {label: 'Connections / lines', id: 2,
                            saving_label:'connection_lines',
                            elements:[
                                {label:'Pipes', id:'PI'}
                            ]
                        }
                        ],
                    cooling:  [
                        {label: 'Dispatchable generation', id: 0,
                            saving_label:'dispatchable_generation',
                            elements:[
                            {label:'Compression chiller', id:'CC'}]
                        },
                        {label: 'Storing', id: 1,
                            saving_label:'storing',
                            elements:[
                                {label:'Cooling storage', id:'CS'}]
                        },
                        {label: 'Connections / lines', id: 2,
                            saving_label:'connection_lines',
                            elements:[{label:'Pipes', id:'CP'}]
                        }
                    ],
                    electricity: [
                        {label: 'Dispatchable generation', id: 0,
                            saving_label:'dispatchable_generation',
                            elements:
                            [
                                {label:'Generator (combustion)', id:'GC'},
                                {label:'Cogenerator (combustion),', id:'CG'},
                                {label:' Fuel cell system', id: 'FC'},
                                {label:'Converter', id:'CV'}
                            ]

                        },
                        {label: 'Non-dispatchable generation', id: 1,
                            saving_label:'non_dispatchable_generation',
                        elements:
                        [
                            {label:'PV system', id:'PS'},
                            {label: 'Wind turbine', id:'WT'}
                            ]
                        },
                        {label: 'Storing', id: 2,
                            saving_label:'storing',
                            elements:
                                [
                                    {label:'Lead-acid battery', id:'LA'},
                                    {label: 'Lithium ion', id:'LI'},
                                    {label: 'Lithium ion', id:'battery'}
                                ]

                        },
                        {label: 'Connections / lines', id: 3,
                            saving_label:'connection_lines',
                            elements:
                                [
                                    {label:'AC-line (3-phase', id:'AC'},
                                    {label: 'DC-line', id:'DC'},
                                ]
                        }
                    ],
                };

            $scope.adminFields = {
                name:'', description:'',
                manufacturer:'', manufacturer_name:'', manufacturer_description:'',
                discrete_technology:'discrete'
            };
            $scope.addElementToProject = function (selectedOuterItem, selectedInnerItem, fieldObject) {
                var firstLabel = selectedOuterItem.id;
                var secondLabel = selectedInnerItem.saving_label;
                var thirdLabel =  $scope.selected_specific_item;
                var new_dict = {
                    firstLabel :{'type':firstLabel, 'selection':secondLabel, 'specific': thirdLabel,
                      admin:{'admin': fieldObject}
                   }
                };
            };

            $scope.resetGraph = function () {
                $scope.initData();
            };
            $scope.investmentModel = {};
            // may add quadradic abilities
            $scope.$watch("investmentModel.investmentCostIndependent", function(newVal, oldVal) {
                if (newVal !== oldVal && newVal) {
                        $scope.investmentModel.investmentCostIndependent = newVal;
                        for (var value in $scope.dummyData){
                            for (var data_set in $scope.dummyData[value]['values']) {
                                $scope.dummyData[value]['values'][data_set][1] = parseInt($scope.dummyData[value]['values'][data_set][1]) + parseInt(newVal);
                            }
                        }
                }
                else {
                        $scope.resetGraph()
                }
            });

            $scope.chartOptions =  {
                chart: {
                    type: 'lineChart',
                    height: 350,
                    margin : {
                        top: 10,
                        right: 80,
                        bottom: 60,
                        left: 80
                    },
                    color:['#aec7e8', '#2b2e39'],
                    x: function(d){return d[0];},
                    y: function(d){return d[1];},
                    // can be dynamic if the offset is higher
                    // yDomain:[0,14000],
                    xDomain:[0,100],
                    duration: 0,
                    useInteractiveGuideline: true,
                    xAxis: {
                        axisLabel: 'Nominal Capacity [kW]',
                        tickFormat: function(d) {
                            return (d);
                        }
                    },
                    yAxis: {
                        axisLabel: 'CAPEX [EUROS]',
                        tickFormat: function(d){
                            return (d);
                        },
                        forceY: [0,900],
                    },
                }
            };
            $scope.saveDetails = function () {
                // $scope.project = project;
                simulationResource.update({ id:projectId }, project).$promise
                    .then(
                        function (data) {
                            $scope.project.system = data.project.system;
                        });
            };
            $scope.currentNavItem = 'page1';
            // $scope.domains = [
            //     {
            //         id: "electric",
            //         label: "Electric",
            //         color: "",
            //         items:[],
            //     },
            //     {
            //         id: "heating",
            //         label: "Heat",
            //         color: "",
            //         items:[
            //         ]
            //     },
            //     {
            //         id: "cooling",
            //         label: "Cooling",
            //         color: "",
            //         items:[]
            //     }
            // ];
            // var myHash = location.hash.split('/')
            // //console.log(myHash)
            // var projectId = myHash[2];
            // $scope.project   = project.project;
            // $scope.availableComponents = [];
            //
            componentResource.all().$promise.then(function (results) {
               console.log(results[0].domains)

            });
            //     angular.forEach(results, function (result) {
            //         if (result.component_types_id =='1'){
            //             $scope.domains[0]['items'].push(result);
            //             $scope.availableComponents.push(result);
            //
            //             //  if (projectId == 2 && result.id == 3 || result.id == 4 || result.id == 2){
            //             //      $scope.project.components[result.id] = result;
            //             // }
            //         }
            //         if (result.component_types_id =='2'){
            //             $scope.domains[1]['items'].push(result);
            //             $scope.availableComponents.push(result);
            //         }
            //         if (result.component_types_id =='3'){
            //             $scope.domains[2]['items'].push(result);
            //             $scope.availableComponents.push(result);
            //             // if (projectId == 2){
            //             //     console.log('i should be only taking a small sample');
            //             // }
            //              //$scope.project.components[result.id] = result;
            //         })
            // //         // for demo!
            // //         //console.log($scope.project.components)//.push(result);
            // //
            // //
            // //         // $scope.project.components[result.id] = result;
            // //
            // //
            //     });
            //
            //
            //
            // });
            //
            //
            //
            // /*
            //  * Tabs
            //  */
            //
            // var selectedDomain = $scope.domains[0];
            //
            //
            // var currentView = "schematics";
            //
            // $scope.showSchematicView = function () {
            //     return currentView === "schematics"
            // };
            //
            // $scope.showDomain= function () {
            //     return currentView === "item"
            // };
            //
            // $scope.showItemView = function () {
            //     return currentView === "item"
            // };
            //
            // $scope.getDomainClass = function(){
            //     return selectedDomain.id;
            // };
            //
            // $scope.getDomainLabel = function(){
            //     return selectedDomain.label;
            // };
            //
            // $scope.isDomainSelected = function(domainId){
            //     return (selectedDomain.id === domainId);
            // };
            //
            // $scope.selectDomain = function(domain){
            //     selectedDomain = domain;
            //     currentView = "schematics";
            //     domain.showItem = true;
            // };
            //
            // $scope.hideDomainItem = function(domain){
            //     domain.showItem = false;
            // };
            //
            // $scope.isItemSelected = function(itemID){
            //     return $scope.project.components[itemID];
            // };
            //
            // $scope.getSchematicsComponents = function () {
            //     return selectedDomain.items.filter(function(i){
            //         return $scope.isItemSelected(i.id);
            //     });
            // };
            //
            // /*
            //  * Component view
            //  */
            // $scope.currentComponent = null;
            //
            // $scope.showComponentDetails = function(id, domain){
            //     console.log(id);
            //     if(1<2){
            //
            //         $scope.currentComponent = $scope.availableComponents[id - 1];
            //          componentEconomicResource.get({component_details_id:id}).$promise.then(function (result){
            //             $scope.currentComponent.economics = result;
            //
            //         });
            //         // componentInstallationResource.get({component_details_id:id}).$promise.then(function (result){
            //         //     //$scope.currentComponent.economics = result;
            //         //     console.log('get the insall criterias', result);
            //         // });
            //         console.log('this is where', $scope.currentComponent)
            //     }else{
            //         $scope.currentComponent = projectComponents.getComponent(id);
            //         console.log('should be modify',projectComponents.getComponent(id));
            //         //$scope.currentComponent.node = $scope.getAvailableNodes($scope.currentComponent)[0].id;
            //     }
            //
            //     currentView = "item";
            //
            //     //update domain
            //     selectedDomain = domain;
            // };
            //
            // $scope.removeItem = function(){
            //     delete $scope.project.components[$scope.currentComponent.id];
            //     currentView = "schematics";
            // };
            // $scope.addItem = function(){
            //     $scope.project.components[$scope.currentComponent.id] = $scope.currentComponent;
            //     console.log('i am adding', $scope.currentComponent)
            //     currentView = "schematics";
            //     $scope.currentComponent.cssClass = $scope.project.components[$scope.currentComponent.id].cssClass;
            //     console.log($scope.project.components)
            //
            //
            //
            // };
            //
            // var selectedComponentTab = 'economics';
            //
            // $scope.selectComponentTab = function (tab) {
            //     selectedComponentTab = tab;
            // };
            //
            // $scope.showComponentTab = function (tab) {
            //     return tab === selectedComponentTab;
            // };
            // console.log('project', project)
            // $scope.nodes = $scope.project.system.nodes;


        }])


    .directive('backImg', function(){
    return function(scope, element, attrs){
        var url = attrs.backImg;
        element.css({
            'background-image': 'url(' + url +')',
            'background-size' : 'cover'
        });
    };
});
