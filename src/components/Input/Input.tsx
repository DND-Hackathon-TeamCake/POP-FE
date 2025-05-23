import React, { forwardRef } from 'react';
import styles from './input.module.scss';

interface InputProps {
  placeholder?: string;
  type?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, type = 'text' }, ref) => {
    return (
      <input
        ref={ref} // ref 전달됨
        className={styles.container}
        placeholder={placeholder}
        type={type}
      />
    );
  }
);

Input.displayName = 'Input';

export default Input;
