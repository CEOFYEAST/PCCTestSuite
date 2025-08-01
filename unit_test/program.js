import * as IRPTU from '@ceofyeast/prodchaincalculators-server/irptu'
import * as CALCULATORS from '@ceofyeast/prodchaincalculators-server/calculators'
import * as UTILITY from '@ceofyeast/prodchaincalculators-server/utility'
import fs from 'fs'

const prodChain = UTILITY.createProductionChainObject()
IRPTU.addIRPTU("inserter", 10, prodChain, "minute")
fs.writeFileSync('prodChain.json', JSON.stringify(prodChain, null, 2))
console.log('Production chain data written to prodChain.json')

// const demandOutput = {}
// CALCULATORS.calculateIntermediaryDemand("satellite", 100, demandOutput)
// fs.writeFileSync('prodChain.json', JSON.stringify(demandOutput, null, 2))
// console.log('Production chain data written to prodChain.json')
