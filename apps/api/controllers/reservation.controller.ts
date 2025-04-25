import { Hono, type Context } from 'hono'
import { bookReservationCommand } from '@/domains/reservation/commands/book-reservation.command.ts'

const app = new Hono()

app.post('/', async (c: Context) => {
    const reservation = await bookReservationCommand()
    return c.json(reservation, 201)
})

export default app
