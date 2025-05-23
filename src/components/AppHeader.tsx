import React from 'react';
import styles from './AppHeader.module.scss';

const AppHeader = () => {
  return (
    <div className={styles.box}>
      <div className={styles.group}>
        <div className={styles['overlap-group']}>
          <div className={styles['text-wrapper']}>Pick of Piece!</div>
          <p className={styles.div}>
            팝! 도착한 누군가의 기록을
            <br />
            지금 뽑아보세요.
          </p>
        </div>

        <div className={styles.frame}>
          <div className={styles['frame-2']}>
            {/* <img className={styles.vector} alt="Vector" src={vector} /> */}
            <div className={styles['text-wrapper-2']}>서초구</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
