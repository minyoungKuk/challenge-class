import { create } from "zustand";
import { persist } from "zustand/middleware";

const useLoggedIn = create(
  persist(
    (set) => ({
      isLoggedIn: false,
      logIn: () => set(() => ({ isLoggedIn: true })),
      logOut: () => set(() => ({ isLoggedIn: false })),

      // toggleIsLoggedIn: () =>
      //   set((prevState) => ({ isLoggedIn: !prevState.isLoggedIn })),

      // 이런건 언제 쓰냐? 위의 예제 보다 좀더 복잡한 상황.. 예를 들어 통신...이 껴있고..
      // 그리고 set 안에서는 async를 할 수 없어서 이렇게 미리 해서 넣어주래. . .
      toggleIsLoggedIn: async () => {
        const prevState = get();
        const currentLoggedIn = prevState.isLoggedIn;

        await fetch(`/blabla/${currentLoggedIn}`);

        set({ isLoggedIn: !prevState.isLoggedIn });
      },
    }),
    {
      name: "login-store",
      // storage를 안쓰면 localStorage, 밑에 처럼 쓰면 세션 스토리지
      // storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useLoggedIn;

// // 👑 튜터님이 제시해주신 묶어쓰는 방법
// const useLoggedIn2 = create((set) => ({
//   isLoggedIn: false,
//   functions: {
//     logIn: () => set(() => ({ isLoggedIn: true })),
//     logOut: () => set(() => ({ isLoggedIn: false })),
//   }
// }))

// // 👑 사용하는 방법
// const { logIn, logOut } = useLoggedIn(state => state.functions)

////// immer produce와 함께 사용
// import { produce } from "immer";
// import { create } from "zustand";

// const useLoginStore = create((set) => ({
//   isLoggedIn: false,
//   logIn: () =>
//     set(
//       produce((draft) => {
//         draft.isLoggedIn = true;
//       })
//     ),
//   logOut: () =>
//     set(
//       produce((draft) => {
//         draft.isLoggedIn = false;
//       })
//     ),
// }));

// export default useLoginStore;
