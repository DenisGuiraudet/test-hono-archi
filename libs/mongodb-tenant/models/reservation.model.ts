import { Document, Schema, model } from 'mongoose'

export interface IReservation extends Document {
  _id: Schema.Types.ObjectId
  userId: string
  bookId: string
  startDate: Date
  endDate: Date
}

const reservationSchema = new Schema<IReservation>(
  {
    userId: { type: String, required: true, match: /^[a-fA-F0-9]{24}$/ },
    bookId: { type: String, required: true, match: /^[a-fA-F0-9]{24}$/ },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
  },
  { timestamps: true }
)

export const Reservation = model<IReservation>('Reservation', reservationSchema)
