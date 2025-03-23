#!/usr/bin/env node

'use strict'

const Fastify = require('fastify')
const PORT = 3002
const HOST = 'localhost'

const app = Fastify({
  logger: true,
  pluginTimeout: 10000
})
app.decorateRequest('app', {
  getter () {
    return app
  }
})

app.register(require('@fastify/cors'), {})
app.register(require('@fastify/formbody'), {})
app.register(require('./routes/recipes.js'))

// Start listening.
app.listen({ port: PORT, host: HOST}, (err, address) => {
  if (err) {
    console.error(err);
    throw err;
  }
  console.log(`Fastify server is running on ${address}`);
});

  