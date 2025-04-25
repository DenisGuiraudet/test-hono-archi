import { Hono } from 'hono/quick'
import adminController from './controllers/admin.controller.ts'

const app = new Hono()

app.route('/admin', adminController)

Deno.serve({ port: 3000 }, app.fetch)
