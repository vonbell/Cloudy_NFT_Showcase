import React from 'react';
import assets from '../assets';
import styles from '../styles/Global';

const Download = () => {
    return (
        <div className={`${styles.section} ${styles.bgWhite}`}>
            <div className={`${styles.subSection} flex-col text-center`}>
                <h1 className={styles.h1Text}>Github</h1>
                <button onClick={() => window.open("https://github.com/vonbell/Cloudy_Marketplace", 'blank')} className={`sectionImg mt-2`} >
                    <img src={assets.github} alt="github_icon" className={`${styles.btnIcon2}`} />
                </button>
                <div className={styles.flexCenter}>
                    <img src={assets.scene} alt="download png" className={styles.fullImg} />
                </div>
            </div>
        </div>
    );
}

export default Download