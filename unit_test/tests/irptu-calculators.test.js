import {calculateIntermediaryDemand} from "@ceofyeast/prodchaincalculators/calculators"
import * as SampleDemand from "../test_data/demand-output-data.js"

test.only('Test proper intermediary demand calculation for simple input', () => {
    let demandOutput = {}
    calculateIntermediaryDemand("burner-inserter", 10, demandOutput)
    expect(demandOutput).toEqual(SampleDemand.simpleDemandOutput)
})

test.only('Test proper intermediary demand calculation for populated input', () => {
    let demandOutput = {}
    calculateIntermediaryDemand("long-handed-inserter", 10, demandOutput)
    expect(demandOutput).toEqual(SampleDemand.populatedDemandOutput)
})