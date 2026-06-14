## Project Name

Travel Workspace (가칭)

---

# 1. Product Vision

Travel Workspace는 여행 일정을 관리하는 서비스가 아닌, 여행을 함께 계획하는 경험 자체를 제공하는 협업 플랫폼이다.

사용자는 여행 후보 장소, 식당, 교통수단, 숙소, 공연 및 메모 등을 자유롭게 수집하고 카드 형태로 관리할 수 있다.

수집된 정보는 드래그 앤 드롭 방식으로 일정에 배치되며, 여러 사용자가 동시에 접속하여 실시간으로 여행 계획을 작성하고 수정할 수 있다.

본 서비스는 "예약"보다 "계획"에 초점을 둔다.

---

# 2. Target Users

### Primary Users

- 친구들과 여행을 계획하는 그룹
- 커플 여행
- 가족 여행

### Secondary Users

- 혼자 여행을 준비하는 사용자
- 여행 계획 공유를 원하는 사용자

---

# 3. Core Value

### Collaborative Planning

여행 계획을 여러 명이 함께 만드는 경험

### Visual Planning

텍스트가 아닌 카드 기반 계획

### Flexible Scheduling

일정을 자유롭게 배치하고 수정

### Centralized Information

여행 관련 정보를 하나의 공간에서 관리

---

# 4. Workspace Structure

## Overall Layout

3-Panel Layout

```
┌──────────┬──────────────┬────────────────────┐
│  Map     │  Idea Pool   │  Timeline Board    │
│  Panel   │              │                    │
└──────────┴──────────────┴────────────────────┘
```

---

## Left Panel

### Map Panel

기본적으로 접기/펼치기 가능

기능

- 지도 표시
- 장소 검색
- 카드 위치 표시
- 선택 카드 위치 하이라이트

---

## Center Panel

### Idea Pool

아직 일정에 포함되지 않은 카드들을 저장하는 영역

목적

- 여행 후보 저장
- 아이디어 정리
- 메모 보관

카테고리 필터 제공

- Food
- Attraction
- Accommodation
- Transportation
- Shopping
- Event
- Nature
- Memo

---

## Right Panel

### Timeline Board

실제 여행 일정 작성 영역

여행 시작일과 종료일을 기준으로 자동 생성

예시

```
2027-01-04
2027-01-05
2027-01-06
```

---

# 5. Card System

## Card

모든 정보는 Card 단위로 관리

---

### Common Fields

- Title
- Description
- Address
- Start Time
- End Time
- Notes
- External Link
- Tags

---

### Attachments

지원 형식

- Image
- PDF

---

### Reservation Information

선택 입력

- Reservation Number
- Booking Reference
- Confirmation Number

---

# 6. Card Categories

## Transportation

예시

- Flight
- Train
- Bus
- Taxi
- Rental Car

Color

Pastel Blue

---

## Accommodation

예시

- Hotel
- Airbnb
- Hostel

Color

Pastel Purple

---

## Food

예시

- Restaurant
- Cafe
- Bar

Color

Pastel Orange

---

## Attraction

예시

- Tourist Spot
- Landmark
- Museum

Color

Pastel Yellow

---

## Nature

예시

- Park
- Beach
- Mountain

Color

Pastel Green

---

## Shopping

예시

- Mall
- Market
- Store

Color

Pastel Pink

---

## Event

예시

- Concert
- Exhibition
- Sports Event

Color

Pastel Red

---

## Memo

예시

- Reminder
- Idea
- Checklist

Color

Pastel Gray

---

# 7. Card Status

카드는 상태를 가질 수 있음

### Draft

후보 상태

### Planned

일정 배치 완료

### Booked

예약 완료

### Cancelled

취소

---

# 8. Timeline Interaction

## Drag & Drop

Idea Pool → Timeline

Timeline → Timeline

지원

---

## Reordering

카드 순서 변경 가능

---

## Smart Push Animation

카드 이동 시

예상 배치 위치의 카드가 미리 밀려나는 애니메이션 제공

---

## Resize

카드 길이 조절 가능

기본 단위

1시간

---

## Precision Resize

카드 끝부분을 일정 시간 이상 누를 경우

Timeline Zoom 활성화

조절 단위

5분

---

## Time Indicator

시간 변경 중

실시간 디지털 시계 UI 제공

예시

13:25

14:40

---

# 9. Conflict Detection

동일 시간에 카드가 겹칠 경우

허용

---

충돌 발생 시

- 겹치는 영역 표시
- Soft Red Overlay
- Tooltip 제공

예시

"15분 일정 충돌"

---

# 10. Transit Card

이동 자체를 일정으로 관리

예시

- Flight
- Subway
- Train
- Walking
- Taxi

---

Transit Card는

출발지

도착지

소요시간

정보를 가질 수 있음

---

# 11. Collaboration

## Shared Workspace

URL 기반 공유

---

## Avatar

사용자 아바타 선택

---

## Live Presence

현재 접속자 표시

---

## Live Cursor

실시간 커서 표시

---

## Card Lock

특정 사용자가 편집 중일 경우

표시

예시

"현열님이 편집 중"

---

# 12. Permission System

## Owner

여행 생성자

권한

- 모든 수정 가능
- 멤버 초대
- 멤버 제거
- 권한 변경

---

## Editor

일정 수정 가능

---

## Viewer

읽기 전용

---

새 사용자가 참여할 경우

Owner 승인 필요

---

# 13. Comments

모든 카드에 댓글 작성 가능

목적

- 의견 공유
- 후보 검토
- 일정 토론

예시

"여기 웨이팅이 길다고 함"

"이 시간대가 더 좋을 듯"

---

# 14. Theme System

## Light Mode

## Dark Mode

---

원칙

- 색상 반전 오류 방지
- WCAG 대비 기준 준수
- 동일한 정보 계층 유지
- 카테고리 색상 의미 유지
- 브랜드 컬러 채도 조정

---

# 15. Travel Identity

각 여행은 자체적인 개성을 가질 수 있음

설정 가능

- Cover Image
- Emoji
- Theme Color

예시

✈️ Tokyo Winter Trip

---

# 16. MVP Scope

## Included

- Trip Creation
- Map Panel
- Idea Pool
- Timeline Board
- Card Creation
- Card Categories
- Drag & Drop
- Card Resize
- Conflict Detection
- Transit Card
- Attachments
- URL Sharing
- Real-time Collaboration
- Comments
- Light/Dark Mode

---

## Excluded

- AI Schedule Recommendation
- Automatic Route Optimization
- Flight Search
- Hotel Search
- Price Tracking
- Calendar Sync
- Expense Settlement
- Mobile Native Application

---

# 17. Success Metrics

### Engagement

- 여행당 평균 참여 인원

### Collaboration

- 여행당 평균 댓글 수

### Planning Activity

- 여행당 생성 카드 수

### Retention

- 여행 생성 후 7일 내 재방문율

### Completion

- 생성된 카드 중 Timeline 배치 비율