import React from 'react';
import styles from '../styles/Global';
import assets from '../assets';
import Button from './Button';

const SectionWrapper = ({ title, description, showBtn, mockupImg, banner, reverse, showLogo }) => {
    return (
        <div className={`min-h-screen ${styles.section} ${reverse ? styles.bgWhite : styles.bgPrimary} ${banner}`}>
            
            {/* Section Rows */}
            <div className={`flex items-center w-11/12 sm:w-full minmd:w-3/4 ${reverse ? styles.boxReverseClass : styles.boxClass}`}>
                <div className={`${styles.descDiv} ${reverse ? " fadeRightMini" : " fadeLeftMini"} ${reverse ? styles.textRight : styles.textLeft}`}>
                    {/* Logo */}
                    {showLogo && (
                        <img src={assets.logo} alt="Cloudy_logo" className={`img-fluid pb-1 mb-2`} />
                    )}
                    
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
                            link="https://expo.dev/@vonbell/nft_react_native_app?serviceType=classic&distribution=expo-go"
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