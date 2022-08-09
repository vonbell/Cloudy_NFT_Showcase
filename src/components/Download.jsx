import React from 'react';
import assets from '../assets';
import styles from '../styles/Global';

const Download = () => {
    return (
        <div className={`${styles.section} ${styles.bgWhite}`}>
            <div className={`${styles.subSection} flex-col text-center`}>
                <div className={styles.flexCenter}>
                    <img src={assets.scene} alt="download png" className={styles.fullImg} />
                </div>

                <h1 className={styles.h1Text2}>Github</h1>
                <button onClick={() => window.open("https://github.com/vonbell/Cloudy_Marketplace", 'blank')} className={`${styles.btnWhite}`}>
                    <img src={assets.github} alt="github_icon" className={styles.btnIcon2} />
                </button>
            </div>
        </div>
    );
}

export default Download