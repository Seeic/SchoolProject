# 크로스 플랫폼 커뮤니티 개발

OCR을 이용하여 프로필에서 본인 명함을 카메라로 찍거나 올려서

본인의 회사 / 직종을 올려 인증하여

재학생들에게 취업정보, 취업 분야 준비할 것들, 멘토링 을 제공할 수 있도록 한다.

또한 재학생들은 스터디, 프로젝트 모집, 학교 정보 공유, 책 나눔 을 이용할 수 있다.

멘토링 게시판, 프로젝트 모집, 스터디 게시판 에서 신청을 하였을 때 그룹 채팅을 할 수 있도록 지원.

채팅 기능은 휘발성 데이터이므로 Firebase( NoSql ) 을 사용하고

게시판, 프로필, 계정 정보는 MySQL 을 이용한다.

- Backend : Spring Boot
- Web : React
  <<<<<<< HEAD
- # App : React Native
- App : React Native

### Navigation

- [x] Navigation / Stack 기능 구현

### 아래와 같은 게시판

- [ ] 스터디 게시판 작성
- [ ] 프로젝트 모집 게시판 작성
- [ ] 멘토링 게시판 작성
- [ ] 취업정보 공유 게시판 작성
- [ ] 학교 정보 공유 게시판 작성
- [ ] 책 나눔 게시판 작성

### 채팅 기능

- [ ] 멘토링 게시판에서 신청을 하면 그룹채팅.
- [ ] 책 나눔 게시판에서 채팅을 신청하면 1대1 채팅.

### 로그인 기능

- [ ] Login 기능, 화면 작성
- [ ] Join 기능, 화면 작성

### 프로필

- [ ] 프로필 수정을 OCR 기능을 이용하여 프로필 작성
- [ ] 그밖에 프로필 수정

BottomTabNavigator 을 게시판, 채팅, 로그인 , 프로필

Login 이 안되어 있다면 채팅, 프로필 기능을 이용하지 못하고
프로필 대신 Login Navigation을 보이도록 함
