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
        </>
    );
}

export default App;
