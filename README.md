#  소셜 커뮤니티 앱 '커넥트' (Connect Application)

[![React Native](https://img.shields.io/badge/React%20Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactnative.dev/) [![Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)](https://expo.dev/) [![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

특정 관심사를 가진 사용자들이 모여 소통하고 정보를 공유할 수 있는 커뮤니티 기반의 소셜 애플리케이션입니다. 1인 개발으로 진행 중이며, 개발 과정을 Velog에 기록하고 있습니다.

---

##  현재까지 구현된 기능 (Features)

> MVP(최소 기능 제품)의 UI 구현 단계에 있습니다. 모든 데이터는 현재 Mock Data를 사용합니다.

-   **내비게이션 구조 (Expo Router)**
    -   `Stack` 내비게이터를 사용해 `Tabs`와 `Modal` 화면의 관계를 정의 (`app/_layout.tsx`)
    -   `Tabs` 내비게이터를 사용한 5개의 하단 탭 메뉴 구성 (`app/(tabs)/_layout.tsx`)
    -   안드로이드 하단 바 겹침 문제를 `useSafeAreaInsets`으로 해결

-   **공통 헤더 UI**
    -   `react-native-svg`를 사용한 커스텀 SVG 로고 컴포넌트 (`components/Logo.tsx`)
    -   모든 탭 화면에 공통 로고 및 메뉴 버튼 적용

-   **주요 화면 UI**
    -   **홈 화면 (`index.tsx`)**: 배너, 아이콘 카테고리, 인기 상담사/콘텐츠/커뮤니티 목록 UI
    -   **커뮤니티 화면 (`community.tsx`)**: 카테고리 필터링, 게시글 목록, 글쓰기(FAB) 버튼 UI
    -   **운세/타로 화면 (`fortune.tsx`)**: `ImageBackground`를 활용한 카드 형태의 메뉴 UI
    -   **글쓰기 화면 (`writePost.tsx`)**: Modal 형태로 나타나는 게시글 작성 UI

## 기술 스택 (Tech Stack)

-   **Core**: React Native, Expo SDK
-   **Navigation**: Expo Router (File-based Routing)
-   **Language**: TypeScript
-   **Styling**: StyleSheet API
-   **Icons & SVG**: `lucide-react-native`, `react-native-svg`
-   **System UI**: `react-native-safe-area-context`

## 시작하기 (Getting Started)

### 1. 프로젝트 클론

```bash
git clone [https://github.com/](https://github.com/)[Your-GitHub-Username]/connect-app.git
cd connect-app
```
### 2. 의존성 설치
```bash
npm install
```

### 3. 앱 실행
```bash
npx expo start
```

이후 나타나는 QR 코드를 Expo Go 앱으로 스캔하여 실제 기기에서 앱을 실행할 수 있습니다.

---

## 🗺️ 앞으로의 개발 로드맵 (Roadmap)

-   [ ] **1단계: 나머지 화면 UI 완성**
    -   [ ] 채팅방 목록 화면 UI 구현
    -   [ ] 마이페이지 UI 구현
    -   [ ] 게시글 상세 보기 화면 구현
-   [ ] **2단계: Firebase 연동**
    -   [ ] Firebase 프로젝트 생성 및 앱 연동
    -   [ ] `Firestore`를 사용한 실시간 데이터베이스 구축 (게시글, 댓글)
    -   [ ] `Firebase Authentication`을 통한 사용자 인증 (회원가입/로그인)
-   [ ] **3단계: 기능 고도화**
    -   [ ] 상태 관리 라이브러리 도입 (`Zustand` 또는 `Context API`)
    -   [ ] `Firebase Storage`를 이용한 이미지 업로드 기능 추가