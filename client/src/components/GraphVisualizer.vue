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
        width: 1500,
        height: 750,
        data: this.graphData, // Use graphData instead of this.graph
        behaviors: ['drag-canvas', 'zoom-canvas'],
        layout: {
          type: 'antv-dagre',
          ranksep: 100,
          nodesep: 50,
          nodeSize: [100, 20],
        },
        edge: {
          type: 'polyline',
          
          animation: {
            enter: false,
          },
          style: {
            lineWidth: 4,
            radius: 50,
            // router: {
            //   type: 'shortest-path'
            // },

            labelAutoRotate: false,
            labelFontSize: 16,
            labelColor: '#fff',
            labelPlacement: 0.33,
            // labelOffsetY: 50,
            // labelOffsetX: -25,

            labelBackground: true,
            labelBackgroundFill: '#90ee90',
            labelBackgroundFillOpacity: 0.5,
            labelBackgroundHeight: 100,
            labelBackgroundRadius: 25,

            endArrow: true, // End arrow
            endArrowType: 'vee', // Arrow type
            endArrowSize: 14, // Arrow size
          }
        },
        node: {
          type: 'html',
          style: {
            size: [100, 20],
            innerHTML: (d) => {
              const ICON_MAP = {
                error: '&#10060;',
                overload: '&#9889;',
                running: '&#9989;',
              };

              const COLOR_MAP = {
                error: '#f5222d',
                overload: '#faad14',
                running: '#52c41a',
              };

              const {
                data: { userDemand, intermDemand, timeUnit },
              } = d;

              const nodeStyle = `"
                width: 80%; 
                height: 80%; 
                background: lightgreen; 
                color: #fff;
                user-select: none;
                padding: 10px;
                border: 1px solid lightgray;
                border-radius: 8px;
              "`;

              const nodeContentStyle = `"
                display: flex;
                flex-direction: row;
              "`;

              const nodeItemStyle = `"
                font-weight: bold; 
                font-size: 14px;
                flex-grow: 1;
              "`;

              return `
                <div class="node" style=${nodeStyle}>
                  <div class="node__content" style=${nodeContentStyle}>
                    <div class="node__icon" style=${nodeItemStyle}>
                      Icon
                    </div>
                    <div class="node__seperator" style=${nodeItemStyle}>
                      :
                    </div>
                    <div class="node__demand" style=${nodeItemStyle}>
                      ${intermDemand + userDemand}
                    </div>
                  </div>
                </div>`;
            },
          },
        },
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

/* .node {
    width: 100%; 
    height: 100%; 
    background: lightgreen; 
    color: #fff;
    user-select: none;
    display: flex; 
    padding: 10px;
    border: 1px solid lightgray;
    border-radius: 8px;
}

.node__demand, .node__seperator, .node__icon {
  font-weight: bold; 
  font-size: 14px;
} */
</style>
