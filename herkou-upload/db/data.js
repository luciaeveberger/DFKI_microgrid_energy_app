ComponentDetail.create! component_types_id: 1,  type_id: "generator", label: "Electric Generator", domains: ["electrical"], type_identifier: "Generator (reciprocating engine)", subtype: "Internal combustion engine (Diesel), with heat recovery (CHP - Combined heat and power)", manufacturer: "Generic",model: "Generic", description: "Generic generator with heat recovery: A reciprocating engine powered by natural gas (internal-combustion engine) driving an alternator (induction motor), providing AC power and low temperature thermal heat.", datasheet:'blank', url:'example.com', iconURL:'example'

ComponentDetail.create! component_types_id: 1, type_id: "windturbine",label: "Wind Turbine",domains: ["electrical"],type_identifier: "Wind turbine",subtype: "Small HAWT",manufacturer: "Generic",model: "Generic",description: "A small wind turbine with horizontal axis rotor, driving an alternator (induction motor), providing AC power.",datasheet:'blank', url:'example.com', iconURL:'example'

ComponentDetail.create! component_types_id: 1, type_id: "photovoltaic",label: "Photovoltaic",domains: ["electrical"],type_identifier: "Photovoltaic system",subtype: "Mono-crystaline Silicon modules, inverter included",manufacturer: "Suntech (CN)",model: "HiPerforma PLUTO 200-Ade",description: "A photovoltaic system composed of solar panels based on mono-crystalline Silicon technology, including the system inverter, providing AC power.",datasheet:'blank', url:'example.com', iconURL:'example'

ComponentDetail.create! component_types_id: 1, type_id: "battery",label: "Battery",domains: ["electrical"],type_identifier: "Battery",subtype: "Li-ion battery system, inverter included",manufacturer: "Generic",model: "Generic",description: "A generic Li-ion battery with included inverter, providing AC power.",datasheet:'blank', url:'example.com', iconURL:'example'

ComponentDetail.create! component_types_id: 2, type_id: "heatpump",label: "Heat Pump",domains: ["electrical", "heat"],type_identifier: "Heat pump",subtype: "Air-water",manufacturer: "Generic",model: "Generic",description: "A generic air-water heat pump (non-reversible) using AC power.",datasheet:'blank', url:'example.com', iconURL:'example'

ComponentDetail.create! type_id: "electricheater",label: "Electrtic Heater", domains: ["electrical", "heat"], type_identifier: "Electric heater",subtype: "Heater rod",manufacturer: "Generic", model: "Generic",description: "A generic heater rod to be used in combination with heat pumps to supply thermal peak loads, using AC power.",datasheet:'blank', url:'example.com', iconURL:'example'

ComponentDetail.create! type_id:3, type_id: "heatstorage",label: "Heat Storage",domains: ["heat"],type_identifier: "Heat storage",subtype: "Water based tank",manufacturer: "Generic",model: "Generic",description: "A generic heat storage, based on a non-stratified water tank.",datasheet:'blank', url:'example.com', iconURL:'example'

ComponentDetail.create! type_id:3, type_id: "compressionchiller",label: "Compression chiller",
domains: ["electrical", "cooling"],type_identifier: "Compression chiller",subtype: "Heater rod",
manufacturer: "Generic",model: "Generic",description: "",datasheet:'blank', url:'example.com',iconURL:'example'

ComponentDetail.create! type_id:3,type_id: "coolingstorage",label: "Cooling storage",
domains: ["cooling"],type_identifier: "Cooling storage",subtype: "Water based tank",
manufacturer: "Generic",model: "Generic",description: "A generic cooling storage, based on a non-stratified water tank.",datasheet:'blank', url:'example.com', iconURL:'example'


Simulation.create title: "Berlin City District Microgrid - Apartment building.", author: "Thomas", description:"The BCDMG project is developed in the heart of the City ...", coordinates: "[52.5200, 13.4050]", user_id:"4", components:[1,2,3,4,5,6]

Simulation.create title: "Ollague Village Microgrid", author: "Thomas", description:"The OVMG project is developed in the Peruvian Andes.", coordinates: "[-21.2599262,-69.3946171]", user_id:"4", components:[1,2,4],
    results:'{
