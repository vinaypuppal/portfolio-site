import { createStartHandler, defaultStreamHandler } from '@tanstack/react-start/server'
import { createRouter } from './router'

// Create the server handler for SSR
export default createStartHandler({
  createRouter,
})(defaultStreamHandler)
