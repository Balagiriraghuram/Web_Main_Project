import {Link} from 'react-router-dom';
import './header.css';

function projectHeader(){
    return <div>
        <div id='title'>Introducing my Village</div>
        <div id="header" >
        <Link to="/mainProject" class="header">Home</Link>
        <Link to="/aboutUs" class="header">Aboutus</Link>
        <Link to="/culture" class="header">Culture</Link>
        <Link to="/gallery" class="header">Attractions/Gallery</Link>
        <Link to="/contactMe" class="header">ContactUs</Link>
      </div>
    </div>
}

export default projectHeader ;