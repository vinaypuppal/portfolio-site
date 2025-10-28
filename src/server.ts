import {
  createStartHandler,
  defaultStreamHandler,
  defineHandlerCallback,
} from '@tanstack/react-start/server'

// Create the server handler for SSR
const handler = defineHandlerCallback((ctx) => {
  return defaultStreamHandler(ctx)
})

const fetch = createStartHandler(handler)

export default { fetch }
