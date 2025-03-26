export let simpleDemandOutput = {
    "iron-gear-wheel": {
        IRPTU: 10,
        dependentItems: {
            "burner-inserter": 10
        }
    },
    "iron-plate": {
        IRPTU: 30,
        dependentItems: {
            "burner-inserter": 10,
            "iron-gear-wheel": 20
        }
    },
    "iron-ore": {
        IRPTU: 30,
        dependentItems: {
            "iron-plate": 30
        }
    }
}

export let populatedDemandOutput = {
    "inserter": {
        IRPTU: 10,
        dependentItems: {
            "long-handed-inserter": 10
        }
    },
    "iron-gear-wheel": {
        IRPTU: 20,
        dependentItems: {
            "long-handed-inserter": 10,
            "inserter": 10
        }
    },
    "electronic-circuit": {
        IRPTU: 10,
        dependentItems: {
            "inserter": 10,
        }
    },
    "copper-cable": {
        IRPTU: 30,
        dependentItems: {
            "electronic-circuit": 30
        }
    },
    "copper-plate": {
        IRPTU: 15,
        dependentItems: {
            "copper-cable": 15
        }
    },
    "iron-plate": {
        IRPTU: 70,
        dependentItems: {
           "electronic-circuit": 10,
            "iron-gear-wheel": 40,
            "inserter": 10,
            "long-handed-inserter": 10,
        }
    },
    "iron-ore": {
        IRPTU: 70,
        dependentItems: {
            "iron-plate": 70
        }
    },
    "copper-ore": {
        IRPTU: 15,
        dependentItems: {
            "copper-plate": 15
        }
    },
}