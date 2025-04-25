import { type IReservation, Reservation } from "@/libs/mongodb-tenant/models/reservation.model.ts";

export const ReservationRepository = {
  async createReservation(reservationData: Pick<IReservation, 'bookId' | 'userId' | 'startDate' | 'endDate'>): Promise<IReservation> {
    const reservation = new Reservation(reservationData);
    const savedReservation = await reservation.save();
    return savedReservation.toObject() as IReservation;
  },

  async getReservationById(id: string): Promise<IReservation | null> {
    const reservation = await Reservation.findById(id).exec();
    return reservation ? reservation.toObject() as IReservation : null;
  },

  async getAllReservations(): Promise<IReservation[]> {
    const reservations = await Reservation.find().exec();
    return reservations.map(reservation => reservation.toObject() as IReservation);
  },

  async updateReservation(id: string, reservationData: Omit<Partial<IReservation>, '_id'>): Promise<IReservation | null> {
    const updatedReservation = await Reservation.findByIdAndUpdate(id, reservationData, { new: true });
    return updatedReservation ? updatedReservation.toObject() as IReservation : null;
  },

  async deleteReservation(id: string): Promise<void> {
    await Reservation.findByIdAndDelete(id);
  }
} as const
