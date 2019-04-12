'use strict';

angular.module('iMode')
    .controller('manualDef', [
        '$scope',
        function (
            $scope
                ) {
                // 15 minutes points => 
                $scope.data =
                    [0, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4,216.4, 194.1, 95.6, 54.4,216.4, 194.1, 95.6, 54.4, 54.4,216.4, 194.1, 95.6, 54.4, 54.4,216.4, 194.1, 95.6, 54.4,216.4, 194.1, 95.6, 54.4, 54.4,216.4, 194.1, 95.6, 54.4,216.4, 194.1, 95.6, 54.4, 54.4,216.4, 194.1, 95.6, 54.4,216.4, 194.1, 95.6, 54.4, 54.4,216.4, 194.1, 95.6, 54.4,216.4, 194.1, 95.6, 54.4, 54.4,216.4, 194.1, 95.6, 54.4,216.4, 194.1, 95.6, 54.4, 54.4,216.4, 194.1, 95.6, 54.4,216.4, 194.1, 95.6, 54.4, 54.4,216.4, 194.1, 95.6, 54.4,216.4, 194.1, 95.6, 54.4, 54.4,216.4];
                var chart = new Highcharts.Chart({
                chart: {
                    renderTo: 'container',
                    animation: false,
                    // where would be the zoom
                    zoomType: 'x',
                    width:500,
                },
                colors: ['#2b2e39', '#aec7e8', '#89A54E', '#80699B', '#3D96AE',
                    '#DB843D', '#92A8CD', '#A47D7C', '#aec7e8'],
                title: {
                    text: ''
                },
                xAxis: {
                    categories: ['Week 1 ', 'Week 2', 'Week 3', 'Week 4']
                },
                maxZoom: 0.3,
                plotOptions: {
                    series: {
                        point: {
                            events: {

                                drag: function (e) {
                                    // Returning false stops the drag and drops. Example:
                                    /*
                                    if (e.newY > 300) {
                                        this.y = 300;
                                        return false;
                                    }
                                    */

                                    // $('#drag').html(
                                    //     'Dragging <b>' + this.series.name + '</b>, <b>' + this.category + '</b> to <b>' + Highcharts.numberFormat(e.y, 2) + '</b>');
                                },
                                drop: function () {
                                    // $('#drop').html(
                                    //     'In <b>' + this.series.name + '</b>, <b>' + this.category + '</b> was set to <b>' + Highcharts.numberFormat(this.y, 2) + '</b>');
                                }
                            }
                        },
                        stickyTracking: false
                    },
                    column: {
                        stacking: 'normal'
                    },
                    line: {
                        cursor: 'ns-resize'
                    }
                },

                tooltip: {
                    yDecimals: 2
                },

                series: [
                    {
                    data: $scope.data,
                    draggableY: true
                }]

            });

        }
        ]
);

