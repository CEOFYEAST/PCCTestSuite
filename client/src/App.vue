<template>
  <div>
    <div style="margin-bottom: 20px;">
      <button @click="createFactory()">Create/Clear Factory</button>
    </div>
    <div style="margin-bottom: 20px; border: 1px solid black; padding: 10px;">
      <div style="margin-bottom: 10px;">
      <label for="itemID">Enter Item ID</label>
      <input id="itemID" type="text" v-model="itemID" style="margin-left: 10px;" />
      </div>
      <div style="margin-bottom: 10px;">
      <label for="itemIRPTU">Enter Item IRPTU</label>
      <input id="itemIRPTU" type="number" v-model="itemIRPTU" style="margin-left: 10px;" />
      </div>
      <div>
      <button @click="addToFactory()" style="margin-right: 10px;">Add Specified Item to the Factory</button>
      <button @click="removeFromFactory()">Remove Specified Item from the Factory</button>
      </div>
    </div>
    <div style="margin-bottom: 20px;">
      <button @click="addOneOfEach()">Add One of Each Item to the Factory</button>
    </div>
    <div style="margin-bottom: 20px; border: 1px solid black; padding: 10px;">
      <label for="timeUnit">Select Time Unit</label>
      <select id="timeUnit" v-model="selectedTimeUnit" @change="changeTimeUnit(selectedTimeUnit)" style="margin-left: 10px;">
      <option value="second">Second</option>
      <option value="minute">Minute</option>
      <option value="hour">Hour</option>
      </select>
    </div>
      <h3>Time Unit</h3>
        <div style="border: 1px solid black; margin-bottom: 10px;">{{ timeUnit }}</div>
    <!-- </div> -->
    <div>
      <h3>User Input</h3>
      <div v-for="(value, key) in userInput" :key="key" style="border: 1px solid black; margin-bottom: 10px;">
      <div>{{ key }}: {{ value }}</div>
      </div>
    </div>
    <div>
      <h3>Production Chain</h3>
      <div v-for="(value, key) in prodChain" :key="key" style="border: 1px solid black; margin-bottom: 10px;">
        <div>{{ key }}: {{ value }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import * as IRPTU from '@ceofyeast/prodchaincalculators/irptu'
import * as UTILITY from '@ceofyeast/prodchaincalculators/utility'
import config from '@ceofyeast/prodchaincalculators/config'

export default {
  name: 'App',
  data() {
    return {
      loadedFactory: {},
      baseURL: config.baseURL,
      itemID: "inserter",
      itemIRPTU: 10,
      userInput: {},
      selectedTimeUnit: "" // Default value for the time unit
    }
  },
  computed: {
    prodChain() {
      return this.loadedFactory.prodChain
    },
    // userInput() {
    //   return UTILITY.getUserDemand(this.prodChain)
    // },
    timeUnit() {
      return this.loadedFactory.timeUnit
    }
  },
  methods: {
    createFactory(){
      this.loadedFactory = UTILITY.createProductionChainObject()
      this.userInput = UTILITY.getUserDemand(this.prodChain)
    },
    addToFactory(){
      try {
        IRPTU.addIRPTU(this.itemID, this.itemIRPTU, this.loadedFactory)
        this.userInput = UTILITY.getUserDemand(this.prodChain)
      } catch(err){
        console.log("Error Message: " + err.message)
      }
    },
    removeFromFactory(){
      IRPTU.subtractIRPTU(this.itemID, this.itemIRPTU, this.loadedFactory)
      this.userInput = UTILITY.getUserDemand(this.prodChain)
    },
    changeTimeUnit(newTimeUnit){
      UTILITY.recalculateTimeUnit(this.loadedFactory, newTimeUnit)
      this.userInput = UTILITY.getUserDemand(this.prodChain)
    },
    addOneOfEach(){
      let itemIDs = UTILITY.getItemIDs()
      for(let i = 0; i < itemIDs.length; i++){
        IRPTU.addIRPTU(itemIDs[i], 1, this.loadedFactory)
      }
      this.userInput = UTILITY.getUserDemand(this.prodChain)
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
