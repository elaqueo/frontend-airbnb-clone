import { defineStore } from "pinia";
import { User } from "../libs/dtos/users.dto";

type State = {
  user: User | null;
};

const KEY = 'user';

export const useAuthStore = defineStore("auth", {
  state: (): State => {
    return { user: null };
  },
  actions: {
    setUser(user: User | null) {
      if (!!user) {
        sessionStorage.setItem(KEY, JSON.stringify(user));
      } else {
        sessionStorage.removeItem(KEY);
      }
      this.user = user;
    },
    loadUser() {
      const r = sessionStorage.getItem(KEY);
      this.user = !!r
        ? JSON.parse(r)
        : r;
    },
    logout() {
      sessionStorage.removeItem(KEY);
      this.user = null;
    },
  },
  getters: {
    isLogged(): boolean {
      return !!this.user?._id;
    },
    image(): string {
      return this.user?.image ?? '/img/placeholder.jpg';
    },
  }
});
