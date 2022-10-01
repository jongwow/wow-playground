import React from 'react';
import styles from '../../styles/Home.module.css';

interface AddItemButtonProps {
  onClick?: () => void;
}

export function AddItemButton({ onClick }: AddItemButtonProps) {
  return (
    <p onClick={onClick} className={styles.description}>
      할까? 버튼을 눌러서 할일 목록에 추가해보세요 <button>할까?</button>
    </p>
  );
}
