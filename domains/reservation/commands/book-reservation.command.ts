
export interface BookReservationCommand {
    reservationId: string
    userId: string
    bookId: string
    startDate: Date
    endDate: Date
}

export function bookReservationCommand(): BookReservationCommand {
    return {
        reservationId: '12345',
        userId: 'user-123',
        bookId: 'book-123',
        startDate: new Date(),
        endDate: new Date(new Date().setDate(new Date().getDate() + 7)), // 7 days later
    }
}
