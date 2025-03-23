<template>
  <div>
    <button @click="createFactory()">Create Factory</button>
    <button @click="addToFactory()">Add To Factory</button>
    <div>{{ loadedFactory }}</div>
    <div>"base URL" + {{ baseURL }}</div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import * as IRPTU from '@ceofyeast/prodchaincalculators/irptu'
import * as UTILITY from '@ceofyeast/prodchaincalculators/utility'
import {baseURL} from '@ceofyeast/prodchaincalculators/config'

export default {
  name: 'App',
  data() {
    return {
      loadedFactory: {},
      baseURL: baseURL
    }
  },
  methods: {
    createFactory(){
      this.loadedFactory = UTILITY.createProductionChain()
    },
    addToFactory(){
      IRPTU.addIRPTU("inserter", 100, this.loadedFactory)
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
