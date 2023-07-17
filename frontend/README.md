# 웹 IoT Frontend

<!-- 필수 항목 -->

## 소개

웹 IoT 프로젝트의 Frontend 스켈레톤 코드

<!-- 필수 항목 -->

## 기술스택 및 라이브러리

| Tech         | Version | Description           |
| ------------ | ------- | --------------------- |
| TypeScript   | 5.0.2   | JavaScript Superset   |
| Three.js     |         | JavaScript 3D Library |
| React        | 18.2.0  | JavaScript Framework  |
| ESLint       | 8.44.0  |                       |
| Vite         | 4.4.0   |                       |
| React Router |         |                       |

<!-- 필수 항목 -->

## 개발 환경 구성

1. 프로젝트 다운로드

   ```
   git clone <repo URL> <folder-name>
   ```

2. frontend 폴더로 이동

   ```
   cd <folder-name>/frontend
   ```

3. 패키지 설치

   ```
   npm install
   ```

4. 프로젝트 실행
   ```
   npm start
   ```

## 디렉토리 구조

```
/src
	/common
	- CommonHooks.jsx                -> key press, local storage state
	- InfiniteScroll.jsx             -> handle infinite scroll
	- MediaQueryHooks.jsx            -> material-ui useMediaQuery hooks

	/components
		/Auth
			/SignResponsiveDialog        -> sigin in, sigin up, recover pw
		/Create
			/CreateVoteComponent         -> create a vote
			/DialogActionsComponet       -> create a vote
			/RadioButtonsGroup           -> create a vote
		/Feed                            -> vote feed
		/Grid
			/VoteGridItem                -> vote item
			/VoteGridList                -> vote root
			/VoteGridTitle               -> vote title
		/Main
			/ButtonBases                 -> category head
			/CheckBoxButtonsGroup        -> vote options
			/HorizontalBar               -> perceantage chart
			/VoteDetailResponsiveDialog  -> vote result
		/Search
			/SearchComponent             -> search vote
		/User
			/ChangePassword              -> change pw
			/MyInfo                      -> user info
			/UserResponsiveDialog        -> user dialog root
			/VerticalTabs                -> user dialog side nav

	/context                         -> create context

	/css                             -> reset css

	/layout
		/Drawer                        -> side nav
		/Footer                        -> footer
		/Header                        -> head nav
		/Layout                        -> layout root

	/pages
	- Auth                       -> user
	- AboutMe                    -> about me
	- ContactUs                  -> contact us
	- CreateVote                 -> create vote
	- MainVote                   -> vote
	- MyVote                     -> my vote
	- NotFound                   -> 404 page
	- SearchVote                 -> search
	- Terms                 	 -> terms
```
