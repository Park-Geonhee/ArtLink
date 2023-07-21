# ArtLink Frontend

<!-- 필수 항목 -->

## 소개

**ArtLink** 프로젝트의 Frontend 코드

<!-- 필수 항목 -->

## 기술스택 및 라이브러리

| Tech       | Version | Description           |
| ---------- | ------- | --------------------- |
| TypeScript | 5.0.2   | JavaScript Superset   |
| Three.js   |         | JavaScript 3D Library |
| React      | 18.2.0  | JavaScript Framework  |
| ESLint     | 8.44.0  |                       |
| Vite       | 4.4.0   |                       |

<!-- 필수 항목 -->

## 개발 환경 구성

1. 프로젝트 다운로드

   ```
   git clone <repo URL> <folder-name>
   ```

2. frontend 폴더로 이동

   ```
   cd <folder-name>/frontend/artlink-front
   ```

3. 패키지 설치

   ```
   npm install
   ```

4. 프로젝트 실행
   ```
   npm run dev
   ```

## 컴포넌트 구조(기능 기준)

```
.
├── Entrance
│   ├── EntranceLogo
│   ├── LogIn
│   └── SignUp
├── Base
│   ├── MainLogo
│   ├── Menu
│   └── BigButton
├── ViewExhibition
│   ├── ExhibitionTable
│   ├── View3D
│   ├── ExhibitionBox
│   └── MyRecordBox
│       └── ArtworkBox
├── MyPage
│   ├── ProfileBox
│   └── MyInfoBox
│       └── MyInfoRow
├── Manage
│   ├── InfoTable
│   └── InfoRow
└── ArtworkCRUD
    ├── InputImage
    ├── InputInfo
    │   └── InputInfoRow
    └── UpdateButton
```

<!--
# Entrance
## EntranceLogo
## LogIn
## SignUp

# Base
## MainLogo
## Menu
## BigButton

# ViewExhibition
## ExhibitionTable
## View3D
## ExhibitionBox
## MyRecordBox
### ArtworkBox

# MyPage
## ProfileBox
## MyInfoBox
### MyInfoRow

# Manage
## InfoTable
## InfoRow

# ArtworkCRUD
## InputImage
## InputInfo
### InputInfoRow
## UpdateButton
-->

## 디렉토리 구조
