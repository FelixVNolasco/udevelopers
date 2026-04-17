// stores/modalStore.ts
import { create } from "zustand";
import { CarrouselOfExternalLinksInterface } from "@/utils/interfaces";

type ModalState = {
  isOpen: boolean;
  selectedServiceCarrousel: CarrouselOfExternalLinksInterface[] | null;
  openModal: (serviceCarrousel: CarrouselOfExternalLinksInterface[]) => void;
  closeModal: () => void;
};

export const useCarrouselModalStore = create<ModalState>((set) => ({
  isOpen: false,
  selectedServiceCarrousel: null,
  openModal: (serviceCarrousel) =>
    set({ isOpen: true, selectedServiceCarrousel: serviceCarrousel }),
  closeModal: () => set({ isOpen: false, selectedServiceCarrousel: null }),
}));
