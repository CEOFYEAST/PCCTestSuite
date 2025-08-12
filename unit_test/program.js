import * as IRPTU from '@ceofyeast/prodchaincalculators-server/irptu'
import * as CALCULATORS from '@ceofyeast/prodchaincalculators-server/calculators'
import * as UTILITY from '@ceofyeast/prodchaincalculators-server/utility'
import * as TRAVERSAL from '@ceofyeast/prodchaincalculators-server/traversal'
import fs from 'fs'

let prodChainObject = UTILITY.createProductionChainObject()
// fs.writeFileSync('program-output.json', JSON.stringify(prodChainObject, null, 2))
// console.log('Test data written to program-output.json')

prodChainObject = IRPTU.addIRPTU("satellite", 23, prodChainObject, "minute")
//IRPTU.addIRPTU("satellite", 10, prodChainObject, "minute")
// const traversalQueue = TRAVERSAL.buildLongestPathTraversal(prodChainObject.prodChain)
fs.writeFileSync('program-output.json', JSON.stringify(prodChainObject, null, 2))
console.log('Test data written to program-output.json')

// const demandOutput = {}
// CALCULATORS.calculateIntermediaryDemand("satellite", 100, demandOutput)
// fs.writeFileSync('prodChain.json', JSON.stringify(demandOutput, null, 2))
// console.log('Production chain data written to prodChain.json')
