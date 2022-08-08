import { Download, Features, SectionWrapper } from './components';
import assets from './assets'

const App = () => {
    return (
        <>
            <SectionWrapper 
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
        </>
    );
}

export default App;
