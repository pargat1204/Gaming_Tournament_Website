import Hero from './Hero';
import Brand from './Brand';
import Matches from './Matches';
import FeaturedGames from './FeaturedGames';
import Shop from './Shop';
import Blog from './Blog';
import Newsletter from './Newsletter';

function Maincontainer() {
    return (
        <div>
            <article>
                <Hero />
                <Brand />
                <Matches />
                <FeaturedGames />
                <Shop />
                <Blog />
                <Newsletter />
            </article>
        </div>
    );
}

export default Maincontainer;