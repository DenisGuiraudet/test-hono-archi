import { Context, Hono } from 'hono'

const app = new Hono()

app.get('/', (c: Context) => c.json('list catalog'))

app.post('/', (c: Context) => c.json('create an item', 201))

app.get('/:ref', (c: Context) => c.json(`get ${c.req.param('ref')}`))

export default app
