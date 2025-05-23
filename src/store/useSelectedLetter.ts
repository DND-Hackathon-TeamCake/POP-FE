import { create } from "zustand";
import { letter } from "@/types/letter";

interface SelectedLetterState {
  selectedLetter: letter | null;
  setSelectedLetter: (letter: letter) => void;
  clearSelectedLetter: () => void;
}

export const useSelectedLetter = create<SelectedLetterState>((set) => ({
  selectedLetter: null,
  setSelectedLetter: (letter) => set({ selectedLetter: letter }),
  clearSelectedLetter: () => set({ selectedLetter: null }),
}));
