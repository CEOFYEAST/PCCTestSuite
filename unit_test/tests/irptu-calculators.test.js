import {calculateIntermediaryDemand} from "@ceofyeast/prodchaincalculators-server/calculators"
import * as SampleDemand from "../test_data/demand-output-data.js"

test('Test proper intermediary demand calculation for simple input', () => {
    let demandOutput = {}
    calculateIntermediaryDemand("burner-inserter", 10, demandOutput)
    expect(demandOutput).toMatchObject(SampleDemand.simpleDemandOutput)
})

test('Test proper intermediary demand calculation for populated input', () => {
    let demandOutput = {}
    calculateIntermediaryDemand("long-handed-inserter", 10, demandOutput)
    expect(demandOutput).toMatchObject(SampleDemand.populatedDemandOutput)
})