
//import Test from './components/BootstrapTest.js'
//import 'bootstrap/dist/css/bootstrap.min.css';
import Layer from '../components/Layers.js';
import AboutUs from '../components/AboutUs.js';
import Culture from '../components/Culture.js';
import Footer from '../components/Footer.js';
import DynamicPage from '../DynamicPage.jsx';
import Slider from '../components/Slider.js'

import img40 from '../components/images/img40.jpg';
import img38 from '../components/images/img38.jpg';
import img25 from '../components/images/img25.jpg';
import img37 from '../components/images/img37.jpg';
import img13 from '../components/images/img13.jpg';

function Home(){
    //Array object for Layers
    const layers = [{
        id : 'l1',
        title : 'History',
        iteam1 : 'History',
        iteam2 : 'History',
        iteam3 : 'History',
        margin : '100px 150px',
        backgroundimg : "./images/facebook.png"
    },
    {
        id : 'l2',
        title : 'Climates',
        iteam1 : 'Rainy Season',
        iteam2 : 'Summer Season',
        iteam3 : 'Winter Season',
         margin : '100px 150px'
    },{
        id : 'l3',
        title : 'Nature',
        iteam1 : 'Hilly Region',
        iteam2 : 'Farm Feilds',
        iteam3 : 'Village',
         margin : '100px 150px'
    },{
        id : 'l4',
        title : 'Occupations',
        iteam1 : 'Farming',
        iteam2 : 'Daily Wagers',
        iteam3 : '',
         margin : '-150px 150px'
    },{
        id : 'l5',
        title : 'Animals',
        iteam1 : 'Cows,Buffal',
        iteam2 : 'Sheeps , Goats',
        iteam3 : 'Pigs',
         margin : '-150px 150px'
    },{
        id : 'l6',
        title : 'Others',
        iteam1 : 'Schools',
        iteam2 : 'Shops',
        iteam3 : 'Medical Centers',
         margin : '-150px 150px'
    }

]

    return <div>
        
        
        <div>
        <Slider 
        img200 = {img38}
        img300 = {img25}
        img100 = {img13}
        img400 = {img37}
        img500 = {img40}/>

         <h1 style={{color:"red",marginLeft:"50px"}}>Different Sections Regarding my Village : </h1>
         <br></br>
         </div>
        <Layer
         title = {layers[1].title}
         iteam1 = {layers[1].iteam1}
         iteam2 = {layers[1].iteam2}
         iteam3 = {layers[1].iteam3}
         margin = {layers[1].margin}
        
        />
        
        <Layer
         title = {layers[2].title}
         iteam1 = {layers[2].iteam1}
         iteam2 = {layers[2].iteam2}
         iteam3 = {layers[2].iteam3}
         margin = {layers[2].margin}
        
        />
        <Layer
         title = {layers[3].title}
         iteam1 = {layers[3].iteam1}
         iteam2 = {layers[3].iteam2}
         iteam3 = {layers[3].iteam3}
         margin = {layers[3].margin}
        
        />
        <Layer
         title = {layers[4].title}
         iteam1 = {layers[4].iteam1}
         iteam2 = {layers[4].iteam2}
         iteam3 = {layers[4].iteam3}
         margin = {layers[4].margin}
        
        />
        <Layer
         title = {layers[5].title}
         iteam1 = {layers[5].iteam1}
         iteam2 = {layers[5].iteam2}
         iteam3 = {layers[5].iteam3}
         margin = {layers[5].margin}
        
        />
       
       <AboutUs />
       
       <DynamicPage />

       <Culture />

       <Footer />
       
    </div>
}

export default Home ;