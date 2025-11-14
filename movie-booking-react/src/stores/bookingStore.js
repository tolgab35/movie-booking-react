import { create } from "zustand";

export const useBookingStore = create((set) => ({
  selectedMovie: null,
  selectedDate: null,
  selectedTime: null,
  selectedSeats: [],
  totalPrice: 0,

  setMovie: (movie) => set({ selectedMovie: movie }),
  setDate: (date) => set({ selectedDate: date }),
  setTime: (time) => set({ selectedTime: time }),
  setSeats: (seats) => set({ selectedSeats: seats }),
  setTotalPrice: (price) => set({ totalPrice: price }),

  resetBooking: () =>
    set({
      selectedMovie: null,
      selectedDate: null,
      selectedTime: null,
      selectedSeats: [],
      totalPrice: 0,
    }),
}));
