# Fruitables - React + Tailwind CSS

HTML 템플릿을 React + Tailwind CSS로 변환하는 연습 예제입니다.

## 🚀 기술 스택

- **React 19** - 사용자 인터페이스 라이브러리
- **Tailwind CSS v3** - 유틸리티 기반 CSS 프레임워크
- **JavaScript (JSX)** - TypeScript 대신 JavaScript 사용
- **Font Awesome** - 아이콘 라이브러리
- **Google Fonts** - Open Sans 폰트

## 🎨 주요 기능

- ✅ **완전 반응형 디자인** - 모바일, 태블릿, 데스크톱 지원
- ✅ **현대적인 UI/UX** - Tailwind CSS로 스타일링
- ✅ **컴포넌트 기반 아키텍처** - 재사용 가능한 React 컴포넌트
- ✅ **제품 그리드** - 호버 효과와 애니메이션
- ✅ **네비게이션** - 드롭다운 메뉴 및 모바일 햄버거 메뉴
- ✅ **검색 및 장바구니** - 사용자 인터랙션 요소

## 🛠️ 사용 가능한 스크립트

프로젝트 디렉토리에서 다음 명령어를 실행할 수 있습니다:

### `npm start`

개발 모드에서 앱을 실행합니다.\
브라우저에서 [http://localhost:3001](http://localhost:3001)을 열어 확인할 수 있습니다.

코드를 수정하면 페이지가 자동으로 새로고침됩니다.\
콘솔에서 린트 오류도 확인할 수 있습니다.

### `npm test`

테스트 러너를 대화형 감시 모드로 시작합니다.\
자세한 내용은 [테스트 실행하기](https://facebook.github.io/create-react-app/docs/running-tests)를 참조하세요.

### `npm run build`

프로덕션용 앱을 `build` 폴더에 빌드합니다.\
React를 프로덕션 모드로 올바르게 번들링하고 최상의 성능을 위해 빌드를 최적화합니다.

빌드가 압축되고 파일명에 해시가 포함됩니다.\
앱을 배포할 준비가 완료됩니다!

### `npm run eject`

**주의: 이는 되돌릴 수 없는 작업입니다. 한 번 `eject`하면 되돌릴 수 없습니다!**

빌드 도구와 설정 선택에 만족하지 않는다면 언제든지 `eject`할 수 있습니다.

## 📁 프로젝트 구조

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.jsx      # 헤더 및 네비게이션
│   │   └── Footer.jsx      # 푸터 및 뉴스레터
│   └── sections/
│       ├── HeroSection.jsx     # 메인 히어로 섹션
│       └── FeaturedProducts.jsx # 제품 그리드
├── App.jsx                 # 메인 앱 컴포넌트
└── index.jsx              # 앱 진입점
```

## 🎨 커스텀 컬러 테마

- **Primary**: #81C408 (그린)
- **Secondary**: #FFB524 (오렌지)
- **폰트**: Open Sans

## 📖 더 알아보기

React에 대해 더 배우려면 [React 공식 문서](https://reactjs.org/)를 확인하세요.\
Tailwind CSS에 대해서는 [Tailwind CSS 공식 문서](https://tailwindcss.com/)를 참조하세요.
