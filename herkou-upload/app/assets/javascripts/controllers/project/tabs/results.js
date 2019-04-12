'use strict';

angular.module('iMode')

    .controller('ProjectResultsCtrl', [
        '$rootScope',
        '$scope',
        '$routeParams',
        'projectResults',
        'simulationResource',
        'project',
        '$location',
        function($rootScope, $scope, $routeParams, projectResults, simulationResource, project){

            $scope.unsavedProject = $routeParams.projectId == "new";
            $scope.project = project.project;

            var myHash = location.hash.split('/');
            var projectId = myHash[2];
            $scope.project.project_id = projectId;
            /*
             * Results
             */
            $scope.resultTabs = [
                {
                    id: "components",
                    label: "Components view"
                },
                {
                    id: "domains",
                    label: "Domains"
                },
                {
                    id: "summary",
                    label: "Summary"
                },
                {
                    id: "sinksSources",
                    label: "Sinks & sources"
                }
            ];

            var showResults = false;
            var currentTab = $scope.resultTabs[0];

            $scope.isTabSelected = function(tab){
                return (currentTab.id === tab.id);
            };

            $scope.selectTab = function(tab){
                currentTab = tab;
            };

            $scope.startSimulation = function () {
                $rootScope.showSpinner = true;
                for (var keys in  $scope.project) {
                    $scope.project[keys] = JSON.stringify($scope.project[keys]);
                    }
                    simulationResource.get({id: projectId}).$promise.then(
                        function(data) {
                            $scope.results = data.results;

                            if ($scope.results==null) {
                                $scope.errorMessage = "simulation data unavailable for project"
                                return $scope.errorMessage;
                            }

                            $scope.results = JSON.parse($scope.results);
                            console.log(  $scope.results );
                            if ($scope.results.components!=null){
                                initComponentResults();
                            }
                            if ($scope.results.domain!=null) {
                                initDomainResults();
                            }
                            //initComponentResults();
                            // @todo: need to fix the summary

                        },
                        function(err){
                            console.error(err);
                        })
                    .finally(function() {
                        $rootScope.showSpinner = false;
                        showResults = true;

                });
            };

            /*Results Details*/

            $scope.showEmptyResults = function () {
                return !showResults;
            };

            $scope.showComponentsResults = function(){
                return (currentTab.id === "components" && showResults);
            };

            $scope.showDomainsResults = function(){
                return (currentTab.id === "domains" && showResults);
            };

            $scope.showSummaryResults = function () {
                return (currentTab.id === "summary" && showResults);
            };

            $scope.showSinksAndCourcessResults = function () {
                return (currentTab.id === "sinksSources" && showResults);
            };

            /*
             * Components
             */
            var selectedComponent = null;

            var initComponentResults = function(){
                selectedComponent = $scope.results.components[0];

                $scope.componentsChartOptions   = getComponetsChart('[kW] [KWh]');
                $scope.componentsChartOptions2  = getComponetsChart('%');

                $scope.componentsChartData  = $scope.results.components[0].data;
                $scope.componentsChartData2 = $scope.results.components[0].data2;
            };

            $scope.isComponentSelected = function(component){
                return (selectedComponent.id === component.id);
            };

            $scope.selectComponent = function(component) {
                selectedComponent = component;
                $scope.chartTitle = component.label;
                $scope.componentsChartData = selectedComponent.data;
                $scope.componentsChartData2 = selectedComponent.data2;

                // $scope.rcComponents.api.refresh();
                // $scope.rcComponents2.api.refresh();
            };

            $scope.rcComponents = {};
            $scope.rcComponents2 = {};

            var getComponetsChart = function(measureUnit){
                return {
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
                                return d3.time.format('%d %b %Y')(new Date(d *1000));
                            }
                        },
                        yAxis: {
                            axisLabel: measureUnit,
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
                }
            };
            /*
             * Domains
             */
            var selectedDomain = null;

            var initDomainResults = function(){
                selectedDomain = $scope.domainsWithData()[0];
                $scope.domainChartData = $scope.domainsWithData()[0].data;
            };

            $scope.domainsWithData = function () {
                return $scope.results.domains.filter(function (d) {
                    return d.data.length > 0;
                })
            };

            $scope.isDomainSelected = function(domain){
                return (selectedDomain.id === domain.id);
            };

            $scope.selectDomain = function(domain) {
                selectedDomain = domain;
                $scope.domainChartData = selectedDomain.data;
                $scope.rcDomain.api.refresh();
            };

            $scope.rcDomain = {};

            $scope.domainsChartOptions = {
                chart: {
                    type: 'lineWithFocusChart',
                    height: 450,
                    margin : {
                        top: 20,
                        right: 70,
                        bottom: 30,
                        left: 70
                    },
                    x: function(d){return d[0];},
                    y: function(d){return d[1];},
                    duration: 0,
                    xAxis: {
                        tickFormat: function(d) {
                            
                            return d3.time.format('%d %b %Y')(new Date(d *1000));
                        }
                    },
                    yAxis: {
                        axisLabel: '[kW] [KWh]',
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

            /*
             * Summary
             */
            var getSummaryChart = function (res, height) {

                return {
                    chart: {
                        type: 'multiBarHorizontalChart',
                        margin : {
                            top: 0,
                            right: 60,
                            bottom: 30,
                            left: 120
                        },
                        height: height,
                        x: function(d){return d.label;},
                        y: function(d){return d.value;},
                        showControls: false,
                        showValues: false,
                        duration: 50,
                        xAxis: {
                            showMaxMin: false
                        },
                        yAxis: {
                            axisLabel: res.axisLabel,
                            axisLabelDistance: -10,
                            tickFormat: function(d){
                                return d3.format(',.2f')(d);
                            }
                        }
                    }
                }
            };

            var summaryItemIndex = null;
            $scope.summaryBigItem = null;

            $scope.summaryCharts = {};
            $scope.summaryBigCharts = {};

            //fill charts
            var initSummaryResults = function () {
                    $scope.results.summary.forEach(function (x) {
                    $scope.summaryCharts[x.id]      = getSummaryChart(x, 260);
                    $scope.summaryBigCharts[x.id]   = getSummaryChart(x, 400);
                });
            };

            $scope.showSummaryOverview = function(){
                return (summaryItemIndex == null);
            };

            $scope.selectSummaryBigChart = function (index) {
                summaryItemIndex = index;
                $scope.summaryBigItem = $scope.results.summary[index];
            };

            $scope.selectSummaryOverview = function () {
                summaryItemIndex = null;
                $scope.summaryBigItem = null;
            };

            $scope.summaryNextChart = function(){
                var numOfElements = $scope.results.summary.length;
                var index = (summaryItemIndex+1)%numOfElements;
                $scope.selectSummaryBigChart(index)
            };

            $scope.summaryPrevChart = function(){
                var numOfElements = $scope.results.summary.length;
                var index = (summaryItemIndex+numOfElements-1)%numOfElements;
                $scope.selectSummaryBigChart(index)
            };

            /*
             * SinksSources
             */
            $scope.sinksSourceChartOptions = {
                chart: {
                    type: 'pieChart',
                    margin : {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0
                    },
                    height: 250,
                    x: function(d){return d.key;},
                    y: function(d){return d.value;},
                    showLabels: false,
                    duration: 50,
                    labelThreshold: 0.01,
                    labelSunbeamLayout: true,
                    legend: {
                        margin: {
                            top: 5,
                            right: 35,
                            bottom: 5,
                            left: 0
                        }
                    }
                }
            };
        }]);