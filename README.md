# getting-off-here
버스앱 서비스 관련 PWA 애플리케이션

## 👪 기여자

repository에 대해 더 좋은 방향으로 나아갈 수 있다면 언제든지 Issue 및 Pull Request를 요청하세요!

- [danial1021](https://github.com/danial1021)
- [gasd238](https://github.com/gasd238)
- [dieacake](https://github.com/dieacake)

## 🔑 사용 기술

<img src="https://vuejs.org/images/logo.png" width="225" height="225" />
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png" width="200" height="120" />

## 세팅 방법

.env 파일을 be폴더 바로 아래에 추가하고  
MONGO_URI = (몽고디비URL/DB이름)  
JWT_SECRET = (jwt key)  
SALT = (암호화용 문자열)
이렇게 값을 넣어주시면 됩니다.  
be -> crawling 폴더 안에 있는 파이썬 파일을 실행시켜서 db정보를 넣으셔야 합니다.

## 사용 방법

fe와 be에 각각 npm install 실행 후 
cd fe && npm run serve
cd be && npm start(mongodb)
서버 돌리기용 commit 이전부터(184commit)에서 사용하시면 좋을 것 같습니다

### 현재 상황

nfc모듈과의 기능 구현에 어려움이 있어 -> 추후에 정보 및 기술이 나온 후에 보완예정
