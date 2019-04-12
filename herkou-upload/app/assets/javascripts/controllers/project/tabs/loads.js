'use strict';

angular.module('iMode')
    .directive('loadsElectricityInputs', function() {
        return {
            scope: {
                counter: '@' // Accept two ways binding
            },
            link: function (scope, element, attrs) {
                console.log(scope.counter);
            },
            templateUrl: 'views/forms/loads-electricity-inputs.html'

        };
    })
    .directive('loadsManual', function() {
        return {
            templateUrl: 'views/forms/loads-manual-upload.html'
        };
    })
    .directive('powerInputs', function() {
        return {
            templateUrl: 'views/forms/power-manual-upload.html'
        };
    })

    .controller('ProjectLoadsCtrl', [
                    '$scope',
                    'project',
                    'simulationResource',
                    '$location',
                    function ($scope,
                              project,
                              simulationResource,
                              $location)
                              {

                        $scope.possibleIntervals = ['15', '30', '45', '60', '120'];
                        $scope.possibleElements = ['Element X', 'Element Y'];
                        $scope.possibleTimeIntervals = [{val: 'day',min:1440 }, {val: 'week', min:10080}, {val:'month', min:43920}];
                        $scope.possibleTimeSteps = ['X', 'Y', 'Z'];

                        $scope.chart = {'chartElement':'', 'chartInterval': '30', 'chartStep': '', 'startDate': new Date(),
                            periodLength:{val: 'day',min:1440 }, 'scaling_factor':1, 'scaling_offset':0,
                            name: 'default', description:"default"
                        };
                        var myHash = location.hash.split('/');
                        var projectId = myHash[2];
                        var initLoadOptions = function () {
                            $scope.loadOptions = getLoadChart();
                        };
                        var getLoadChart = function () {
                            return {
                                chart: {
                                    type: 'lineWithFocusChart',
                                    height: 450,
                                    margin: {
                                        top: 20,
                                        right: 40,
                                        bottom: 10,
                                        left: 40
                                    },
                                    interpolate: 'linear',
                                    color: ['#aec7e8', 'darkred'],
                                    x: function (d) {
                                        return d[0];
                                    },
                                    y: function (d) {
                                        return d[1];
                                    },
                                    duration: 0,
                                    xAxis: {
                                        tickFormat: function (d) {
                                            //return d3.time.format('%Y-%m-%d')(new Date(d * 1000));
                                            return d;
                                        }
                                    },
                                    yAxis: {
                                        axisLabel: 'measure in MW',
                                        axisLabelDistance: 11,
                                        // tickFormat: function (d) {
                                        //     return d3.format(',.2f')(d);
                                        // }
                                    },
                                    x2Axis: {
                                        tickFormat: function (d) {
                                            return d3.time.format('%d %b')(new Date(d * 1000));
                                        }
                                    },
                                    y2Axis: {
                                        tickFormat: function (d) {
                                            return d3.format(',.2f')(d);
                                        }
                                    }
                                }
                            }
                        };
                        $scope.loadsTabs = [
                            {
                                id: "Electricity",
                                label: "Electricity",
                                color: "#3a8e98",
                                showCategories: true,
                                categories:[
                                    {   label: "Loads",
                                        id: "primary",
                                        color: "#81ca9c",
                                        showItems:true,
                                        items:[
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
                        $scope.selectedItem =  {
                            label: "electricity",
                            id: "electricity",
                            type: 'primary',
                            enabled: true
                        };
                        $scope.saveDetails = function () {
                            $scope.project = project.project;
                            simulationResource.update({ id:projectId }, project).$promise
                                .then(
                                    function (data) {
                                    });
                        };

                        $scope.project = project.project;

                        simulationResource.get({id: projectId}).$promise
                                      .then(
                                          function (data) {
                                              $scope.project = data.project;
                                          }
                                      );

                        $scope.optionToShow = 'import';
                        $scope.loadsSelections  = [
                            {label: 'Undefined', id:'UN'},
                            {label: 'Residential loads', id:'RS'},
                            {label: 'Commercial loads', id:'CM'},
                            {label: 'Industrial loads', id:'IN', value:'industrial'},
                           ];
                        $scope.loadsDict = {selection_type:'', type_selected:'upload'};
                        $scope.userSelectionChoices = 'upload';
                        $scope.project.project_id = projectId;

                        $scope.data = [{
                            "key": "Heat Load",
                            "values": []
                        }];
                        $scope.heat_data = [{
                            "key": "heat Load", "values": []
                        }];
                        $scope.graphName = "Electric";
                        $scope.selectItem = function (item) {
                            $scope.selectedItem = item;
                        };
                        $scope.sidebarTabToggle = function (tab) {
                            tab.showCategories = !tab.showCategories;
                        };
                        $scope.showChart = false;
                        $scope.onLoad = function($file, resourcepath1, resourcepath2){
                            $scope.project.loads[resourcepath1][resourcepath2].file_upload = $file;
                            $scope.isLoaded = true;
                            console.log($scope.project.loads);
                            //$scope.saveDetails();
                            initValues($file);
                            $scope.showChart = true;

                        };
                        $scope.deleteEPWFile = function () {
                            $scope.project.resources.physical.primary.file =  '';
                            primaryResources.file = '';
                            $scope.saveDetails();
                            $scope.uploadEPWSuccessful = false;
                        };
                        $scope.manualDefData = [
                            {"key": "Series 1", "values": []
                            }
                        ];
                        var initValues = function (file) {
                            var data = file.split(/\r?\n/);
                            for (var val in data){
                                var temporary = (data[val].split(','));
                                console.log(parseInt(temporary[1]))
                                $scope.manualDefData[0]['values'].push([parseFloat(temporary[0]), parseFloat(temporary[1])])
                            }
                            console.log(data);

                        }
                        $scope.manualchartOptions = {
                            chart: {
                                type: 'lineChart',
                                height: 450,
                                margin : {
                                    top: 10,
                                    right: 20,
                                    bottom: 30,
                                    left: 40
                                },
                                color:['#aec7e8'],
                                x: function(d){return d[0];},
                                y: function(d){return d[1];},
                                duration: 0,
                                useInteractiveGuideline: true,
                                xAxis: {
                                    tickFormat: function(d) {
                                        return d3.time.format('%H:%M')(new Date(d));
                                    }
                                },
                                yAxis: {
                                    axisLabel: '',
                                    axisLabelDistance: 11,
                                    tickFormat: function(d){
                                        return d3.format(',.2f')(d);
                                    }
                                },
                            }
                        };

                        $scope.updateTotalLoadInterval = function () {
                            $scope.manualDefData[0]['values'] = [];
                            $scope.isUpdateFilters = true;
                            for (var i=0; i< (1000/$scope.chart.chartInterval); i++){
                                $scope.manualDefData[0]['values'].push([$scope.chart.startDate.getTime() - $scope.chart.chartInterval*60000*i , 100]);
                            }
                        };
                        $scope.saveManualData = function () {
                            $scope.project.loads.manual_power.time_series.values = $scope.manualDefData;
                            $scope.saveDetails();
                        };

                        $scope.sidebarComponentToggle = function (component) {
                            component.showItems = !component.showItems;
                        };



                        $scope.isItemSelected = function (item) {
                            return ($scope.selectedItem && $scope.selectedItem.id == item.id);
                        };
                    }


                ]
            );