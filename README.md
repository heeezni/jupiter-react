# Jupiter - React + Vite + Tailwind CSS

HTML 템플릿을 React + Vite + Tailwind CSS로 변환하는 연습 예제입니다.

## 🚀 기술 스택

- **React 19** - 사용자 인터페이스 라이브러리
- **Vite** - 빠른 빌드 도구 및 개발 서버
- **Tailwind CSS v3** - 유틸리티 기반 CSS 프레임워크
- **JavaScript (JSX)** - TypeScript 대신 JavaScript 사용
- **Vitest** - 빠른 테스트 프레임워크
- **Font Awesome** - 아이콘 라이브러리
- **Google Fonts** - Open Sans 폰트

## 🎨 주요 기능

- ✅ **완전 반응형 디자인** - 모바일, 태블릿, 데스크톱 지원
- ✅ **현대적인 UI/UX** - Tailwind CSS로 스타일링
- ✅ **컴포넌트 기반 아키텍처** - 재사용 가능한 React 컴포넌트
- ✅ **제품 그리드** - 호버 효과와 애니메이션
- ✅ **네비게이션** - 드롭다운 메뉴 및 모바일 햄버거 메뉴
- ✅ **검색 및 장바구니** - 사용자 인터랙션 요소

## 🛠️ 시작하기

### 1. 저장소 복제

```bash
git clone https://github.com/your-username/jupiter-react.git
cd jupiter-react
```

### 2. 의존성 설치

프로젝트에 필요한 패키지를 설치합니다.

```bash
npm install
```

## ⚙️ 사용 가능한 스크립트

프로젝트 디렉토리에서 다음 명령어를 실행할 수 있습니다:

### `npm run dev`

Vite 개발 서버를 시작합니다.
브라우저에서 [http://localhost:5173](http://localhost:5173)을 열어 확인할 수 있습니다.

코드를 수정하면 페이지가 즉시 새로고침됩니다 (HMR - Hot Module Replacement).
Create React App보다 훨씬 빠른 개발 서버 시작 속도를 제공합니다.

### `npm run build`

프로덕션용 앱을 `build` 폴더에 빌드합니다.
TypeScript 타입 체크 후 Vite로 최적화된 빌드를 생성합니다.

빌드가 압축되고 파일명에 해시가 포함됩니다.
앱을 배포할 준비가 완료됩니다!

### `npm run preview`

빌드된 앱을 로컬에서 미리보기할 수 있습니다.
프로덕션 빌드가 올바르게 작동하는지 확인할 때 유용합니다.

### `npm test`

Vitest로 테스트를 실행합니다.
빠르고 현대적인 테스트 러너로 Jest보다 빠른 성능을 제공합니다.

## 📁 프로젝트 구조

```
jupiter-react/
├── public/              # 정적 에셋 (이미지, 폰트 등)
├── src/
│   ├── assets/            # CSS, 이미지 등 리소스
│   ├── components/        # 재사용 가능한 UI 컴포넌트
│   │   ├── auth/          # 인증 관련 컴포넌트 (로그인 모달 등)
│   │   ├── layout/        # 페이지 레이아웃 (헤더, 푸터)
│   │   └── sections/      # 페이지의 각 섹션
│   ├── pages/             # 라우팅될 페이지 컴포넌트
│   ├── App.jsx            # 메인 앱 컴포넌트 (라우터 설정)
│   ├── index.css          # 전역 CSS 스타일
│   └── index.jsx          # 애플리케이션 진입점
├── .gitignore           # Git이 무시할 파일/폴더 목록
├── index.html           # Vite 앱의 HTML 템플릿
├── package.json         # 프로젝트 의존성 및 스크립트
├── tailwind.config.js   # Tailwind CSS 설정
└── vite.config.ts       # Vite 설정
```

## 🎨 커스텀 컬러 테마

- **Primary**: #81C408 (그린)
- **Secondary**: #FFB524 (오렌지)
- **폰트**: Open Sans

## 🚀 배포

`npm run build` 명령어를 실행하여 생성된 `dist` 폴더의 내용을 웹 서버에 배포할 수 있습니다.
Netlify, Vercel, GitHub Pages와 같은 정적 호스팅 서비스를 사용하면 쉽게 배포할 수 있습니다.

## 📖 더 알아보기

- **React**: [React 공식 문서](https://reactjs.org/)
- **Vite**: [Vite 공식 문서](https://vitejs.dev/)
- **Tailwind CSS**: [Tailwind CSS 공식 문서](https://tailwindcss.com/)
- **Vitest**: [Vitest 공식 문서](https://vitest.dev/)

## ⚡ Vite의 장점

- **빠른 개발 서버**: 네이티브 ES 모듈 기반으로 즉시 서버 시작
- **Hot Module Replacement (HMR)**: 코드 변경 시 즉시 반영
- **최적화된 빌드**: Rollup 기반의 효율적인 프로덕션 빌드
- **플러그인 생태계**: 풍부한 플러그인으로 확장 가능