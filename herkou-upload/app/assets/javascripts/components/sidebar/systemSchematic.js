angular.module('iMode')

    .controller('systemSchematic', [
        '$scope',
        'project',
        function($scope, project) {
            $scope.myData = {
                        "name": "flare",
                        "children": [
                            {
                            "name": "Node 1",
                            "children": [{
                                "name": "cluster",
                                "children": [{
                                        "name": "Component1",
                                        "size": 20
                                    }, {
                                        "name": "Component2",
                                        "size": 10
                                    }, {
                                        "name": "",
                                        "children": [{
                                            "name": "Loads",
                                            "size": 3
                                        }, {
                                            "name": "Resources",
                                            "size": 3

                                        }]
                                    },
                                    {
                                        "name": "",
                                        "children": [{
                                            "name": "Loads",
                                            "size": 3
                                        }, {
                                            "name": "Resources",
                                            "size": 3

                                        }]
                                    }

                                ]

                            }]

                        }]
                    };

        }
    ])

    .directive('barsChart', function($parse) {
        var directiveDefinitionObject = {
            restrict: 'E',
            replace: false,
            scope: {
                data: '=chartData'
            },
            link: function(scope, element, attrs) {

                
                scope.$watch('data', function (newVal, oldVal) {
                        console.log(newVal);
                        scope.injectionData = newVal;
                        return newVal;
                });
                
                var chart = d3.select(element[0]);
                var margin = 10,
                    padding = 2,
                    diameter = 380,
                    root = flareData();
                    console.log(scope.injectionData)

                var color = d3.scale.linear()
                    .domain([0, depthCount(root)])
                    .range(["hsl(214, 28%, 60%)", "hsl(217, 65%, 81%)"])
                    .interpolate(d3.interpolateHcl);

                var pack = d3.layout.pack()
                    .padding(padding)
                    .size([diameter, diameter])
                    .value(function(d) {
                        return d.size;
                        //return 100;
                    }),
                    arc = d3.svg.arc().innerRadius(0),
                    pie = d3.layout.pie;

                var svg = d3.select("#hierachy").append("svg")
                    .attr("width", diameter)
                    .attr("height", diameter)
                    .append("g")
                    .attr("transform", "translate(" + diameter / 2 + "," + diameter / 2 + ")");

                var focus = root,
                    nodes = pack.nodes(root),
                    //nodes = svg.selectAll("g.node")
                    //.data(pack.nodes(root)),
                    view;


                var circle = svg.selectAll("circle")
                    .data(nodes)
                    .enter().append("circle")
                    .attr("class", function(d) {
                        return d.parent ? d.children ? "node" : "node node--leaf" : "node node--root";
                    })
                    .style("fill", function(d) {
                        return d.children ? color(d.depth) : null;
                    })
                    .on("click", function(d) {
                        if (focus !== d) zoom(d), d3.event.stopPropagation();
                    });
                var text = svg.selectAll("text")
                    .data(nodes)
                    .enter().append("text")
                    .attr("class", "label")
                    .style("fill-opacity", function(d) {
                        return d.parent === root ? 1 : 0.3;
                    })
                    // .style("display", function(d) {
                    //     return d.parent === root ? null : "none";
                    // })
                    .text(function(d) {
                        return d.name;
                    });

                var node = svg.selectAll("circle,text");

                d3.select("body")
                    .on("click", function() {
                        zoom(root);
                    });

                zoomTo([root.x, root.y, root.r * 2 + margin]);

                function zoom(d) {
                    var focus0 = focus;
                    focus = d;

                    var transition = d3.transition()
                        .duration(d3.event.altKey ? 7500 : 750)
                        .tween("zoom", function(d) {
                            var i = d3.interpolateZoom(view, [focus.x, focus.y, focus.r * 2 + margin]);
                            return function(t) {
                                zoomTo(i(t));
                            };
                        });

                    transition.selectAll("text")
                }

                function zoomTo(v) {
                    var k = diameter / v[2];
                    view = v;
                    node.attr("transform", function(d) {
                        return "translate(" + (d.x - v[0]) * k + "," + (d.y - v[1]) * k + ")";
                    });
                    circle.attr("r", function(d) {
                        return d.r * k;
                    });
                }
                function depthCount(branch) {
                    if (!branch.children) {
                        return 1;
                    }
                    return 1 + d3.max(branch.children.map(depthCount));
                }

                d3.select(self.frameElement).style("height", diameter + "px");

                function flareData() {
                    return {
                        "name": "flare",
                        "children": [{
                            "name": "Node 1",
                            "children": [{
                                "name": "cluster",
                                "children": [{
                                        "name": "Component1",
                                        "size": 20
                                    }, {
                                        "name": "Component2",
                                        "size": 10
                                    }, {
                                        "name": "",
                                        "children": [{
                                            "name": "Loads",
                                            "size": 3
                                        }, {
                                            "name": "Resources",
                                            "size": 3

                                        }]
                                    },
                                    {
                                        "name": "",
                                        "children": [{
                                            "name": "Loads",
                                            "size": 3
                                        }, {
                                            "name": "Resources",
                                            "size": 3

                                        }]
                                    }

                                ]

                            }]

                        }]
                    }
                }

                chart.append("div").attr("class", "chart")
                    .selectAll('div')
                    .data(scope.data).enter().append("div")
                    .transition().ease("elastic")
                    .style("width", function(d) {
                        return d + "%";
                    })
                    .text(function(d) {
                        return d + "%";
                    });
            }
        };
        return directiveDefinitionObject;
    });