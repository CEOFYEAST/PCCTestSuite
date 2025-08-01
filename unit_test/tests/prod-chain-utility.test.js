import {createProductionChainObject, getUserDemand, getItemIDs, getItemNamesAndIDs, recalculateTimeUnit} from "@ceofyeast/prodchaincalculators-server/utility"
import * as SampleChains from "../test_data/prod-chain-data.js"
import {deepCopy} from "./helpers.module.js"

// Get User Demand Tests

    // VALID TESTS

test('Test user demand parse on simple production chain', () => {
    expect(getUserDemand(SampleChains.simpleProdChain["prodChain"])).toMatchObject(simpleParsedUserDemand)
})

test('Test user demand parse on populated production chain', () => {
    expect(getUserDemand(SampleChains.populatedProdChain["prodChain"])).toMatchObject(populatedParsedUserDemand)
})

// Get Item IDs Tests

    // VALID TESTS

test('Item IDs is object', () => {
    expect(typeof getItemIDs()).toBe('object')
})

test('Item IDs contains ID', () => {
    expect(getItemIDs()).toContain("inserter")
})

// Get Item IDs and Names Tests

    // VALID TESTS

test("Item IDs + names is object", () => {
    expect(typeof getItemNamesAndIDs()).toBe('object')
})

test("Item IDs + names has key/val pair", () => {
    expect(getItemNamesAndIDs()["Iron ore"]).toBe('iron-ore')
})

test("Item IDs + names has multiple key/val pairs", () => {
    expect(getItemNamesAndIDs()).toMatchObject(sampleItemNamesAndIDs)
})


//test('')

// Recalculate Time Unit Tests

    // INVALID TESTS

test('Test invalid prod. chain input for recalculation throws exception', () => {
    expect(() => {
        recalculateTimeUnit({}, "minute")
    }).toThrow()
})

test('Test invalid time unit input for recalculation throws exeption', () => {
    expect(() => {
        recalculateTimeUnit(SampleChains.simpleProdChain, "bruh")
    }).toThrow()
})

    // VALID TESTS

test('Test valid simple prod. chain conversion to seconds', () => {
    let toTest = deepCopy(SampleChains.simpleProdChain)
    expect(recalculateTimeUnit(toTest, "second"))
        .toMatchObject(SampleChains.simpleProdChain_Seconds)
})

test('Test valid simple prod. chain conversion to hours', () => {
    let toTest = deepCopy(SampleChains.simpleProdChain)
    expect(recalculateTimeUnit(toTest, "hour"))
        .toMatchObject(SampleChains.simpleProdChain_Hours)
})

// Prod Chain Creation Tests

    // INVALID TESTS

test('Test invalid time unit input for creation throws exception', () => {
    expect(() => {
        createProductionChainObject("bruh")
    }).toThrow()
})

    // VALID TESTS

test('Test production chain creation', () => {
    expect(createProductionChainObject()).toMatchObject(SampleChains.emptyProdChain)
})

test('Test production chain creation w/ time unit', () => {
    expect(createProductionChainObject("second")).toMatchObject(SampleChains.emptyProdChain_Second)
})

// TEST DATA

let simpleParsedUserDemand = {
    "burner-inserter": 10
}

let populatedParsedUserDemand = {
    "long-handed-inserter": 20,
    "inserter": 10
}

let sampleItemNamesAndIDs = {
    "Long handed inserter": "long-handed-inserter",
    "Inserter": "inserter",
    "Iron ore": "iron-ore",
    "Burner inserter": "burner-inserter"
}