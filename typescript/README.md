# Typescript

## 주요타입

```tsx
const n: number = 5;
const s: string = "String"
const b: boolean = "true
const a: any = "Hi"
const u: undefined = undefined
const l: null = null

// 함수를 구성하는 것
// 1. 들어오는 거 (매개변수)
// 2. 들어오는 걸 안에서 처리 (비지니스 로직)
// 3. 내보내는거 (리턴값 )

// 매개변수랑, 리턴값만 알려주면 된다!
function someFunc (value: number, gap?: number = 1): number {
  return value + gap
}
const someFunc: (someParam: string) => number = (someParam) => 5

// 객체
const o: { a: string, b: number } = { a: "hello", b: 100 }
```

## 함수 타입의 선언

- *매개변수*와 *반환타입*을 정의함으로써 함수타입을 정의
- 즉, 뭐가 들어오고 나가지를 정의하는 것!

```tsx
function someFunc(value: number, gap: number = 1): number {
  return value + gap;
}

// 리턴 value가 없을 때 - 1
function someFunc(value: number, gap: number = 1): void {
  console.log("안녕");
}

// 리턴 value가 없을 때 - 2
function someFunc(value: number, gap: number = 1): void {
  console.log("안녕");

  return;
}
```

## `interface` VS `type`

### interface

- 객체타입을 정의할때만 사용
- 확장(extends) 가능

```tsx
interface Point {
  id: number;
  name: string;
}
```

### type

- 좀 더 유연하게 타입 정의 가능 / 유니언 또는 인터섹션 타입을 쉽게 조합.
- 객체 뿐아니라 다양하게 타입 정의
- 확장(extends)은 불가하지만 타입별칭을 생성할 때 더 유연

```tsx
type Point = {
  x: number;
  y: string;
};

type ID = number | string;

const point: Point = { x: 10, y: 20 };
const userId: ID = "user123";
```

## as

컴퓨터가 추론하지 못하지만 우리는 타입을 알고 있을 떼 `as` 키워드를 사용하여 정확한 타입을 알려줄수 있다.(=type assertion)

- 컴터가 추론하지 못하는 타입을 우리가 저런식으로 알려주는건 좋지 않으니, 최대한 사용을 지양~!

```tsx
function someFunc(): string | number {
  return 5;
}

const a = someFunc() as number;
```

## Generic Type

<details>
<summary>한 번 정의한 함수가 다양하게 재사용 될 수 있는 이유는?</summary>
매개 변수를 받기 때문
</details>

<details>
<summary>그렇다면 한 번 정의한 타입을 다양하게 재사용하는 방법은?</summary>
- 타입에도 매개변수를 줄 수 있을까?
</details>
