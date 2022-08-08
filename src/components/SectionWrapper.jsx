import React from 'react';
import styles from '../styles/Global';
import assets from '../assets';
import Button from './Button';

const SectionWrapper = ({ title, description, showBtn, mockupImg, banner, reverse }) => {
    return (
        <div className={`min-h-screen ${styles.section} ${reverse ? styles.bgWhite : styles.bgPrimary} ${banner}`}>
            
            {/* Section Rows */}
            <div className={`flex items-center w-11/12 sm:w-full minmd:w-3/4 ${reverse ? styles.boxReverseClass : styles.boxClass}`}>
                <div className={`${styles.descDiv} ${reverse ? " fadeRightMini" : " fadeLeftMini"} ${reverse ? styles.textRight : styles.textLeft}`}>
                    
                    {/* Titles */}
                    <h1 className={`${styles.h1Text} ${reverse ? styles.blackText : styles.whiteText}`}>
                        {title}
                    </h1>

                    {/* Descriptions */}
                    <p className={`${styles.descriptionText} ${reverse ? styles.blackText : styles.whiteText}`}>
                        {description}
                    </p>

                    {/* Expo Store Button */}
                    {showBtn && (
                        <Button
                            assetUrl={assets.expo}
                            link='deployed nft marketplace link'
                        />
                    )}
                </div>

                {/* Phone Images */}
                <div className={`flex-1 p-8 sm:px-0 ${styles.flexCenter}`}>
                    <img 
                        src={mockupImg} 
                        alt="mockup" 
                        className={`${styles.sectionImg} ${reverse ? " fadeRightMini" : " fadeLeftMini"}`}
                    />
                </div>
            </div>
            
        </div>
    );
}

export default SectionWrapper