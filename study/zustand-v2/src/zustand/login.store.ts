import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type LoginState = {
  isLoggedIn: boolean;
  logIn: () => void;
  logOut: () => void;
};

const useLoginStore = create<LoginState>()(
  persist(
    (set) => ({
      isLoggedIn: false,
      logIn: () => set(() => ({ isLoggedIn: true })),
      logOut: () => set(() => ({ isLoggedIn: false })),
    }),
    {
      name: "login-store",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useLoginStore;
