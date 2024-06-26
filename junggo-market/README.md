# 중고마켓 만들기

## 넥스트의 Image

1. 이미지 최적화: Next.js가 자동으로 이미지 최적화하여 사용자에게 빠르게 전달

2. 레이아웃 제어

- layout="fill": 이미지를 부모 요소와 같은 크기로 채웁니다.
- layout="responsive": 이미지가 부모 요소의 크기에 반응하여 조정됩니다.
- layout="intrinsic": 이미지의 원본 비율을 유지하면서 최대 너비와 높이를 지정할 수 있습니다.
- layout="fixed": 고정된 너비와 높이로 이미지를 표시합니다.

3. 서버 사이드 렌더링: 검색 엔진 최적화에 유리 / 초기 로딩 성능 개선

4. 자동 저화질 이미지 처리: 자동으로 저화질 이미지 제공하여 페이지 초기 로드 속도 개선 / 사용자 스크롤시 고화질로 교체

5. 이미지 최적화 속성: 'quality', 'blurDataURL', 'placeholder', 'loading'등 여러 속성을 통해 이미지의 화질, 블러처러, 대체 텍스트, 로딩 방식을 지원

6. 외부 이미지 호스팅

### 이미지 비율

1. aspect

aspect 속성은 이미지의 너비와 높이를 지정하는 대신, 원하는 가로 세로 비율을 유지하면서 이미지를 자동으로 조정할 수 있게 함

```jsx
import Image from "next/image";

function MyComponent() {
  return (
    // aspect-auto, aspect-square, aspect-video등이 아닌 aspect-[4/3] 이런식으로 원하는 비율로도 지정 가능.
    <div className="relative aspect-[4/3]">
      <Image alt={title} src={imgUrl} fill />
    </div>
  );
}
```

## 파라미터화 하여 재사용 가능하게 한 제네릭 타입 매개변수

```jsx
export type SDeal<IsDetail extends boolean> = {
  id: number;
  title: string;
  imgURL: string;
  price: number;
  location: string;
  likesCount: number;

  seller?: {
    avatarImgURL: string;
    email: string;
  };

  createdAt?: number;
  content?: string;
  viewsCount?: number;
};
```

### 1. `<IsDetail extends boolean>`

true or false의 boolean타입 값을 기대한다는 것

- 제네릭 타입 매개변수: 제네릭 타입은 함수나 클래스가 여러 종류의 타입에 대해 동작할 수 있도록 일반화된 타입 정의
  <IsDetail>의 경우 boolean타입을 가질수 있는 매개변수

- 타입 파라미터의 제약: `extends boolean`은 boolean타입 또는 boolean 타입의 하위 타입만을 허용한다는 제약 설정. <IsDetail>은 반드시 true 또는 false가 되어야 함. 다른건 허용 안함!

- `<IsDetail extends boolean = false>` 이렇게 초기 값 지정

## 2. 활용

```jsx
export type SDeal<IsDetail extends boolean = false> = {
  id: number;
  title: string;
  imgURL: string;
  price: number;
  location: string;
  likesCount: number;
} & (IsDetail extends true
  ? {
      seller: {
        avatarImgURL: string;
        email: string;
      };

      createdAt: number;
      content: string;
      viewsCount: number;
    }
  : {});
```

이렇게 설정하고!

```jsx
const deal: SDeal<true> = {
  id: 111,
  title: "춘향골 만 원 한 박스 판매함",
  imgURL:
    "https://dnvefa72aowie.cloudfront.net/origin/article/202406/0c3fc4e63d2251a9348b80ddd5a087918089f7b02ec374e49cf9c87a4461fde9_0.webp?f=webp&q=95&s=1440x1440&t=inside",
  location: "서울 강동구 명일제2동",
  price: 9000,
  likesCount: 54,

  seller: {
    avatarImgURL:
      "https://d1unjqcospf8gs.cloudfront.net/assets/users/default_profile_80-c649f052a34ebc4eee35048815d8e4f73061bf74552558bb70e07133f25524f9.png",
    email: "blabla@sparta.com",
  },
  content: "맛도 좋아 영양도 좋아 춘향골 복숭아, 물복 딱복 다 있습니다.",
  createdAt: 1719388055073,
  viewsCount: 23212,
};
```

이렇게 사용~!

그러면 .. ~ 타입 매개변수를 사용해 함수나 클래스 내에서 조건부 로직 구현 가능
특정 상황에 따라 다른 타입을 반환하도록 설계하게 함
