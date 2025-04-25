import { ReservationRepository } from "@/libs/mongodb-tenant/repositories/reservation.repository.ts";

export interface BookReservationCommand {
    reservationId: string
    userId: string
    bookId: string
    startDate: Date
    endDate: Date
}

export async function bookReservationCommand(): Promise<BookReservationCommand> {
    const reservation = await ReservationRepository.createReservation({
        userId: 'user-123',
        bookId: 'book-123',
        startDate: new Date(),
        endDate: new Date(new Date().setDate(new Date().getDate() + 7)),
    })
    return {
        reservationId: reservation._id.toString(),
        userId: reservation.userId,
        bookId: reservation.bookId,
        startDate: reservation.startDate,
        endDate: reservation.endDate,
    }
}
