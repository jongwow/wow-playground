# nodeTodo
Node와 Express, MariaDB를 이용해 TodoList를 작성/수정/삭제하는 NodeTodo입니다.

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
sequelize-cli 은 따로 설치했습니다.
```
npm i -g sequelize-cli
```

