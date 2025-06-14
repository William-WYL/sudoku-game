import { create } from "zustand";

export const useSudokuStore = create((set) => ({
  selectedCell: null,
  setSelectedCell: (row, col) => set({ selectedCell: { row, col } })



}))

