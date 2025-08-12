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
        data: this.graphData,
        behaviors: ['drag-canvas', 'zoom-canvas'],
        layout: {
          type: 'antv-dagre',
          rankdir: 'LR',
          ranksep: 200,
          nodesep: 50,
          ranker: "tight-tree" ,
          align: 'UL',
          preventOverlap: true,
          controlPoints: true,
          nodeSpacing: 20,
          //radial: true
          // minlen: 2,              // Minimum edge length (forces more separation)
          // edgesep: 20,
        },
        edge: {
          type: 'cubic-horizontal',
          //router: 'orth',
          controlPoints: true,
          animation: {
            enter: false,
          },
          style: {
            lineWidth: 3,
            radius: 50,
            zIndex: 2,
            labelZIndex: 3,
            // router: {
            //   type: 'shortest-path',
            //   enableObstacleAvoidance: true
            // },

            labelAutoRotate: false,
            labelFontSize: 16,
            labelColor: '#fff',
            labelPlacement: 0.33,
            // labelOffsetY: 50,
            // labelOffsetX: -25,

            labelBackground: true,
            labelBackgroundFill: '#90ee90',
            labelBackgroundFillOpacity: 1,
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
            size: [90, 30],
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
                data: { thumbDir, thumbName, userDemand, intermDemand, timeUnit },
              } = d;

              const thumbsPath = `/assets/client_thumbs/${thumbDir}/${thumbName}`

              const nodeStyle = `"
                width: 80px; 
                height: 20px; 
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
                      <img src="${thumbsPath}" alt="${d.id}" style="width: 16px; height: 16px;" onerror="this.style.display='none';" />
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
    width: 80px; 
    height: 20px; 
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
