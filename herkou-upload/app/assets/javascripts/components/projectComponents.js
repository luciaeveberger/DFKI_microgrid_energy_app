angular.module('iMode')

    .factory('projectComponents', [
        function(){

            var service = {};


            var items =
                    [
                        {
                            id: "1",
                            label: "Electric Generator",
                            domains: ["electric"],
                            type: "Generator (reciprocating engine)",
                            subtype: "Internal combustion engine (Diesel), with heat recovery (CHP - Combined heat and power)",
                            manufacturer: "Generic",
                            model: "Generic",
                            description: "Generic generator with heat recovery: A reciprocating engine powered by natural gas (internal-combustion engine) driving an alternator (induction motor), providing AC power and low temperature thermal heat.",
                            economic:{
                                capex:{
                                    initialSpecific: "",
                                    initialOffset: "",
                                    replacementSpecific: "",
                                    replacementOffset: ""
                                },
                                life:{
                                    lifetime: ""
                                },
                                opex:{
                                    reletiveToCapex: ""
                                }
                            },
                            physical:{
                                capacitiesBoundaries:{
                                    firstDefinition:{
                                        minOrFixed: "",
                                        maxStrict: ""
                                    },
                                    secondDefinition:{
                                        minOrFixed: "",
                                        maxStrict: ""
                                    }
                                },
                                boundaries:{
                                    firstOutputType:{
                                        minSpecific: "",
                                        minOffset: "",
                                        maxSpecific: "",
                                        maxOffset: ""
                                    },
                                    secondOutputType:{
                                        minSpecific: "",
                                        minOffset: "",
                                        maxSpecific: "",
                                        maxOffset: ""
                                    }
                                },
                                efficiency:{
                                    firstOutputType:{
                                        direct: "",
                                        gainSpecific: "",
                                        lossOffset: ""
                                    },
                                    secondOutputType:{
                                        relativeToOutput1: "",
                                        direct: "",
                                        gainSpecific: "",
                                        lossOffset: ""
                                    }
                                },
                                gradients:{
                                    upwards: "",
                                    downwards: ""
                                },
                                continuousRuntime:{
                                    min: "",
                                    max: ""
                                }
                            }
                        },
                        {
                            id: "2",
                            label: "Wind Turbine",
                            domains: ["electric"],
                            type: "Wind turbine",
                            subtype: "Small HAWT",
                            manufacturer: "Generic",
                            model: "Generic",
                            description: "A small wind turbine with horizontal axis rotor, driving an alternator (induction motor), providing AC power.",
                            economic:{
                                capex:{
                                    initialSpecific: "",
                                    initialOffset: "",
                                    replacementSpecific: "",
                                    replacementOffset: ""
                                },
                                life:{
                                    lifetime: ""
                                },
                                opex:{
                                    reletiveToCapex: ""
                                }
                            },
                            physical:{
                                capacitiesBoundaries:{
                                    firstDefinition:{
                                        minOrFixed: "",
                                        maxStrict: ""
                                    },
                                    secondDefinition:{
                                        minOrFixed: "",
                                        maxStrict: ""
                                    }
                                },
                                boundaries:{
                                    firstOutputType:{
                                        minSpecific: "",
                                        minOffset: "",
                                        maxSpecific: "",
                                        maxOffset: ""
                                    },
                                    secondOutputType:{
                                        minSpecific: "",
                                        minOffset: "",
                                        maxSpecific: "",
                                        maxOffset: ""
                                    }
                                },
                                efficiency:{
                                    firstOutputType:{
                                        direct: "",
                                        gainSpecific: "",
                                        lossOffset: ""
                                    },
                                    secondOutputType:{
                                        relativeToOutput1: "",
                                        direct: "",
                                        gainSpecific: "",
                                        lossOffset: ""
                                    }
                                },
                                gradients:{
                                    upwards: "",
                                    downwards: ""
                                },
                                continuousRuntime:{
                                    min: "",
                                    max: ""
                                }
                            }
                        },
                        {
                            id: "photovoltaic",
                            label: "Photovoltaic",
                            domains: ["electric"],
                            type: "Photovoltaic system",
                            subtype: "Mono-crystaline Silicon modules, inverter included",
                            manufacturer: "Suntech (CN)",
                            model: "HiPerforma PLUTO 200-Ade",
                            description: "A photovoltaic system composed of solar panels based on mono-crystalline Silicon technology, including the system inverter, providing AC power.",
                            economic:{
                                capex:{
                                    initialSpecific: "",
                                    initialOffset: "",
                                    replacementSpecific: "",
                                    replacementOffset: ""
                                },
                                life:{
                                    lifetime: ""
                                },
                                opex:{
                                    reletiveToCapex: ""
                                }
                            },
                            physical:{
                                capacitiesBoundaries:{
                                    firstDefinition:{
                                        minOrFixed: "",
                                        maxStrict: ""
                                    },
                                    secondDefinition:{
                                        minOrFixed: "",
                                        maxStrict: ""
                                    }
                                },
                                boundaries:{
                                    firstOutputType:{
                                        minSpecific: "",
                                        minOffset: "",
                                        maxSpecific: "",
                                        maxOffset: ""
                                    },
                                    secondOutputType:{
                                        minSpecific: "",
                                        minOffset: "",
                                        maxSpecific: "",
                                        maxOffset: ""
                                    }
                                },
                                efficiency:{
                                    firstOutputType:{
                                        direct: "",
                                        gainSpecific: "",
                                        lossOffset: ""
                                    },
                                    secondOutputType:{
                                        relativeToOutput1: "",
                                        direct: "",
                                        gainSpecific: "",
                                        lossOffset: ""
                                    }
                                },
                                gradients:{
                                    upwards: "",
                                    downwards: ""
                                },
                                continuousRuntime:{
                                    min: "",
                                    max: ""
                                }
                            }
                        },
                        {
                            id: "battery",
                            label: "Battery",
                            domains: ["electric"],
                            type: "Battery",
                            subtype: "Li-ion battery system, inverter included",
                            manufacturer: "Generic",
                            model: "Generic",
                            description: "A generic Li-ion battery with included inverter, providing AC power.",
                            economic:{
                                capex:{
                                    initialSpecific: "",
                                    initialOffset: "",
                                    replacementSpecific: "",
                                    replacementOffset: ""
                                },
                                life:{
                                    lifetime: ""
                                },
                                opex:{
                                    reletiveToCapex: ""
                                }
                            },
                            physical:{
                                capacitiesBoundaries:{
                                    firstDefinition:{
                                        minOrFixed: "",
                                        maxStrict: ""
                                    },
                                    secondDefinition:{
                                        minOrFixed: "",
                                        maxStrict: ""
                                    }
                                },
                                boundaries:{
                                    firstOutputType:{
                                        minSpecific: "",
                                        minOffset: "",
                                        maxSpecific: "",
                                        maxOffset: ""
                                    },
                                    secondOutputType:{
                                        minSpecific: "",
                                        minOffset: "",
                                        maxSpecific: "",
                                        maxOffset: ""
                                    }
                                },
                                efficiency:{
                                    firstOutputType:{
                                        direct: "",
                                        gainSpecific: "",
                                        lossOffset: ""
                                    },
                                    secondOutputType:{
                                        relativeToOutput1: "",
                                        direct: "",
                                        gainSpecific: "",
                                        lossOffset: ""
                                    }
                                },
                                gradients:{
                                    upwards: "",
                                    downwards: ""
                                },
                                continuousRuntime:{
                                    min: "",
                                    max: ""
                                }
                            }
                        },
                        {
                            id: "heatpump",
                            label: "Heat Pump",
                            domains: ["electric", "heat"],
                            type: "Heat pump",
                            subtype: "Air-water",
                            manufacturer: "Generic",
                            model: "Generic",
                            description: "A generic air-water heat pump (non-reversible) using AC power.",
                            economic:{
                                capex:{
                                    initialSpecific: "",
                                    initialOffset: "",
                                    replacementSpecific: "",
                                    replacementOffset: ""
                                },
                                life:{
                                    lifetime: ""
                                },
                                opex:{
                                    reletiveToCapex: ""
                                }
                            },
                            physical:{
                                capacitiesBoundaries:{
                                    firstDefinition:{
                                        minOrFixed: "",
                                        maxStrict: ""
                                    },
                                    secondDefinition:{
                                        minOrFixed: "",
                                        maxStrict: ""
                                    }
                                },
                                boundaries:{
                                    firstOutputType:{
                                        minSpecific: "",
                                        minOffset: "",
                                        maxSpecific: "",
                                        maxOffset: ""
                                    },
                                    secondOutputType:{
                                        minSpecific: "",
                                        minOffset: "",
                                        maxSpecific: "",
                                        maxOffset: ""
                                    }
                                },
                                efficiency:{
                                    firstOutputType:{
                                        direct: "",
                                        gainSpecific: "",
                                        lossOffset: ""
                                    },
                                    secondOutputType:{
                                        relativeToOutput1: "",
                                        direct: "",
                                        gainSpecific: "",
                                        lossOffset: ""
                                    }
                                },
                                gradients:{
                                    upwards: "",
                                    downwards: ""
                                },
                                continuousRuntime:{
                                    min: "",
                                    max: ""
                                }
                            }
                        },
                        {
                            id: "electricheater",
                            label: "Electrtic Heater",
                            domains: ["electric", "heat"],
                            type: "Electric heater",
                            subtype: "Heater rod",
                            manufacturer: "Generic",
                            model: "Generic",
                            description: "A generic heater rod to be used in combination with heat pumps to supply thermal peak loads, using AC power.",
                            economic:{
                                capex:{
                                    initialSpecific: "",
                                    initialOffset: "",
                                    replacementSpecific: "",
                                    replacementOffset: ""
                                },
                                life:{
                                    lifetime: ""
                                },
                                opex:{
                                    reletiveToCapex: ""
                                }
                            },
                            physical:{
                                capacitiesBoundaries:{
                                    firstDefinition:{
                                        minOrFixed: "",
                                        maxStrict: ""
                                    },
                                    secondDefinition:{
                                        minOrFixed: "",
                                        maxStrict: ""
                                    }
                                },
                                boundaries:{
                                    firstOutputType:{
                                        minSpecific: "",
                                        minOffset: "",
                                        maxSpecific: "",
                                        maxOffset: ""
                                    },
                                    secondOutputType:{
                                        minSpecific: "",
                                        minOffset: "",
                                        maxSpecific: "",
                                        maxOffset: ""
                                    }
                                },
                                efficiency:{
                                    firstOutputType:{
                                        direct: "",
                                        gainSpecific: "",
                                        lossOffset: ""
                                    },
                                    secondOutputType:{
                                        relativeToOutput1: "",
                                        direct: "",
                                        gainSpecific: "",
                                        lossOffset: ""
                                    }
                                },
                                gradients:{
                                    upwards: "",
                                    downwards: ""
                                },
                                continuousRuntime:{
                                    min: "",
                                    max: ""
                                }
                            }
                        }
                        ,
                        {
                            id: "heatstorage",
                            label: "Heat Storage",
                            domains: ["heat"],
                            type: "Heat storage",
                            subtype: "Water based tank",
                            manufacturer: "Generic",
                            model: "Generic",
                            description: "A generic heat storage, based on a non-stratified water tank.",
                            economic:{
                                capex:{
                                    initialSpecific: "",
                                    initialOffset: "",
                                    replacementSpecific: "",
                                    replacementOffset: ""
                                },
                                life:{
                                    lifetime: ""
                                },
                                opex:{
                                    reletiveToCapex: ""
                                }
                            },
                            physical:{
                                capacitiesBoundaries:{
                                    firstDefinition:{
                                        minOrFixed: "",
                                        maxStrict: ""
                                    },
                                    secondDefinition:{
                                        minOrFixed: "",
                                        maxStrict: ""
                                    }
                                },
                                boundaries:{
                                    firstOutputType:{
                                        minSpecific: "",
                                        minOffset: "",
                                        maxSpecific: "",
                                        maxOffset: ""
                                    },
                                    secondOutputType:{
                                        minSpecific: "",
                                        minOffset: "",
                                        maxSpecific: "",
                                        maxOffset: ""
                                    }
                                },
                                efficiency:{
                                    firstOutputType:{
                                        direct: "",
                                        gainSpecific: "",
                                        lossOffset: ""
                                    },
                                    secondOutputType:{
                                        relativeToOutput1: "",
                                        direct: "",
                                        gainSpecific: "",
                                        lossOffset: ""
                                    }
                                },
                                gradients:{
                                    upwards: "",
                                    downwards: ""
                                },
                                continuousRuntime:{
                                    min: "",
                                    max: ""
                                }
                            }
                        },
                        {
                            id: "compressionchiller",
                            label: "Compression chiller",
                            domains: ["electric", "cooling"],
                            type: "Compression chiller",
                            subtype: "Heater rod",
                            manufacturer: "Generic",
                            model: "Generic",
                            description: "",
                            economic:{
                                capex:{
                                    initialSpecific: "",
                                    initialOffset: "",
                                    replacementSpecific: "",
                                    replacementOffset: ""
                                },
                                life:{
                                    lifetime: ""
                                },
                                opex:{
                                    reletiveToCapex: ""
                                }
                            },
                            physical:{
                                capacitiesBoundaries:{
                                    firstDefinition:{
                                        minOrFixed: "",
                                        maxStrict: ""
                                    },
                                    secondDefinition:{
                                        minOrFixed: "",
                                        maxStrict: ""
                                    }
                                },
                                boundaries:{
                                    firstOutputType:{
                                        minSpecific: "",
                                        minOffset: "",
                                        maxSpecific: "",
                                        maxOffset: ""
                                    },
                                    secondOutputType:{
                                        minSpecific: "",
                                        minOffset: "",
                                        maxSpecific: "",
                                        maxOffset: ""
                                    }
                                },
                                efficiency:{
                                    firstOutputType:{
                                        direct: "",
                                        gainSpecific: "",
                                        lossOffset: ""
                                    },
                                    secondOutputType:{
                                        relativeToOutput1: "",
                                        direct: "",
                                        gainSpecific: "",
                                        lossOffset: ""
                                    }
                                },
                                gradients:{
                                    upwards: "",
                                    downwards: ""
                                },
                                continuousRuntime:{
                                    min: "",
                                    max: ""
                                }
                            }
                        },
                        {
                            id: "coolingstorage",
                            label: "Cooling storage",
                            domains: ["cooling"],
                            type: "Cooling storage",
                            subtype: "Water based tank",
                            manufacturer: "Generic",
                            model: "Generic",
                            description: "A generic cooling storage, based on a non-stratified water tank.",
                            economic:{
                                capex:{
                                    initialSpecific: "",
                                    initialOffset: "",
                                    replacementSpecific: "",
                                    replacementOffset: ""
                                },
                                life:{
                                    lifetime: ""
                                },
                                opex:{
                                    reletiveToCapex: ""
                                }
                            },
                            physical:{
                                capacitiesBoundaries:{
                                    firstDefinition:{
                                        minOrFixed: "",
                                        maxStrict: ""
                                    },
                                    secondDefinition:{
                                        minOrFixed: "",
                                        maxStrict: ""
                                    }
                                },
                                boundaries:{
                                    firstOutputType:{
                                        minSpecific: "",
                                        minOffset: "",
                                        maxSpecific: "",
                                        maxOffset: ""
                                    },
                                    secondOutputType:{
                                        minSpecific: "",
                                        minOffset: "",
                                        maxSpecific: "",
                                        maxOffset: ""
                                    }
                                },
                                efficiency:{
                                    firstOutputType:{
                                        direct: "",
                                        gainSpecific: "",
                                        lossOffset: ""
                                    },
                                    secondOutputType:{
                                        relativeToOutput1: "",
                                        direct: "",
                                        gainSpecific: "",
                                        lossOffset: ""
                                    }
                                },
                                gradients:{
                                    upwards: "",
                                    downwards: ""
                                },
                                continuousRuntime:{
                                    min: "",
                                    max: ""
                                }
                            }
                        }
                    ];


            service.getComponent = function(id){
                var item = {};
                var i;

                for(i=0; i < items.length; i++)
                    if(items[i].id === id ){
                        angular.copy(items[i], item);
                        break;
                    }
                return item;
            };

            return service;

        }]);
