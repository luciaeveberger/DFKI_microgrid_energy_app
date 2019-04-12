
angular.module('iMode')
    .factory('project', [
        '$resource',
        function(){
        var service = {
            project: {}
        };
        service.newProject = function(){
            var empty = {
                project_id:"",
                title: "Default Project Title",
                resources:{
                    physical: {
                        primary: {
                            weather_selection: {type_selected: 'weatherApi'},
                            file: null,
                            solar: {
                                label: 'Solar',
                                name: '',
                                description: '',
                                chartColor: "#aec7e8",
                                measureUnit: "Wh/m2",
                                data: []
                            },
                            temperature: {
                                label: 'Temperature',
                                name: '',
                                description: '',
                                chartColor: "#aec7e8",
                                measureUnit: "C",
                                data: []
                            },
                            wind: {
                                label: 'Wind',
                                name: '',
                                description: '',
                                chartColor: "#aec7e8",
                                measureUnit: "m/s",
                                data: []
                            },
                            manual_definition: {
                                single_element: {
                                    name: '<default>',
                                    description: '<default>',
                                    period_length: 'day/week',
                                    template: '',
                                    scaling_factor: 1.25,
                                    scaling_offset: 0,
                                    data:{}
                                },
                                total_resources: [],
                            }
                        },
                        secondary: {
                            electricity: {
                                    electricity: {
                                        specific_types: 'blah',
                                        restriction: {
                                            capacity: {val: '', uom: 'kW'},
                                            volume: {val: '', uom: 'kWh/a'}
                                        },
                                        price: {
                                            base_price: {val: '', uom: 'EUR/a'},
                                            operation_price: {val: '0', uom: 'EUR/kWH'}
                                        },
                                        global_tariff_type:
                                            {
                                                tariff_type:'',
                                                selection_group: 'secondary_energy',
                                                upper_peak_power_boundary:{val:0, uom:'kW'},
                                                upper_boundary_cummulated_energy:{val:0, uom:'kWh'},
                                                base_cost:{val:10, uom:'kWh'},
                                                operational_cost:{val:0.1, uom:'kWh'}
                                            }
                                    }
                                },
                            fuels: {
                                fuel_oil: {
                                    specific_types: 'blah',
                                    restriction: {
                                        capacity: {val: '', uom: 'kW'},
                                        volume: {val: '', uom: 'kWh/a'}
                                    },
                                    price: {
                                        base_price: {val: '', uom: 'EUR/a'},
                                        operation_price: {val: '0', uom: 'EUR/kWH'}
                                    },
                                    conversion_factor:{val:0, uom:'kWh/m3'},
                                    global_tariff_type:
                                        {
                                            tariff_type:'',
                                            selection_group: 'secondary_energy',
                                            upper_peak_power_boundary:{val:0, uom:'kW'},
                                            upper_boundary_cummulated_energy:{val:0, uom:'kWh'},
                                            base_cost:{val:10, uom:'kWh'},
                                            operational_cost:{val:0.1, uom:'kWh'}
                                        }
                                },
                                natural_gas: {
                                    specific_types: 'blah',
                                    restriction: {
                                        capacity: {val: '', uom: 'kW'},
                                        volume: {val: '', uom: 'kWh/a'}
                                    },
                                    conversion_factor:{val:0, uom:'kWh/m3'},
                                    price: {
                                        base_price: {val: '', uom: 'EUR/a'},
                                        operation_price: {val: '0', uom: 'EUR/kWH'}
                                    },
                                    global_tariff_type:
                                        {
                                            tariff_type:'',
                                            selection_group: 'secondary_energy',
                                            upper_peak_power_boundary:{val:0, uom:'kW'},
                                            upper_boundary_cummulated_energy:{val:0, uom:'kWh'},
                                            base_cost:{val:10, uom:'kWh'},
                                            operational_cost:{val:0.1, uom:'kWh'}
                                        }
                                }
                            },
                            renewable: {
                                wind: {
                                    specific_types: '',
                                    restriction: {
                                        capacity: {val: '', uom: 'kW'},
                                        volume: {val: '', uom: 'kWh/a'}
                                    },
                                    price: {
                                        base_price: {val: '', uom: 'EUR/a'},
                                        operation_price: {val: '0', uom: 'EUR/kWH'}
                                    },
                                    conversion_factor:{val:0, uom:'kWh/m3'},
                                    global_tariff_type:
                                        {
                                            tariff_type:'',
                                            selection_group: 'secondary_energy',
                                            upper_peak_power_boundary:{val:0, uom:'kW'},
                                            upper_boundary_cummulated_energy:{val:0, uom:'kWh'},
                                            base_cost:{val:10, uom:'kWh'},
                                            operational_cost:{val:0.1, uom:'kWh'}
                                        }
                                },
                                solar: {
                                    specific_types: '',
                                    restriction: {
                                        capacity: {val: '', uom: 'kW'},
                                        volume: {val: '', uom: 'kWh/a'}
                                    },
                                    conversion_factor:{val:0, uom:'kWh/m3'},
                                    price: {
                                        base_price: {val: '', uom: 'EUR/a'},
                                        operation_price: {val: '0', uom: 'EUR/kWH'}
                                    },
                                    global_tariff_type:
                                        {
                                            tariff_type:'',
                                            selection_group: 'secondary_energy',
                                            upper_peak_power_boundary:{val:0, uom:'kW'},
                                            upper_boundary_cummulated_energy:{val:0, uom:'kWh'},
                                            base_cost:{val:10, uom:'kWh'},
                                            operational_cost:{val:0.1, uom:'kWh'}
                                        }
                                }
                            },
                            cogeneration: {
                                co_electricity: {
                                    specific_types: 'blah',
                                    restriction: {
                                        capacity: {val: '', uom: 'kW'},
                                        volume: {val: '', uom: 'kWh/a'}
                                    },
                                    price: {
                                        base_price: {val: '', uom: 'EUR/a'},
                                        operation_price: {val: '0', uom: 'EUR/kWH'}
                                    },
                                    conversion_factor:{val:0, uom:'kWh/m3'},
                                    global_tariff_type:
                                        {
                                            tariff_type:'',
                                            selection_group: 'secondary_energy',
                                            upper_peak_power_boundary:{val:0, uom:'kW'},
                                            upper_boundary_cummulated_energy:{val:0, uom:'kWh'},
                                            base_cost:{val:10, uom:'kWh'},
                                            operational_cost:{val:0.1, uom:'kWh'}
                                        }
                                },
                            },
                        }
                    }
                },
                loads: {
                    electricity:{
                        IN:{type_selected:'upload', file_upload:''},
                        RS:{type_selected:'upload', file_upload:''},
                        CM:{type_selected:'upload', file_upload:''},
                        IN:{type_selected:'upload', file_upload:''},
                        UN:{type_selected:'upload', file_upload:''}
                    },
                    heat:{
                        IN:{type_selected:'upload', file_upload:''},
                        RS:{type_selected:'upload', file_upload:''},
                        CM:{type_selected:'upload', file_upload:''},
                        IN:{type_selected:'upload', file_upload:''},
                        UN:{type_selected:'upload', file_upload:''}
                    },
                    cooling:{
                        IN:{type_selected:'upload', file_upload:''},
                        RS:{type_selected:'upload', file_upload:''},
                        CM:{type_selected:'upload', file_upload:''},
                        IN:{type_selected:'upload', file_upload:''},
                        UN:{type_selected:'upload', file_upload:''}
                    },
                    manual_power: {
                        name:'',
                        description:'',
                        range:{val:''},
                        time_series:{values:[], t_type:'', period_type:''},
                        power:{
                            val:'', uom:''
                        },
                        price: {
                            base_price: {val: '10', uom: 'EUR/a'},
                            operation_cost: {val: '0.1', uom: 'EUR/kWH'}
                        }
                    }
                },
                system:{
                    energyDomain:
                        [
                            {
                                id: 0,
                                domain: {
                                    type_name: 'electricity',
                                    domain_name:'',
                                    description: '',
                                    rated_potential: {electricity_voltage: {val: '0.4', uom: 'kV'}},
                                    allowed_deviation: {val: '100', uom: '%'}
                                }
                            }
                        ],
                    systemNodes:{
                        nodeId: 1,
                        nodes:[
                            {
                                id: 0,
                                name: 'N1 (Default)',
                                description: 'System-internal node components can be installed at.',
                                defaultNode: true,
                                position: {
                                    distanceToSelf:'',
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
                            }
                        ]
                    },
                    networkNodes:
                        {
                            networks:[
                                {
                                    id: 0,
                                    selected_node:"",
                                    selected_node_id:"",
                                    name:'default network',
                                    description:'',
                                    buses: {
                                        electric: true,
                                        heat: true,
                                        cooling: true
                                    },
                                    start_bus: 'electric',
                                    end_bus: 'electric'
                                }
                            ]
                        },
                    generalEconomicFigures:{
                        project_lifetime: {val:'25' , uom: 'years'},
                        fixed_costs:
                            {
                                capex:{value:0, uom:'Euros'},
                                opex:{value:0, uom:'Euros/a'}},
                        rates: {
                                discount_rate: {
                                    base_fraction: {val: 0.8, uom: '%'},
                                    risk_fraction: {val: 0.0, uom: '%'},
                                    reduced_by_inflation: {val: false},
                                    discount_rate_total: {val: 0}
                                },
                                inflation_rate_applied:true,
                                price_change_rate:{val:2, uom:'%'},
                                nominal_discount_rate:{val:8, uom:'%'},
                                inflation_rate:{val:2, uom:'%'},
                                real_discount_rate:{val:4, uom:'%'}
                        },
                       debt_financing:{
                                equity_share:{value:100, uom:'%'},
                                nominal_debt_rate:{value:0, uom:'%'}
                       }
                    }
                },
                components:{
                    electricity:{
                            connection_lines:{
                                DC:{
                                    administrative: {
                                        'name': "",
                                        'description': '',
                                        'component_type': '',
                                        'manufacturer': '',
                                        'manufacturer_name': '',
                                        'manufacturer_description': '',
                                        'discrete_technology': 'discrete'
                                    },
                                    economic: {
                                        'nominal_capacity': 0,
                                        'capacity_minimum':0,
                                        'investment_cost_size_dependent':0,
                                        'capacity_maximum':0,
                                        'lifetime':25,
                                        capex:{
                                            'investment_cost_size_independent':'',
                                            'investment_cost_size_dependent':'',
                                            'replacement_cost_size_independent':'',
                                            'replacement_cost_size_dependent':''
                                        },
                                        opex:{
                                            'investment_linked_operational_cost_size_independent':0,
                                            'investment_linked_operational_cost_size_dependent':0,
                                            'operational_linked_operational_cost_size_independent':0,
                                            'operational_linked_operational_cost_size_dependent':0
                                        }


                                    }
                                },
                                AC:{
                                    administrative: {
                                        'name': 'blank',
                                        'description': '',
                                        'component_type': '',
                                        'manufacturer': '',
                                        'manufacturer_name': '',
                                        'manufacturer_description': '',
                                        'discrete_technology': 'discrete'
                                    },
                                    economic: {
                                        'nominal_capacity': 0,
                                    }
                                }
                            },
                            storing:{
                                LI:{
                                    administrative: {
                                        'name': 'blank',
                                        'description': '',
                                        'component_type': '',
                                        'manufacturer': '',
                                        'manufacturer_name': '',
                                        'manufacturer_description': '',
                                        'discrete_technology': 'discrete'
                                    }
                                },
                                LA:{
                                    administrative: {
                                        'name': 'blank',
                                        'description': '',
                                        'component_type': '',
                                        'manufacturer': '',
                                        'manufacturer_name': '',
                                        'manufacturer_description': '',
                                        'discrete_technology': 'discrete'
                                    }
                                },
                                battery:{
                                    administrative: {
                                        'name': 'blank',
                                        'description': '',
                                        'component_type': '',
                                        'manufacturer': '',
                                        'manufacturer_name': '',
                                        'manufacturer_description': '',
                                        'discrete_technology': 'discrete'
                                    }
                                }
                            },
                            non_dispatchable_generation:{
                                WT:{administrative: {
                                    'name': 'blank',
                                    'description': '',
                                    'component_type': '',
                                    'manufacturer': '',
                                    'manufacturer_name': '',
                                    'manufacturer_description': '',
                                    'discrete_technology': 'discrete'
                                    }
                                },
                                PS:{
                                    administrative: {
                                        'name': 'blank',
                                        'description': '',
                                        'component_type': '',
                                        'manufacturer': '',
                                        'manufacturer_name': '',
                                        'manufacturer_description': '',
                                        'discrete_technology': 'discrete'
                                        }
                                    }
                            },
                            dispatchable_generation:{
                                CV: {
                                    administrative: {
                                        'name': 'blank',
                                        'description': '',
                                        'component_type': '',
                                        'manufacturer': '',
                                        'manufacturer_name': '',
                                        'manufacturer_description': '',
                                        'discrete_technology': 'discrete'
                                    }
                                },
                             FC:
                                     {administrative: {
                                            'name': 'blank',
                                            'description': '',
                                            'component_type': '',
                                            'manufacturer': '',
                                            'manufacturer_name': '',
                                            'manufacturer_description': '',
                                            'discrete_technology': 'discrete'
                                    }
                                },
                                CG:{
                                    administrative: {
                                        'name': 'blank',
                                            'description': '',
                                            'component_type': '',
                                            'manufacturer': '',
                                            'manufacturer_name': '',
                                            'manufacturer_description': '',
                                            'discrete_technology': 'discrete'
                                    }
                                },
                                GC:{
                                    administrative: {
                                        'name': 'blank',
                                        'description': '',
                                        'component_type': '',
                                        'manufacturer': '',
                                        'manufacturer_name': '',
                                        'manufacturer_description': '',
                                        'discrete_technology': 'discrete'
                                    }
                                }
                            }

                        },
                    heating:{},
                    cooling:{},
                },
                settings:{
                    calculationType: 'directOptimization',
                    optimizationObject:[
                        {
                            id: 'economic',
                            label: 'Economic',
                            name: '',
                            description: '',
                            multipleObjective:{
                                share: ''
                            },
                            capex: {
                                considerInGeneral: false,
                                componentDeselected: []
                            },
                            opex: {
                                considerInGeneral: false,
                                componentDeselected: []
                            }
                        },
                        {
                            id: 'environmental',
                            label: 'Environmental',
                            name: '',
                            description: '',
                            multipleObjective:{
                                share: ''
                            },
                            co2Emission:{
                                considerInGeneral: false,
                                componentDeselected: []
                            },
                            primaryEnergy:{
                                considerInGeneral: false,
                                componentDeselected: []
                            }
                        }
                    ]
                },
                coordinates: [52.5200,13.4050],
                timezone:'',
                creation_date:'',
                description:"",
                lastModified: "",
                author: ""};

            angular.copy(empty, service.project);
        };

        service.import = function(file) {
            var projectFile = JSON.parse(file);

            angular.copy(projectFile.project, service.project);
        };

        return service;
    }]);