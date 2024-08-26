
import './MulImages.css';
//import img16 from './images/img16.jpg';
import img19 from './images/img19.jpg';
import img20 from './images/img20.jpg';

function MulImages(){

    return <div id='imgContainer' >
       <div id = "ver">
        <img src={img19} />
         </div>
       <div id ="hor1"> <img src={img20} /> </div>
       
    </div>
}

export default MulImages ;