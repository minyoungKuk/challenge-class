# tanstack query

## 등장 배경

Redux를 사용한 전역적 비동기 상태 관리(서버 상태 관리) 넘 여렵고 복잡해서 ㅎㅎ

- 클라이언트 상태 관리
- 서버 상태 관리

## 기본 개념

1. `QueryClient`를 만든다! -> 얘도 context를 이용하여 만들어 진거군 . . .
2. `useQuery`와 `useMutation`이 포인트~!
   2-1. useQuery: 데이터를 읽기 위한 훅 (Read)
   2-2. useMutation: 데이터를 조작하기 위해 사용 (Create, Update, Delete)

```jsx
const {} = useQuery(option);
const {} = useMutation(option);
```

3. Devtools
   설치: `npm i @tanstack/react-query-devtools`

## 사용

### `use Query`

```jsx
useQuery({
   queryKey: 가져온 데어티터를 어떤 키에 사용, .// 쿼리키는 배열로! 쿼리키의 첫번째 요소는 모델명을 string으로, 두번째 요소는 데이터를 설명하는 정보를 object로!
   queryFn: 데이터를 가져오는 함수 // 요긴 비동기 함수가 들어가야 함
})
```

### `useMutation`

```jsx
const { isPending, mutate } = useMutation({
  mutationFn: () => axios.post(ENDPOINT, { value }),
  onSuccess: (result) => {
    // mutationFn의 result를 받을수있음
    console.log(result);
    alert("상공했어");
  },
  onError: () => {
    alert("실패했어");
  },
});
```

try catch문 없이 제공되는 onSuccess, onError로 처리하면된당