"components":[
    {
        "id":"compressionchiller",
        "label":"Lead-acid Battery",
        "data":[
            {
                "key":"PIN",
                "values":[
                    [
                        1483225200,
                        90.075731164383711
                    ],
                    [
                        1485853200,
                        73.741770890410919
                    ],
                    [
                        1488481200,
                        84.717607534246525
                    ],
                    [
                        1491105600,
                        61.273197260273975
                    ],
                    [
                        1493733600,
                        50.684136643835735
                    ],
                    [
                        1496361600,
                        44.447265068493138
                    ],
                    [
                        1498989600,
                        45.563581506849275
                    ],
                    [
                        1501617600,
                        49.285398630136974
                    ],
                    [
                        1504245600,
                        73.210864041095945
                    ],
                    [
                        1506873600,
                        72.897924657534162
                    ],
                    [
                        1509505200,
                        88.330897602739753
                    ],
                    [
                        1512133200,
                        81.211705821917761
                    ],
                    [
                        1514761200,
                        0.0
                    ]
                ]
            },
            {
                "key":"POUT",
                "values":[
                    [
                        1483225200,
                        24.783293835616405
                    ],
                    [
                        1485853200,
                        21.6710883561644
                    ],
                    [
                        1488481200,
                        27.396252397260238
                    ],
                    [
                        1491105600,
                        29.742787671232872
                    ],
                    [
                        1493733600,
                        33.35498321917806
                    ],
                    [
                        1496361600,
                        30.528044863013619
                    ],
                    [
                        1498989600,
                        30.743611986301293
                    ],
                    [
                        1501617600,
                        32.752647602739771
                    ],
                    [
                        1504245600,
                        31.74120753424662
                    ],
                    [
                        1506873600,
                        32.420441780821946
                    ],
                    [
                        1509505200,
                        29.50193664383562
                    ],
                    [
                        1512133200,
                        26.591271575342468
                    ],
                    [
                        1514761200,
                        60.286000000000001
                    ]
                ]
            },
            {
                "key":"SOC",
                "values":[
                    [
                        1483225200,
                        66.190814041096004
                    ],
                    [
                        1485853200,
                        64.358751027397332
                    ],
                    [
                        1488481200,
                        67.654752397260253
                    ],
                    [
                        1491105600,
                        68.956707191780836
                    ],
                    [
                        1493733600,
                        70.383581849315107
                    ],
                    [
                        1496361600,
                        68.408226712328727
                    ],
                    [
                        1498989600,
                        68.765086643835616
                    ],
                    [
                        1501617600,
                        69.42127328767107
                    ],
                    [
                        1504245600,
                        69.244144178082152
                    ],
                    [
                        1506873600,
                        70.550677054794477
                    ],
                    [
                        1509505200,
                        68.591765068493302
                    ],
                    [
                        1512133200,
                        66.731826369863185
                    ],
                    [
                        1514761200,
                        50.0
                    ]
                ]
            }
        ]
    },
    {
        "id":"heatpump",
        "label":"Diesel GenSet",
        "data":[
            {
                "key":"Pin",
                "values":[
                    [
                        1483225200,
                        1.5921397260273982
                    ],
                    [
                        1485853200,
                        0.0
                    ],
                    [
                        1488481200,
                        0.0
                    ],
                    [
                        1491105600,
                        12.32717534246572
                    ],
                    [
                        1493733600,
                        35.201641095890643
                    ],
                    [
                        1496361600,
                        77.487728767122178
                    ],
                    [
                        1498989600,
                        67.10777499999945
                    ],
                    [
                        1501617600,
                        71.750245890410127
                    ],
                    [
                        1504245600,
                        21.814741438356045
                    ],
                    [
                        1506873600,
                        9.0557883561643635
                    ],
                    [
                        1509505200,
                        3.9501054794520565
                    ],
                    [
                        1512133200,
                        0.0
                    ],
                    [
                        1514761200,
                        0.0
                    ]
                ]
            },
            {
                "key":"POUT",
                "values":[
                    [
                        1483225200,
                        0.55724794520547916
                    ],
                    [
                        1485853200,
                        0.0
                    ],
                    [
                        1488481200,
                        0.0
                    ],
                    [
                        1491105600,
                        4.3145147260274088
                    ],
                    [
                        1493733600,
                        12.295546232876726
                    ],
                    [
                        1496361600,
                        27.120746575342523
                    ],
                    [
                        1498989600,
                        23.487759589041136
                    ],
                    [
                        1501617600,
                        25.112625684931551
                    ],
                    [
                        1504245600,
                        7.6268222602739826
                    ],
                    [
                        1506873600,
                        3.169530479452058
                    ],
                    [
                        1509505200,
                        1.3825390410958904
                    ],
                    [
                        1512133200,
                        0.0
                    ],
                    [
                        1514761200,
                        0.0
                    ]
                ]
            }
        ]
    },
    {
        "id":"heatstorage",
        "label":"Photovoltaic System",
        "data":[
            {
                "key":"PIN",
                "values":[
                    [
                        1483225200,
                        1.5921397260273982
                    ],
                    [
                        1485853200,
                        0.0
                    ],
                    [
                        1488481200,
                        0.0
                    ],
                    [
                        1491105600,
                        12.32717534246572
                    ],
                    [
                        1493733600,
                        35.201641095890643
                    ],
                    [
                        1496361600,
                        77.487728767122178
                    ],
                    [
                        1498989600,
                        67.10777499999945
                    ],
                    [
                        1501617600,
                        71.750245890410127
                    ],
                    [
                        1504245600,
                        21.814741438356045
                    ],
                    [
                        1506873600,
                        9.0557883561643635
                    ],
                    [
                        1509505200,
                        3.9501054794520565
                    ],
                    [
                        1512133200,
                        0.0
                    ],
                    [
                        1514761200,
                        0.0
                    ]
                ]
            },
            {
                "key":"PEL",
                "values":[
                    [
                        1483225200,
                        85.074897945205251
                    ],
                    [
                        1485853200,
                        76.212962328767162
                    ],
                    [
                        1488481200,
                        88.15029623287667
                    ],
                    [
                        1491105600,
                        73.219451712328848
                    ],
                    [
                        1493733600,
                        75.446632876712343
                    ],
                    [
                        1496361600,
                        72.271417808219127
                    ],
                    [
                        1498989600,
                        73.192217808219212
                    ],
                    [
                        1501617600,
                        77.903614041095778
                    ],
                    [
                        1504245600,
                        86.784297602739699
                    ],
                    [
                        1506873600,
                        80.318410958904153
                    ],
                    [
                        1509505200,
                        88.959058904109625
                    ],
                    [
                        1512133200,
                        83.439780479452054
                    ],
                    [
                        1514761200,
                        0.0
                    ]
                ]
            }
        ]
    },
    {
        "id":"motorchpunit",
        "label":"Wind Turbine",
        "data":[
            {
                "key":"Pex",
                "values":[
                    [
                        1483225200,
                        31.310872260273808
                    ],
                    [
                        1485853200,
                        21.054968835616464
                    ],
                    [
                        1488481200,
                        21.586152054794539
                    ],
                    [
                        1491105600,
                        17.087521575342418
                    ],
                    [
                        1493733600,
                        8.1882503424657163
                    ],
                    [
                        1496361600,
                        14.199895890411003
                    ],
                    [
                        1498989600,
                        15.855963698630106
                    ],
                    [
                        1501617600,
                        12.179676712328783
                    ],
                    [
                        1504245600,
                        25.124978424657467
                    ],
                    [
                        1506873600,
                        27.127651712328703
                    ],
                    [
                        1509505200,
                        32.102392808219072
                    ],
                    [
                        1512133200,
                        25.849817808219122
                    ],
                    [
                        1514761200,
                        0.0
                    ]
                ]
            }
        ]
    }
],
    "domains":[
    {
        "id":"soc",
        "label":"SOC Operational Domain",
        "data":[
            {
                "key":"Load",
                "type":"line",
                "yAxis":1,
                "values":[
                    [
                        1483225200,
                        66.190814000000003
                    ],
                    [
                        1485939600,
                        64.358750999999998
                    ],
                    [
                        1488481200,
                        67.654752000000002
                    ],
                    [
                        1491105600,
                        68.956706999999994
                    ],
                    [
                        1493733600,
                        70.38358199999999
                    ],
                    [
                        1496361600,
                        68.408226999999997
                    ],
                    [
                        1498989600,
                        68.765086999999994
                    ],
                    [
                        1501617600,
                        69.421272999999999
                    ],
                    [
                        1504245600,
                        69.244143999999991
                    ],
                    [
                        1506873600,
                        70.550677000000007
                    ],
                    [
                        1509505200,
                        68.591765000000009
                    ],
                    [
                        1512133200,
                        66.731825999999998
                    ],
                    [
                        1514761200,
                        50.0
                    ]
                ]
            },
            {
                "key":"Other",
                "type":"line",
                "yAxis":1,
                "values":[
                    [
                        1483225200,
                        66.190814000000003
                    ],
                    [
                        1485939600,
                        64.358750999999998
                    ],
                    [
                        1488481200,
                        67.654752000000002
                    ],
                    [
                        1491105600,
                        68.956706999999994
                    ],
                    [
                        1493733600,
                        70.38358199999999
                    ],
                    [
                        1496361600,
                        68.408226999999997
                    ],
                    [
                        1498989600,
                        68.765086999999994
                    ],
                    [
                        1501617600,
                        69.421272999999999
                    ],
                    [
                        1504245600,
                        69.244143999999991
                    ],
                    [
                        1506873600,
                        70.550677000000007
                    ],
                    [
                        1509505200,
                        68.591765000000009
                    ],
                    [
                        1512133200,
                        66.731825999999998
                    ],
                    [
                        1514761200,
                        50.0
                    ]
                ]
            }
        ]
    },
    {
        "id":"load",
        "label":"LOAD Operational Domain",
        "data":[
            {
                "key":"Load",
                "type":"line",
                "yAxis":1,
                "values":[
                    [
                        1483225200,
                        51.650621000000001
                    ],
                    [
                        1485853200,
                        45.197260999999997
                    ],
                    [
                        1488481200,
                        52.415112000000001
                    ],
                    [
                        1491105600,
                        63.091081000000003
                    ],
                    [
                        1493733600,
                        78.601276999999996
                    ],
                    [
                        1496361600,
                        99.672824000000006
                    ],
                    [
                        1498989600,
                        97.715972999999991
                    ],
                    [
                        1501617600,
                        98.663165000000006
                    ],
                    [
                        1504245600,
                        78.066432999999989
                    ],
                    [
                        1506873600,
                        70.138118999999989
                    ],
                    [
                        1509505200,
                        63.615057999999998
                    ],
                    [
                        1512133200,
                        54.669178000000002
                    ],
                    [
                        1514761200,
                        60.286000000000001
                    ]
                ]
            },
            {
                "key":"Other",
                "type":"line",
                "yAxis":1,
                "values":[
                    [
                        1483225200,
                        51.650621000000001
                    ],
                    [
                        1485853200,
                        45.197260999999997
                    ],
                    [
                        1488481200,
                        52.415112000000001
                    ],
                    [
                        1491105600,
                        63.091081000000003
                    ],
                    [
                        1493733600,
                        78.601276999999996
                    ],
                    [
                        1496361600,
                        99.672824000000006
                    ],
                    [
                        1498989600,
                        97.715972999999991
                    ],
                    [
                        1501617600,
                        98.663165000000006
                    ],
                    [
                        1504245600,
                        78.066432999999989
                    ],
                    [
                        1506873600,
                        70.138118999999989
                    ],
                    [
                        1509505200,
                        63.615057999999998
                    ],
                    [
                        1512133200,
                        54.669178000000002
                    ],
                    [
                        1514761200,
                        60.286000000000001
                    ]
                ]
            }
        ]
    },
    {
        "id":"dmn_EL_PV_Pex",
        "label":"dmn_EL_PV_Pex",
        "data":[
            {
                "key":"Load",
                "type":"line",
                "yAxis":1,
                "values":[
                    [
                        1483225200,
                        85.074898000000005
                    ],
                    [
                        1485853200,
                        76.212962000000005
                    ],
                    [
                        1488481200,
                        88.150295999999997
                    ],
                    [
                        1491105600,
                        73.219452000000004
                    ],
                    [
                        1493733600,
                        75.446632999999991
                    ],
                    [
                        1496361600,
                        72.271418000000011
                    ],
                    [
                        1498989600,
                        73.192218000000011
                    ],
                    [
                        1501617600,
                        77.903614000000005
                    ],
                    [
                        1504245600,
                        86.784297999999993
                    ],
                    [
                        1506873600,
                        80.318410999999998
                    ],
                    [
                        1509505200,
                        88.959058999999996
                    ],
                    [
                        1512133200,
                        83.439779999999999
                    ],
                    [
                        1514761200,
                        0.0
                    ]
                ]
            },
            {
                "key":"Other",
                "type":"line",
                "yAxis":1,
                "values":[
                    [
                        1483225200,
                        85.074898000000005
                    ],
                    [
                        1485853200,
                        76.212962000000005
                    ],
                    [
                        1488481200,
                        88.150295999999997
                    ],
                    [
                        1491105600,
                        73.219452000000004
                    ],
                    [
                        1493733600,
                        75.446632999999991
                    ],
                    [
                        1496361600,
                        72.271418000000011
                    ],
                    [
                        1498989600,
                        73.192218000000011
                    ],
                    [
                        1501617600,
                        77.903614000000005
                    ],
                    [
                        1504245600,
                        86.784297999999993
                    ],
                    [
                        1506873600,
                        80.318410999999998
                    ],
                    [
                        1509505200,
                        88.959058999999996
                    ],
                    [
                        1512133200,
                        83.439779999999999
                    ],
                    [
                        1514761200,
                        0.0
                    ]
                ]
            }
        ]
    },
    {
        "id":"dmn_EL_WT_Pex",
        "label":"dmn_EL_WT_Pex",
        "data":[
            {
                "key":"Load",
                "type":"line",
                "yAxis":1,
                "values":[
                    [
                        1483225200,
                        31.310872260273808
                    ],
                    [
                        1485853200,
                        21.054968835616464
                    ],
                    [
                        1488481200,
                        21.586152054794539
                    ],
                    [
                        1491105600,
                        17.087521575342418
                    ],
                    [
                        1493733600,
                        8.1882503424657163
                    ],
                    [
                        1496361600,
                        14.199895890411003
                    ],
                    [
                        1498989600,
                        15.855963698630106
                    ],
                    [
                        1501617600,
                        12.179676712328783
                    ],
                    [
                        1504245600,
                        25.124978424657467
                    ],
                    [
                        1506873600,
                        27.127651712328703
                    ],
                    [
                        1509505200,
                        32.102392808219072
                    ],
                    [
                        1512133200,
                        25.849817808219122
                    ],
                    [
                        1514761200,
                        0.0
                    ]
                ]
            },
            {
                "key":"Other",
                "type":"line",
                "yAxis":1,
                "values":[
                    [
                        1483225200,
                        31.310872260273808
                    ],
                    [
                        1485853200,
                        21.054968835616464
                    ],
                    [
                        1488481200,
                        21.586152054794539
                    ],
                    [
                        1491105600,
                        17.087521575342418
                    ],
                    [
                        1493733600,
                        8.1882503424657163
                    ],
                    [
                        1496361600,
                        14.199895890411003
                    ],
                    [
                        1498989600,
                        15.855963698630106
                    ],
                    [
                        1501617600,
                        12.179676712328783
                    ],
                    [
                        1504245600,
                        25.124978424657467
                    ],
                    [
                        1506873600,
                        27.127651712328703
                    ],
                    [
                        1509505200,
                        32.102392808219072
                    ],
                    [
                        1512133200,
                        25.849817808219122
                    ],
                    [
                        1514761200,
                        0.0
                    ]
                ]
            }
        ]
    },
    {
        "id":"dmn_EL_DG_Pex",
        "label":"dmn_EL_DG_Pex",
        "data":[
            {
                "key":"Load",
                "type":"line",
                "yAxis":1,
                "values":[
                    [
                        1483225200,
                        0.55724794520547916
                    ],
                    [
                        1485853200,
                        0.0
                    ],
                    [
                        1488481200,
                        0.0
                    ],
                    [
                        1491105600,
                        4.3145147260274088
                    ],
                    [
                        1493733600,
                        12.295546232876726
                    ],
                    [
                        1496361600,
                        27.120746575342523
                    ],
                    [
                        1498989600,
                        23.487759589041136
                    ],
                    [
                        1501617600,
                        25.112625684931551
                    ],
                    [
                        1504245600,
                        7.6268222602739826
                    ],
                    [
                        1506873600,
                        3.169530479452058
                    ],
                    [
                        1509505200,
                        1.3825390410958904
                    ],
                    [
                        1512133200,
                        0.0
                    ],
                    [
                        1514761200,
                        0.0
                    ]
                ]
            },
            {
                "key":"Other",
                "type":"line",
                "yAxis":1,
                "values":[
                    [
                        1483225200,
                        0.55724794520547916
                    ],
                    [
                        1485853200,
                        0.0
                    ],
                    [
                        1488481200,
                        0.0
                    ],
                    [
                        1491105600,
                        4.3145147260274088
                    ],
                    [
                        1493733600,
                        12.295546232876726
                    ],
                    [
                        1496361600,
                        27.120746575342523
                    ],
                    [
                        1498989600,
                        23.487759589041136
                    ],
                    [
                        1501617600,
                        25.112625684931551
                    ],
                    [
                        1504245600,
                        7.6268222602739826
                    ],
                    [
                        1506873600,
                        3.169530479452058
                    ],
                    [
                        1509505200,
                        1.3825390410958904
                    ],
                    [
                        1512133200,
                        0.0
                    ],
                    [
                        1514761200,
                        0.0
                    ]
                ]
            }
        ]
    }
]
}'

