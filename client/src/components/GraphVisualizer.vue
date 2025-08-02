<template>
  <div class="container-GraphVisualizer">
    <div v-if="!graphLoaded">Graph loading</div>
    <div v-if="graphLoaded">
      <div id="graph-container">
        <!-- <pre>{{ graph }}</pre> -->
      </div>
    </div>
  </div>
  
</template>

<script>
import * as GraphTransformer from '@ceofyeast/prodchaincalculators/graph'
import { Graph } from '@antv/g6'
import { addRecipesLoadedListener, recipesLoaded } from '@ceofyeast/prodchaincalculators/recipes'
import Config from '@ceofyeast/prodchaincalculators/config'

export default {
  name: 'GraphVisualizer',
  data() {
    return {
      graphData: {},
      graph: {},
      graphLoaded: false
    }
  },
  methods: {
    loadAndRenderGraph() {
      console.log('Loading and rendering graph')
      this.graphLoaded = true

      this.$nextTick(() => {
        this.constructGraphData()
        console.log("Graph Data", this.graphData)
        this.constructGraph()
        console.log("Graph", this.graph.getData())
        console.log("Graph Edges", this.graph.getEdgeData())
        this.renderGraph()
      })
    },
    constructGraphData() {
      this.graphData = GraphTransformer.getProdChainAsGraph(this.prodChainObject)
    },
    constructGraph() {
      const container = document.getElementById('graph-container')
      console.log("Container", container)
      
      this.graph = new Graph({
        container: container,
        width: 5000,
        height: 5000,
        data: this.graphData, // Use graphData instead of this.graph
        behaviors: ['drag-canvas', 'zoom-canvas'],
        layout: {
          type: 'antv-dagre',
          ranksep: 50,
          nodesep: 50,
          sortByCombo: true,
        },
        node: {
          type: 'circle',
          style: {
            size: 30,
            fill: '#ADD8E6',
            stroke: '#6495ED',
            lineWidth: 2,
          },
          labelCfg: {
            style: {
              fill: '#333',
              fontSize: 12,
            },
          },
        },
        // behaviors: ['drag-element', 'drag-canvas', 'zoom-canvas'],
      })

    },
    renderGraph() {
      this.graph.render()
    },
  },
  props: {
    prodChainObject: Object
  },
  mounted() {
    // // Only load if recipes are already loaded and we have data
    // if (recipesLoaded && this.prodChainObject && Object.keys(this.prodChainObject).length > 0) {
    //   this.loadAndRenderGraph()
    // }
    // // Add listener for when recipes load
    // addRecipesLoadedListener(this.loadAndRenderGraph)
    // Config.initialRecipesLoad = true
    this.loadAndRenderGraph()
  }
}
</script>

<style scoped>
#graph-container {
  width: 100%;
  height: 500px;
}

.container-GraphVisualizer {
  padding: 20px;
}
</style>
