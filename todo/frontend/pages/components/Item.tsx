import React from 'react';
import styles from '../../styles/Home.module.css';

type status = 'backlog' | 'todo' | 'inprogress' | 'done';

export interface CardProps {
  title: string;
  content: string;
  id: string;
  status: status;
}

export function Item({ title, id, content }: CardProps) {
  return (
    <a href="#" className={styles.card} key={id}>
      <h2>{title}</h2>
      <p>{content}</p>
    </a>
  );
}
