import { Download, Features, SectionWrapper } from './components';
import assets from './assets'
import styles from './styles/Global';

const App = () => {
    return (
        <>
            <SectionWrapper
                showLogo
                title="Discover what's trending"
                description="Collect, sell, exchange, and earn stunning NFTs. Download the app to join the 25+ million people using the world's coolest NFT marketplace."
                showBtn
                mockupImg={assets.homeHero}
                banner='banner'
            />
            <SectionWrapper 
                title="Smart User Interface Marketplace"
                description="Experience the beautiful UI of Cloudy NFT Marketplace. Smooth and constant colors of a fluid UI design."
                mockupImg={assets.homeCards}
                reverse
            />
            <Features />
            <SectionWrapper 
                title="Deployment"
                description="Cloudy was built using Expo which runs natively on all devices."
                mockupImg={assets.feature}
                reverse
            />
            <SectionWrapper 
                title="Creative way to showcase the store"
                description="The app contains 2 screens. The first screen lists all NFTs while the second screen shows the details of a specific NFT."
                mockupImg={assets.mockup}
                banner='banner02'
            />
            <Download />

            {/* Footer */}
            <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
                <p className={`${styles.pText} ${styles.whiteText}`}>
                    <strong>
                        Built by {" "}
                        <span className='bold data-mdb-attribute'>
                            <button onClick={() => window.open("https://vonbell.netlify.app/", 'blank')}>Von Bell</button>
                        </span>
                    </strong>
                </p>
            </div>
        </>
    );
}

export default App;
