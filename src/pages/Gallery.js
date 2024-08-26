import img1 from '../components/images/Culture_2.jpg';
import img2 from '../components/images/Culture_3.jpg';
import img3 from '../components/images/Culture_4.jpeg';
import img4 from '../components/images/Culture_5.jpg';
import img10 from '../components/images/img10.jpg';
import img11 from '../components/images/img11.jpg';
import img12 from '../components/images/img12.jpg';
import img13 from '../components/images/img13.jpg';
import img14 from '../components/images/img14.jpg';
import img15 from '../components/images/img15.jpg';
import img16 from '../components/images/img16.webp';
import img17 from '../components/images/img17.webp';
import img18 from '../components/images/img18.webp';
import img19 from '../components/images/img19.jpg';
import img20 from '../components/images/img20.jpg';
import img21 from '../components/images/img21.jpg';
import img22 from '../components/images/img22.jpg';
import img23 from '../components/images/img23.jpg';
import img24 from '../components/images/img24.jpg';
import './Gallery.css';

function Gallery(){

    return <div className='grid-wrapper'>
      
      <div >
        <img  className='img'
         src={img18}
         alt=''/>
         </div>
         <div className='wide'>
        <img  className='img'
         src={img19}
         alt=''/>
         </div>
         <div>
        <img  className='img'
         src={img20}
         alt=''/>
         </div>
         <div>
        <img  className='img'
         src={img21}
         alt=''/>
         </div>
         <div>
        <img  className='img'
         src={img22}
         alt=''/>
         </div>   
         <div>
        <img  className='img'
         src={img16}
         alt=''/>
         </div>
         <div >
        <img  className='img'
         src={img17}
         alt=''/>
         </div>
       <div>
        <img id='img4' className='img '
         src={img4}
         alt=''/>
         </div>
         <div className='big'>
        <img id='img10' className='img'
         src={img10}
         alt=''/>
         </div>
         <div  className='wide'>
        <img  className='img'
         src={img23}
         alt=''/>
         </div>   
         <div >
        <img  className='img'
         src={img24}
         alt=''/>
         </div>
         <div>
        <img id='img11' className='img'
         src={img12}
         alt=''/>
         </div>
        
         <div  className='wide'>
        <img id='img13' className='img'
         src={img14}
         alt=''/>
         </div>
         <div>
        <img  className='img'
         src={img15}
         alt=''/>
         </div>

         <div className='big'>
        <img id='img1' className='img'
         src={img1}
         alt='Art & Craft Of Andhra Pradesh'/>
       </div>
       <div >
       <img id='img2' className='img '
         src={img2}
         alt='Art & Craft Of Andhra Pradesh'/>
         </div>
         <div >
       <img id='img3' className='img'
         src={img3}
         alt='Handicrafts of Andhra Pradesh'/>
         </div>
         
         <div className='wide'>
        <img id='img12' className='img'
         src={img13}
         alt=''/>
         </div>
         <div>
        <img id='img10' className='img'
         src={img11}
         alt=''/>
         </div>
         <div>
        <img  className='img'
         src={img20}
         alt=''/>
         </div>
        
    </div>
}

export default Gallery ;