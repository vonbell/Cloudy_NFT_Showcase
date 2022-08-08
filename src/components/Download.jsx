import React from 'react';
import assets from '../assets';
import styles from '../styles/Global';

const Download = () => {
    return (
        <div className={`${styles.section} ${styles.bgWhite}`}>
            <div className={`${styles.subSection} flex-col text-center`}>
                <button onClick={() => window.open("https://github.com/vonbell/Cloudy_Marketplace", 'blank')} className={`${styles.btnIcon2}`}>
                    <img src={assets.github} alt="github_icon" />
                </button>
            </div>
        </div>
    );
}

export default Download