# 🍜 사감쌤 몰래 라면

기숙사 복도를 헤매며 면 · 스프 · 보온병 · 후레이크를 모아 탕비실에서 라면을 끓여 먹는
멀티플레이(최대 6명) 3D 공포 탈출 게임입니다.

## 폴더 구조

```
public/       게임 파일 (index.html)
server.js     정적 파일 서버 (외부 패키지 없음)
package.json
render.yaml   Render 배포 설정
```

## 로컬 실행

```bash
npm start
# http://localhost:3000
```

## Render 배포

1. 이 폴더를 GitHub 저장소에 올립니다.
2. Render 대시보드 → **New +** → **Blueprint** → 저장소 선택
   (`render.yaml`을 자동으로 읽어 웹 서비스를 만듭니다)
3. 배포가 끝나면 나오는 `https://….onrender.com` 주소를 친구들에게 공유하세요.

수동으로 만들 때는 **Web Service**를 선택하고
Build Command `npm install`, Start Command `npm start`로 설정하면 됩니다.

## 참고

- 멀티플레이는 PeerJS(WebRTC)를 쓰며, 방 1~3 중 먼저 들어간 사람이 방장이 됩니다.
  접속 연결(시그널링)에는 PeerJS 공용 서버를 사용하므로 Render 서버는 게임 파일만 제공합니다.
- 무료 플랜은 한동안 접속이 없으면 잠들어서 첫 접속이 느릴 수 있습니다.

## 조작

WASD 이동 · Shift 달리기 · 마우스 시점 · E 상호작용 · Q 사물함 뒤지기 ·
좌클릭/G 신라면 놓기 · F 손전등 · T 채팅
