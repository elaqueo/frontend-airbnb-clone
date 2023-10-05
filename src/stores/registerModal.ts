import { defineStore } from "pinia";

type State = {
  isOpen: boolean;
};

export const useRegisterModal = defineStore("registerModal", {
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
