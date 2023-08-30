import LatestGame from './LatestGame';
import LiveMatches from './LiveMatches';

function Matches() {
    return(
        <div class="section-wrapper">
            <LatestGame/>
            <LiveMatches/>
        </div>
    );
}

export default Matches;