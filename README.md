# DIE

흑백 복도 미로에서 은색 열쇠 4개를 찾아 문을 열고 탈출하는 멀티플레이(최대 6명) 공포 게임입니다.

## 구조

```
public/index.html   게임 전체 (three.js + PeerJS, CDN 사용)
server.js           public/ 을 내려주는 간단한 Node 서버 (외부 패키지 없음)
package.json
render.yaml         Render 배포 설정
```

멀티플레이는 브라우저끼리 PeerJS(WebRTC)로 직접 연결돼요. 서버는 파일만 내려주므로 방 정보를 저장하지 않아요.

## 로컬 실행

```
npm start
```

`http://localhost:3000` 접속.

## Render 배포

1. 이 폴더를 GitHub 저장소로 올려요.
2. Render → New → Blueprint(또는 Web Service) → 저장소 선택.
   - Blueprint: `render.yaml` 을 자동으로 읽어요.
   - Web Service 직접 설정: Build `npm install`, Start `npm start`.
3. 배포가 끝나면 나오는 주소를 친구들과 공유해요.

> 무료 플랜은 한동안 접속이 없으면 잠들어서 첫 접속이 느릴 수 있어요.
> 인터넷 연결 환경에 따라 P2P 연결이 안 되는 경우(학교·회사 망 등)가 있어요.

## 조작

WASD 이동 · Shift 달리기 · 마우스(또는 방향키) 시점 · E 상호작용 · F 손전등 · T 채팅 · (관전) Tab/클릭: 다른 사람 보기
