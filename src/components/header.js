import {Link} from 'react-router-dom';
import './header.css';

function header(){
    return <div>
        <div id="header" >
        <div>
          <h3 >WebDevelopment project</h3>
        </div>
        <Link to="/" class="header">Aboutme</Link>
        <Link to="/mainProject" class="header">MainProject</Link>
        <Link to="/otherProjects" class="header">OtherProject</Link>
        <Link to="/contactMe" class="header">Contectme</Link>
      </div>
    </div>
}

export default header ;