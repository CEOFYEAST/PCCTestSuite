// VALID IRPTU SUBMISSION-RELATED DATA

export let emptyProdChain = {
    timeUnit: "minute",
    prodChain: {}
}

export let emptyProdChain_Second = {
    timeUnit: "second",
    prodChain: {}
}

export let simpleProdChain = {
    timeUnit: "minute",
    prodChain: {
        "burner-inserter": {
            userIRPTU: 10,
            intermIRPTU: 0,
            dependentItems: {}
        },
        "iron-gear-wheel": {
            userIRPTU: 0,
            intermIRPTU: 10,
            dependentItems: {
                "burner-inserter": 10
            }
        },
        "iron-plate": {
            userIRPTU: 0,
            intermIRPTU: 30,
            dependentItems: {
                "burner-inserter": 10,
                "iron-gear-wheel": 20
            }
        },
        "iron-ore": {
            userIRPTU: 0,
            intermIRPTU: 30,
            dependentItems: {
                "iron-plate": 30
            }
        }
    }
}

export let simpleUserDemand = {
    prodChain: {
        "burner-inserter": {
            userIRPTU: 10,
            intermIRPTU: 0,
            dependentItems: {}
        },
    }
}

export let simpleIntermDemand = {
    prodChain: {
        "iron-plate": {
            userIRPTU: 0,
            intermIRPTU: 30,
            dependentItems: {
                "burner-inserter": 10,
                "iron-gear-wheel": 20
            }
        },
    }
}

export let populatedProdChain = {
    timeUnit: "minute",
    prodChain: {
        "long-handed-inserter": {
            userIRPTU: 20,
            intermIRPTU: 0,
            dependentItems: {}
        },
        "inserter": {
            userIRPTU: 10,
            intermIRPTU: 20,
            dependentItems: {
                "long-handed-inserter": 20
            }
        },
        "iron-gear-wheel": {
            userIRPTU: 0,
            intermIRPTU: 50,
            dependentItems: {
                "inserter": 30,
                "long-handed-inserter": 20
            }
        },
        "electronic-circuit": {
            userIRPTU: 0,
            intermIRPTU: 30,
            dependentItems: {
                "inserter": 30,
            }
        },
        "copper-cable": {
            userIRPTU: 0,
            intermIRPTU: 90,
            dependentItems: {
                "electronic-circuit": 90
            }
        },
        "copper-plate": {
            userIRPTU: 0,
            intermIRPTU: 45,
            dependentItems: {
                "copper-cable": 45
            }
        },
        "iron-plate": {
            userIRPTU: 0,
            intermIRPTU: 180,
            dependentItems: {
                "electronic-circuit": 30,
                "iron-gear-wheel": 100,
                "inserter": 30,
                "long-handed-inserter": 20,
            }
        },
        "copper-ore": {
            userIRPTU: 0,
            intermIRPTU: 45,
            dependentItems: {
                "copper-plate": 45
            }
        },
        "iron-ore": {
            userIRPTU: 0,
            intermIRPTU: 180,
            dependentItems: {
                "iron-plate": 180
            }
        }
    }
}

export let popUserDemand = {
    prodChain: {
        "long-handed-inserter": {
            userIRPTU: 20,
            intermIRPTU: 0,
            dependentItems: {}
        },
        "inserter": {
            userIRPTU: 10,
            intermIRPTU: 20,
            dependentItems: {
                "long-handed-inserter": 20
            }
        }
    }
}

export let popIntermDemand = {
    prodChain: {
        "iron-plate": {
            userIRPTU: 0,
            intermIRPTU: 180,
            dependentItems: {
                "electronic-circuit": 30,
                "iron-gear-wheel": 100,
                "inserter": 30,
                "long-handed-inserter": 20,
            }
        },
    }
}

// used for removal tests
export let partialProdChain = {
    timeUnit: "minute",
    prodChain: {
        "burner-inserter": {
            userIRPTU: 5,
            intermIRPTU: 0,
            dependentItems: {}
        },
        "iron-gear-wheel": {
            userIRPTU: 0,
            intermIRPTU: 5,
            dependentItems: {
                "burner-inserter": 5
            }
        },
        "iron-plate": {
            userIRPTU: 0,
            intermIRPTU: 15,
            dependentItems: {
                "burner-inserter": 5,
                "iron-gear-wheel": 10
            }
        },
        "iron-ore": {
            userIRPTU: 0,
            intermIRPTU: 15,
            dependentItems: {
                "iron-plate": 15
            }
        }
    }
}

// INVALID IRPTU SUBMISSION-RELATED DATA

export let invalidProdChain_NoTimeUnit = {
    prodChain: {}
}

export let invalidProdChain_NoProdChainData = {
    timeUnit: "second"
}

export let invalidProdChain_InvalidTimeUnit = {
    timeUnit: "bruh",
    prodChain: {}
}

export let invalidProdChain_InvalidProdChainData = {
    timeUnit: "second",
    prodChain: {
        "bad-id": {
            
        }
    }
}

// TIME UNIT RECALC-RELATED DATA

export let simpleProdChain_Seconds = {
    timeUnit: "second",
    prodChain: {
        "burner-inserter": {
            userIRPTU: expect.closeTo(0.166),
            intermIRPTU: 0,
            dependentItems: {}
        },
        "iron-gear-wheel": {
            userIRPTU: 0,
            intermIRPTU: expect.closeTo(0.166),
            dependentItems: {
                "burner-inserter": expect.closeTo(0.166)
            }
        },
        "iron-plate": {
            userIRPTU: 0,
            intermIRPTU: 0.5,
            dependentItems: {
                "burner-inserter": expect.closeTo(0.166),
                "iron-gear-wheel": expect.closeTo(0.333)
            }
        },
        "iron-ore": {
            userIRPTU: 0,
            intermIRPTU: 0.5,
            dependentItems: {
                "iron-plate": 0.5
            }
        }
    }
}

export let simpleProdChain_Hours = {
    timeUnit: "hour",
    prodChain: {
        "burner-inserter": {
            userIRPTU: 600,
            intermIRPTU: 0,
            dependentItems: {}
        },
        "iron-gear-wheel": {
            userIRPTU: 0,
            intermIRPTU: 600,
            dependentItems: {
                "burner-inserter": 600
            }
        },
        "iron-plate": {
            userIRPTU: 0,
            intermIRPTU: 1800,
            dependentItems: {
                "burner-inserter": 600,
                "iron-gear-wheel": 1200
            }
        },
        "iron-ore": {
            userIRPTU: 0,
            intermIRPTU: 1800,
            dependentItems: {
                "iron-plate": 1800
            }
        }
    }
}