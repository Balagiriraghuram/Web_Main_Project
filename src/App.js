import ProjectHeader from './components/ProjectHeader.js';
import Header from './components/header.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './components/AboutMe.js';
import MainProject from './MainHeaderpages/Home.js';
import ContactMe from './MainHeaderpages/ContactMe.js';
import OtherProjects from './MainHeaderpages/OtherProjects.js';
import AboutUs from './components/AboutUsPage.js';
import Culture from './components/CulturePage.js';
import Gallery from './pages/Gallery.js';
import Layout from './MainHeaderpages/Layout.js';

function App(){
 
    return <div>
        
        <BrowserRouter>
           <Header/>
           <br></br>
           <Layout>
               <ProjectHeader/>
           </Layout>
           <Routes>
               <Route path="/mainProject"  element={<MainProject />}/>
               <Route path='/' element={<About />} />
               <Route path='/contactMe' element={<ContactMe />} />
               <Route path='/otherProjects' element={<OtherProjects />} />
               <Route path='/aboutUs' element={<AboutUs  />} />
               <Route path='/culture' element={<Culture />} />
               <Route path='/gallery' element={<Gallery />} />
           </Routes>
           
        </BrowserRouter>
        
       
    </div>
}

export default App ;