# 베이스 이미지로 node 사용
FROM node:lts-alpine

# 작업 디렉토리 설정
WORKDIR /vue

# package.json과 yarn.lock 파일을 복사
COPY package*.json ./
# 의존석 설치
RUN npm install

# 애플리케이션 소스 코드를 복사
COPY . .

# 애플리케이션 빌드
RUN npm run build

# http 서버를 전역으로 설치 후 빌드된 정적 파일을 호스팅
RUN npm install -g http-server

EXPOSE 8080

CMD http-server dist