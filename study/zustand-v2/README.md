# zustand

## 1. 함수를 넣고, 객체를 리턴

```jsx
const useStore = create(() => ({}));
```

## 2. set(함수)을 꺼내 쓴디~!

```jsx
const useStore = create((set) => ({
  isLoggedIn: false, // 갖고 싶은 상태를 바로 넣는다
  logIn: () =>
    set(() => {
      isLoggedIn: true;
    }), // 액션 핸들링도 바로 넣는다~!
  logOut: () =>
    set(() => {
      isLoggedIn: false;
    }),
}));
```

## 3. 구조분해 할당으로 가져오고 싶을땐? `useShallow`

```jsx
import { useShallow } from "zustand/react/shallow";
import useLoginStore from "../zustand/login.store";

const Button = () => {
  // const logIn = useLoginStore((state) => state.logIn);
  // const logOut = useLoginStore((state) => state.logOut);

  const { logIn, logOut } = useLoginStore(
    useShallow((state) => ({
      logIn: state.logIn,
      logOut: state.logOut,
    }))
  );

  console.log("button rerendering");

  return (
    <div>
      <button onClick={logIn}> 로그인하기 </button>
      <button onClick={logOut}> 로그아웃하기 </button>
    </div>
  );
};

export default Button;
```

useShallow를 사용하지 않고 그냥 구조분해 할당을 하면 zustand가 바라보는 state는 useLoginStore 객체 자체이기에 isLoggedIn상태가 변경되어 리렌더링이 일어나게 된다.

## 4. zustand는 Async action을 기본으로 지원한다~!!!!!

```jsx
// 공식문서 코드

const useFishStore = create((set) => ({
  fishies: {},
  fetch: async (pond) => {
    const response = await fetch(pond);
    set({ fishies: await response.json() });
  },
}));
```

## 5-1. immer.js: 불변성을 유지하면서 객체를 업데이트할 수 있도록 도와주는 라이브러리

- 불변성을 유지하면서 상태를 업데이트하는 것을 쉽게 만들어줌.
- 상태 객체가 중첩된 경우, 불변성을 유지하면서 상태를 간편하게 업데이트하고자 할 때 사용.

- 설치: `npm install immer`

- zustand는 1dept까지만 관리해주기에, 그 이상을 관리하려면 immer.js의 도움이 필요 (= Zustand가 내부적으로 객체의 변경 사항을 얕은 비교(shallow comparison)를 통해 감지하여 React 컴포넌트의 리렌더링을 관리한다는 것을 의미)
- Zustand를 사용할 때, 객체의 깊은 구조를 관리해야 할 경우 Immer.js를 함께 사용하여 상태의 불변성을 보다 쉽게 유지할 수 있음

```jsx
import {produce} from "immer"

const nextState = produce(수정본을 만들고 싶은 원본, draft => {
    draft[1].done = true
    draft.push({title: "Tweet about it"})
})
```

## 5-2. immer middleware

immer로 이렇게 감싸주고 사용하면된다

```jsx
import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

type State = {
  count: number
}

type Action = {
  increment: (qyt: number) => void
  decrement: (qyt: number) => void
}

export const useCountStore = create<State & Action>()( // 상태와 액션을 동시에 정의
  immer(() => ({
    count: 0,
    increment: (qty: number) =>
      set((state) => {
        state.count += qty
      }),
    decrement: (qty: number) =>
      set((state) => {
        state.count -= qty
      })
  }))
)
```

## 5-3. Persist middleware: browser storage에 데이터 보관

- 상태의 영속성을 관리하고, 애플리케이션이 다시 시작되더라도 상태를 유지할 수 있게 해줌.
- 상태를 로컬 스토리지, 세션 스토리지 또는 다른 저장소에 저장하여 애플리케이션 재시작 시 상태를 복원하고자 할 때 사용.

```jsx
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useFishSotre = create(
  persist(
    (set, get) => ({
      fishes: 0,
      addAFish: () => set({ fishes: get().fishes + 1 }),
    }),
    {
      name: "food-storage",
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, localStorage
    }
  )
);
```
