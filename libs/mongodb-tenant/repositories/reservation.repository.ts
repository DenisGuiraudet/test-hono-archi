import { type IReservation, Reservation } from "../models/reservation.model.ts";

export const ReservationRepository = {
  async createReservation(reservationData: Omit<IReservation, '_id'>) {
    const reservation = new Reservation(reservationData);
    return await reservation.save();
  },

  async getReservationById(id: string) {
    return await Reservation.findById(id);
  },

  async getAllReservations() {
    return await Reservation.find();
  },

  async updateReservation(id: string, reservationData: Omit<Partial<IReservation>, '_id'>) {
    return await Reservation.findByIdAndUpdate(id, reservationData, { new: true });
  },

  async deleteReservation(id: string) {
    return await Reservation.findByIdAndDelete(id);
  }
} as const
