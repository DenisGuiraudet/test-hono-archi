import { Hono } from 'hono'
import catalogController from './controllers/catalog.controller.ts'
import reservationController from './controllers/reservation.controller.ts'
import { installMongodbTenant } from "../../libs/mongodb-tenant/install.ts";

await installMongodbTenant()

const app = new Hono()

app.route('/catalog', catalogController)
app.route('/reservations', reservationController)

Deno.serve({ port: 3000 }, app.fetch)
