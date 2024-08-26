import { useLocation } from "react-router-dom";
import ProjectHeader from '../components/ProjectHeader.js';
const Layout = ({child}) => {

  const location = useLocation();

  const showHeader = location.pathname==='/mainProject' || location.pathname==='/aboutUs' || location.pathname==='/culture' || location.pathname==='/gallery' ;

  return <div>
       {showHeader && < ProjectHeader/> }
  </div>
};

export default Layout;