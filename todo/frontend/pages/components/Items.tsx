import React from 'react';
import styles from '../../styles/Home.module.css';
import { CardProps, Item } from './Item';

const dummyData: CardProps[] = [
  {
    id: '1',
    title: 'ToDo 디자인 만들기',
    content: '대강 디자인 + 버튼 정도만 만들어 놓기',
    status: 'backlog',
  },
  {
    id: '2',
    title: 'ToDo 기능 만들기',
    content: 'Backlog, Todo, In progress, Done (dnd)',
    status: 'backlog',
  },
  {
    id: '3',
    title: '서버와 연결하기',
    content: '간단한 Nestjs로 backend 만들어서 API 연결하기',
    status: 'backlog',
  },
  {
    id: '4',
    title: '디테일',
    content: '코드 리팩터링',
    status: 'backlog',
  },
  {
    id: '5',
    title: '디테일',
    content: 'layout 바꾸기 변경',
    status: 'backlog',
  },
  {
    id: '6',
    title: '디테일',
    content: 'Server Send Event',
    status: 'backlog',
  },
  {
    id: '7',
    title: '디테일',
    content: 'Progressive Web App',
    status: 'backlog',
  },
  {
    id: '8',
    title: '디테일',
    content: 'CI/CD',
    status: 'backlog',
  },
];

export function Items() {
  return (
    <div className={styles.grid}>
      {dummyData.map((item) => (
        <Item title={item.title} content={item.content} id={item.id} status={item.status} key={item.id} />
      ))}
    </div>
  );
}
