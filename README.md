# nodeTodo
Node와 Express, MariaDB를 이용해 TodoList를 작성/수정/삭제하는 nodeTodo입니다.
![nodeTodo](/img.png "nodeTodo")<br>
현재 Naver Cloud Platform에서 운용중인 예제로 확인할 수 있습니다.<br>
<del>주소는 보안상의 이유로 지웠습니다.</del>

## Getting Started
본 체계는 Node(v.10 이상), Express(4.16 이상), Mariadb(version 14.14) 기반입니다.
OS는 CentOS Linux 7 (Core)입니다.

### Prerequisites
nodejs 설치 
```
yum install npm nodejs 
```
mariadb 설치
``` 
curl -sS https://downloads.mariadb.com/MariaDB/mariadb_repo_setup | sudo bash 
yum install MariaDB-server 
```
package.json에 명시된 모듈 설치
```
npm install
```
sequelize-cli과 nodemon 은 따로 설치했습니다.<br>
nodemon은 설치안하고 node로만 application을 실행해도 무방합니다.<br>
>그럴 경우, package.json 에서 "start"스크립트를 수정해야합니다.
```
npm i -g sequelize-cli
npm i -g nodemon
```
### Setting
본인의 DB 설정에 맞춰서 파일을 수정합니다.<br>
경로: /config/config.json <br>
<br>
취향에 맞게 서버 포트를 설정합니다.<br>
경로: /app.js , line 17. <br>
<br>
Sequelize를 이용해서 사용할 DB를 설정합니다. <br>
``` 
sequelize db:create 
```
### Service Start
nodemon을 설치했을 경우, package.json 수정없이 그대로 아래의 명령어를 실행하면 서버가 실행됩니다.
``` 
npm start 
```
nodemon 설치 없이 진행할 경우, package.json의 *"start":nodemon app.js* 를  *"start": node app.js* 로 수정하고 아래의 명령어로 실행합니다.
``` 
npm start 
```

### 보완점
*보안조치(ssl 적용)*
*모듈화(스파게티 코드)*
*프론트엔드서버와 백엔드 서버 분리*
