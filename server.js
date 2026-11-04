// DIE - Render 배포용 정적 파일 서버 (외부 패키지 없음)
// 멀티플레이는 브라우저끼리 PeerJS(WebRTC)로 직접 연결하므로 서버는 public/ 파일만 내려줍니다.
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const ROOT = path.join(__dirname, 'public');
const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.mp3': 'audio/mpeg',
  '.ogg': 'audio/ogg',
  '.wav': 'audio/wav',
  '.txt': 'text/plain; charset=utf-8',
};

http
  .createServer((req, res) => {
    const urlPath = decodeURIComponent((req.url || '/').split('?')[0]);

    if (urlPath === '/healthz') {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      return res.end('ok');
    }

    let file = path.normalize(path.join(ROOT, urlPath));
    if (!file.startsWith(ROOT)) {
      res.writeHead(403);
      return res.end('Forbidden');
    }
    if (urlPath.endsWith('/')) file = path.join(file, 'index.html');

    fs.readFile(file, (err, data) => {
      if (err) {
        // 알 수 없는 경로는 게임 첫 화면으로
        return fs.readFile(path.join(ROOT, 'index.html'), (e2, html) => {
          if (e2) {
            res.writeHead(404);
            return res.end('Not found');
          }
          res.writeHead(200, { 'Content-Type': MIME['.html'] });
          res.end(html);
        });
      }
      res.writeHead(200, {
        'Content-Type': MIME[path.extname(file).toLowerCase()] || 'application/octet-stream',
        'Cache-Control': 'no-cache',
      });
      res.end(data);
    });
  })
  .listen(PORT, () => console.log('DIE server listening on :' + PORT));
