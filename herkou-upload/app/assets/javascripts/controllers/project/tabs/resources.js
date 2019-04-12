'use strict';
angular.module('iMode')
    .directive("uiDraggable", [
        '$parse',
        '$rootScope',
        function ($parse, $rootScope) {
            return function (scope, element, attrs) {
                if (window.jQuery && !window.jQuery.event.props.dataTransfer) {
                    window.jQuery.event.props.push('dataTransfer');
                }
                element.attr("draggable", false);
                attrs.$observe("uiDraggable", function (newValue) {
                    element.attr("draggable", newValue);
                });
                var dragData = "";
                scope.$watch(attrs.drag, function (newValue) {
                    dragData = newValue;
                });
                element.bind("dragstart", function (e) {
                    var sendData = angular.toJson(dragData);
                    var sendChannel = attrs.dragChannel || "defaultchannel";
                    e.dataTransfer.setData("Text", sendData);
                    $rootScope.$broadcast("ANGULAR_DRAG_START", sendChannel);

                });

                element.bind("dragend", function (e) {
                    var sendChannel = attrs.dragChannel || "defaultchannel";
                    $rootScope.$broadcast("ANGULAR_DRAG_END", sendChannel);
                    if (e.dataTransfer && e.dataTransfer.dropEffect !== "none") {
                        if (attrs.onDropSuccess) {
                            var fn = $parse(attrs.onDropSuccess);
                            scope.$apply(function () {
                                fn(scope, {$event: e});
                            });
                        }
                    }
                });


            };
        }
    ])
    .directive("uiOnDrop", [
        '$parse',
        '$rootScope',
        function ($parse, $rootScope) {
            return function (scope, element, attr) {
                var dropChannel = "defaultchannel";
                var dragChannel = "";
                var dragEnterClass = attr.dragEnterClass || "on-drag-enter";
                var dragHoverClass = attr.dragHoverClass || "on-drag-hover";

                function onDragOver(e) {

                    if (e.preventDefault) {
                        e.preventDefault(); // Necessary. Allows us to drop.
                    }

                    if (e.stopPropagation) {
                        e.stopPropagation();
                    }
                    e.dataTransfer.dropEffect = 'move';
                    return false;
                }

                function onDragEnter(e) {
                    $rootScope.$broadcast("ANGULAR_HOVER", dropChannel);
                    element.addClass(dragHoverClass);
                }

                function onDrop(e) {
                    if (e.preventDefault) {
                        e.preventDefault(); // Necessary. Allows us to drop.
                    }
                    if (e.stopPropagation) {
                        e.stopPropagation(); // Necessary. Allows us to drop.
                    }
                    var data = e.dataTransfer.getData("Text");
                    data = angular.fromJson(data);
                    var fn = $parse(attr.uiOnDrop);
                    scope.$apply(function () {
                        fn(scope, {$data: data, $event: e});
                    });
                    element.removeClass(dragEnterClass);
                }


                $rootScope.$on("ANGULAR_DRAG_START", function (event, channel) {
                    dragChannel = channel;
                    if (dropChannel === channel) {

                        element.bind("dragover", onDragOver);
                        element.bind("dragenter", onDragEnter);

                        element.bind("drop", onDrop);
                        element.addClass(dragEnterClass);
                    }

                });



                $rootScope.$on("ANGULAR_DRAG_END", function (e, channel) {
                    dragChannel = "";
                    if (dropChannel === channel) {

                        element.unbind("dragover", onDragOver);
                        element.unbind("dragenter", onDragEnter);

                        element.unbind("drop", onDrop);
                        element.removeClass(dragHoverClass);
                        element.removeClass(dragEnterClass);
                    }
                });


                $rootScope.$on("ANGULAR_HOVER", function (e, channel) {
                    if (dropChannel === channel) {
                        element.removeClass(dragHoverClass);
                    }
                });


                attr.$observe('dropChannel', function (value) {
                    if (value) {
                        dropChannel = value;
                    }
                });


            };
        }
    ])
    .directive('weatherInputs', function() {
        return {
            templateUrl: 'views/forms/primary-energy-inputs.html'
        };
    })
    .directive('secondaryInputs', function() {
        return {
            templateUrl: 'views/forms/secondary-energy-inputs.html'
        };
    })
    .directive('datePicker', function() {
        return {
            templateUrl: 'views/forms/date-picker-inputs.html'
        };
    })
    .directive('economicResourceInputs', function() {
        return {
            templateUrl: 'views/forms/economic-inputs.html'
        };
    })
    .controller('ProjectResourcesCtrl', [
        '$scope',
        'project',
        '$location',
        'simulationResource',
        'resourceResource',
        function(
            $scope,
            project, 
            $location,
            simulationResource,
            resourceResource
        ){

            $scope.editMode = false;
            $scope.possibleIntervals = ['15', '30', '45', '60', '120'];
            $scope.possibleElements = ['Element X', 'Element Y'];
            $scope.possibleTimeIntervals = ['day/week', 'month', 'year'];
            $scope.possibleTimeSteps = ['X', 'Y', 'Z'];
            $scope.chart = {'chartElement':'', 'chartInterval': '30', 'chartStep': '', 'startDate': new Date(),
                periodLength:'day/week', 'scaling_factor':1, 'scaling_offset':0,
                name: 'default', description:"default"
            };
            $scope.isUpdateFilters = false;
            $scope.specificType = {specific_type: '', restriction: {capacity:'', volume:''}};
            $scope.project = project.project;
            var myHash = location.hash.split('/');
            var projectId = myHash[2];
            $scope.uploadEPWSuccessful = false;
            $scope.project.project_id = projectId;

            var  initDefaultChart = function() {
                return  $scope.chart = {'chartElement':'', 'chartInterval': '30', 'chartStep': '', 'startDate': new Date(),
                    periodLength:'day/week', 'scaling_factor':1, 'scaling_offset':0,
                    name: 'default', description:"default"
                };
            };

            simulationResource.get({id: projectId}).$promise
                .then(
                    function (data) {
                        $scope.project.resources = data.project.resources;
                    }
                );
            $scope.saveDetails = function () {
                $scope.project = project.project;
                simulationResource.update({ id:projectId }, project).$promise
                    .then(
                        function (data) {
                            //console.log(data);
                            //$scope.project.system = data.project.system;
                        });
            };
           $scope.nodeSelection = '';
            $scope.resourcesTab = [
                {
                    id: "physical",
                    label: "Physical",
                    color: "#3a8e98",
                    showCategories: true,
                    categories:[
                        {   label: "Physical - Primary",
                            id: "primary",
                            color: "#81ca9c",
                            showItems:true,
                            items:[
                                {
                                    label: "solar",
                                    id: "solar",
                                    type: 'primary',
                                    enabled: true
                                },
                                {
                                    label: "temperature",
                                    id: "temperature",
                                    type: 'primary',
                                    enabled: true
                                },
                                {
                                    label: "wind",
                                    id: "wind",
                                    type: 'primary',
                                    enabled: true
                                }
                            ]
                        },
                        {   label: "Physical - Secondary",
                            id: "secondary",
                            color: "#6596aa",
                            items:[
                                {
                                    label: "electricity",
                                    id: "electricity",
                                    enabled: true
                                },
                                {
                                    label: "fuels",
                                    id: "fuels",
                                    enabled: true
                                }
                            ]
                        }
                    ]
                },
                {
                    id: "economic",
                    label: "economic",
                    color: "#f1592a",
                    categories:[
                        {   label: "Economic - Income",
                            id: "income",
                            color: "#f9b296",
                            items:[
                                {
                                    label: "renewable",
                                    id: "income",
                                    enabled: true
                                },
                                {
                                    label: "cogeneration",
                                    id: "income",
                                    enabled: true
                                }
                            ]
                        }
                    ]
                }
            ];
            $scope.selectionOptions = [
                {
                    categories:[
                        {
                            label:'solar',
                            items:[
                                {item: 'Global Horizontal Irradiance', id:'GH', uom:'[W/m2]'},
                                {item: 'Direct Horizontal Irradiance', id:'DH', uom:'[W/m2]'},
                                {item: 'Diffuse Horizontal Irradiance', id:'FH', uom: '[W/m2]'}
                            ]
                        },
                        {
                            label:'temperature',
                            items:[
                                {item: 'Dew Bulb Temperature (ambient air temperature)', id:'DB', uom:'[°C]'},

                            ]
                        },
                        {
                            label:'wind',
                            items:[
                                {item: 'Wind speed', id:'WS', uom:'[m/s]'},
                            ]
                        },
                        {
                            label:'electricity',
                            items:[
                                {item: 'Electricity', id:'electricity', uom:'[kW]'},
                            ]
                        },
                        {
                            label:'fuels',
                            items:[
                                {item: 'Fuel oil', id:'fuel_oil', uom:'[kW]'},
                                {item: 'Natural gas', id:'natural_gas', uom:'[m3/h]'}
                            ]
                        },
                        {
                            label:'renewable',
                            items:[
                                {item: 'solar', id:'solar', uom:'[kW]'},
                                {item: 'wind', id:'wind', uom:'[m3/h]'}
                            ]
                        },
                        {
                            label:'cogeneration',
                            items:[
                                {item: 'Co Electricity', id:'co_electricity', uom:'[kW]'}
                            ]
                        }
                    ]
                }];
            $scope.sidebarTabToggle = function(tab){
                tab.showCategories = !tab.showCategories;
            };
            $scope.sidebarComponentToggle = function(component){
                component.showItems = !component.showItems;
            };
            // sets the default
            $scope.selectedItem =  {
                label: "solar",
                id: "solar",
                type: 'primary',
                enabled: true
            };

            // tab panel for primary resources
            $scope.selectItem = function (item) {
                $scope.selectedItem = item;
                console.log($scope.selectedItem);
                if ($scope.selectedItem.type == 'primary') {
                    $scope.selectedResources = primaryResources[item.id];
                    $scope.chartData = getChartData();
                }
            };

            // change the view after primaryResources nav
            $scope.changePrimaryChartView = function(option){
                $scope.selectedResources = primaryResources[option];
                $scope.chartData = getChartData();
            };
            var primaryResources = angular.fromJson($scope.project.resources.physical.primary);
            var primaryResources = $scope.project.resources.physical.primary;
            var initSelectedResources = function(){
                if($scope.selectedItem.type && $scope.selectedItem.type == 'primary') {
                    return primaryResources[$scope.selectedItem.id];
                }
                return null;
            };

            $scope.cal_distance = function(p0, p1){
                return Math.sqrt(Math.pow((p0[0] - p1[0]),2) + Math.pow((p0[1] - p1[1]),2))
            };
            $scope.matching_coordinates = [];
            $scope.finder = function(cmp, arr, attr, match) {
                var val = arr[0][attr];
                var match = arr[0][match];
                for(var i=1;i<arr.length;i++) {
                    val = cmp(val, arr[i][attr])

                }
                for(var i=1;i<arr.length;i++){
                    if (arr[i][attr] == val){
                        return arr[i];
                    }
                }

            };
            $scope.renderWeatherData= function() {
                resourceResource.all().$promise.then(function (results) {
                    $scope.lookup_dict = JSON.parse(results[0].coordinates_lookup);
                    for (var value in $scope.lookup_dict) {
                        var dist = $scope.cal_distance(
                            [$scope.project.coordinates[1], $scope.project.coordinates[0]]
                            , $scope.lookup_dict[value]['coordinates']
                        );
                        if (dist < 10) {
                            var empty = {
                                'distance': dist,
                                'coordinates': $scope.lookup_dict[value]['coordinates']
                            };
                            $scope.matching_coordinates.push(empty)
                        }
                    }
                    $scope.subtractMinutes = function(date, minutes) {
                        return new Date(date.getTime() - minutes*60000);
                    };

                    var matched_pairs = $scope.finder(Math.min,
                        $scope.matching_coordinates,
                        'distance', 'coordinates'
                    );
                    $scope.distance_from_site = matched_pairs.distance;

                    for (var val in $scope.lookup_dict) {
                        if ($scope.lookup_dict[val].coordinates == matched_pairs.coordinates) {
                            var la = $scope.lookup_dict[val].epw_download.replace("<a href=", "");
                            var url = la.replace(">Download Weather File</a>", "")
                            $scope.download_url = url;
                            resourceResource.get({id: projectId, web_address: url}).$promise.then(
                                function (data) {
                                    $scope.onLoad(data.data);
                                    $scope.loadingFinished = true;
                                }
                            );
                        }
                    }
                });
            }

            var selectResource = function(resourceId){
                $scope.selectedResources = primaryResources[resourceId];
                $scope.chartData = getChartData();
            };

            $scope.selectedResources = initSelectedResources();

            // all related to uploading file
            $scope.onLoad = function($file){
                initValues($file);
                primaryResources.file = $file;
                $scope.uploadEPWSuccessful = true;
                $scope.project.resources.physical.primary.file =  primaryResources.file;
                $scope.saveDetails();
                $scope.chartData = getChartData();
            };
            $scope.deleteEPWFile = function () {
                $scope.project.resources.physical.primary.file =  '';
                primaryResources.file = '';
                $scope.saveDetails();
                $scope.uploadEPWSuccessful = false;
            };

            $scope.onProgress = function($total, $loaded){
            };

            $scope.onError = function($error){
                console.error($error);
            };
            var initValues = function (file) {
                var data = file.split(/\r?\n/);
                var dryBulbValues = [];
                var gloHorzRadValues = [];
                var windSpdValues = [];
                data.slice(8).forEach(function (x, i) {

                    if(i%6 === 0) {
                        var row = x.split(',');
                        var date = Date.UTC(2015, row[1] - 1, row[2], row[3]);
                        var dryBulb = parseFloat(row[6]);
                        var gloHorzRad = parseFloat(row[13]);
                        var windSpd = parseFloat(row[21]);

                        dryBulbValues.push([date, dryBulb]);
                        gloHorzRadValues.push([date, gloHorzRad]);
                        windSpdValues.push([date, windSpd]);
                    }
                });

                primaryResources.wind.data          = windSpdValues;
                primaryResources.temperature.data   = dryBulbValues;
                primaryResources.solar.data         = gloHorzRadValues;
            };
            $scope.rc = {};
            var getChartData = function(){
                return [
                    {
                        key:    $scope.selectedItem.label,
                        color:  $scope.selectedResources.chartColor,
                        values: $scope.selectedResources.data
                    }
                ];
            };
            $scope.chartData = getChartData();
            $scope.chartOptions = {
                chart: {
                    type: 'lineWithFocusChart',
                    height: 450,
                    margin : {
                        top: 20,
                        right: 20,
                        bottom: 30,
                        left: 70
                    },
                    x: function(d){return d[0];},
                    y: function(d){return d[1];},
                    duration: 0,
                    useInteractiveGuideline: true,
                    xAxis: {
                        tickFormat: function(d) {
                            return d3.time.format('%d %b')(new Date(d * 1000));
                        }
                    },
                    yAxis: {
                        axisLabel: '',
                        axisLabelDistance: 11,
                        tickFormat: function(d){
                            return d3.format(',.2f')(d);
                        }
                    },
                    x2Axis: {
                        tickFormat: function(d){
                            return d3.time.format('%d %b')(new Date(d));
                        }
                    },
                    y2Axis: {
                        tickFormat: function(d){
                            return d3.format(',.2f')(d);
                        }
                    }
                }
            };
            var initManualDefData = function () {
                return  $scope.manualDefSingleElementData = [
                    {"key": "Series 1", "values": []
                    }
                ];

            }
            $scope.manualDefData = [
                {"key": "Series 1", "values": []
                }
            ];

            $scope.updateSingleElementData = function (time_span) {
                initManualDefData();
                $scope.manualDefSingleElementData[0]['values'] = [];
                $scope.isUpdateFilters = true;
                for (var i=0; i< (1000/time_span); i++){
                    $scope.manualDefSingleElementData[0]['values'].push([$scope.chart.startDate.getTime() - time_span*60000*i , 100]);
                }
                console.log($scope.manualDefSingleElementData);
            };
            $scope.updateFilters = function (time_span) {
                $scope.manualDefData[0]['values'] = [];
                $scope.isUpdateFilters = true;
                for (var i=0; i< (1000/time_span); i++){
                    $scope.manualDefData[0]['values'].push([$scope.chart.startDate.getTime() - time_span*60000*i , 100]);
                }
            };

            $scope.counter = 0;
            $scope.addSingleResourcesToTotalResources= function(resourceBlock, data, label){
                resourceBlock.data = data;
                resourceBlock.id =  $scope.project.resources.physical.primary.manual_definition.total_resources.length;
                resourceBlock.is_processed = false;
                $scope.project.resources.physical.primary.manual_definition.total_resources.push(resourceBlock);
                $scope.saveDetails();
                initDefaultChart();
                initManualDefData();
            };
            $scope.plottedMultiples=[
                {"key": "Series 1", "values": []
                }
                ];
            $scope.createMultipleItemsBody = function (data) {
                var jsonParsed = JSON.parse(data);
                for (var set in jsonParsed.data['values']) {
                    $scope.plottedMultiples[0]['values'].push(jsonParsed.data['values'][set]);
                }
                $scope.showMultiple = true;
            };
            $scope.men = [
                'default1',
                'default2',
                'default3',
                'default'
            ];

            $scope.women = [
                'next'
            ];


            $scope.addText = "";


            $scope.dropSuccessHandler = function($event,index,array){

                array.splice(index,1);
            };

            $scope.onDrop = function($event,$data,array){
                console.log(array);
                array.push($data);
            };


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
        }]);