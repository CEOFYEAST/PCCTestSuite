<template>
  <div>
    <!-- View Switcher Interface -->
    <div style="margin-bottom: 30px; text-align: center;">
      <button 
        @click="switchView('production')" 
        :style="getButtonStyle('production')"
      >
        IRPTU Input Menu
      </button>
      <button 
        @click="switchView('new')" 
        :style="getButtonStyle('new')"
      >
        PC Graph Visualizer
      </button>
    </div>

    <!-- Component Views -->
    <div>
      <ProductionChainView 
        v-if="currentView === 'production'" 
        :prodChainObject="prodChainObject"
        @update-prod-chain="updateProdChain"
      />
      <NewComponent 
        v-if="currentView === 'new'" 
        :prodChainObject="prodChainObject"
      />
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ProductionChainView from './components/InputMenu.vue'
import NewComponent from './components/GraphVisualizer.vue'
import * as UTILITY from '@ceofyeast/prodchaincalculators/utility'

export default {
  name: 'App',
  components: {
    HelloWorld,
    ProductionChainView,
    NewComponent
  },
  data() {
    return {
      currentView: 'production', // Default to production chain view
      prodChainObject: {} // This will hold the production chain data
    }
  },
  methods: {
    switchView(view) {
      this.currentView = view
    },
    updateProdChain(newProdChainObject) {
      this.prodChainObject = newProdChainObject
    },
    getButtonStyle(view) {
      const baseStyle = {
        padding: '12px 24px',
        margin: '0 5px',
        border: '2px solid #007bff',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
        fontWeight: 'bold',
        transition: 'all 0.3s ease'
      }
      
      if (this.currentView === view) {
        // Selected button style
        return {
          ...baseStyle,
          backgroundColor: '#007bff',
          color: 'white'
        }
      } else {
        // Unselected button style
        return {
          ...baseStyle,
          backgroundColor: 'white',
          color: '#007bff'
        }
      }
    }
  },
  mounted() {
    // Initialize with an empty production chain object
    this.prodChainObject = UTILITY.createProductionChainObject()
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
