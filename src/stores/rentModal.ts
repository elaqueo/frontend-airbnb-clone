import { defineStore } from "pinia";

type State = {
  isOpen: boolean;
};

export const useRentModal = defineStore("rentModal", {
  state: (): State => {
    return { isOpen: false };
  },
  actions: {
    open() {
      this.isOpen = true;
    },
    close() {
      this.isOpen = false;
    },
  },
});
