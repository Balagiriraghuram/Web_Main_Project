import './Footer.css';
import img5 from './images/facebook.png';
import img6 from './images/instagram.png';
import img7 from './images/linkedin.png';
import img8 from './images/github (1).png';

function Footor(){

    return <div id = "FooterParent">

        <footer>
             <div className='row'>
                <div className='col' >
                <h2>Done by</h2>
                <p>Bommina Bala giri raghuram</p>
                <p>balagiri9129@gmail.com</p>
                <p>+91 9701324083</p>
                </div>
                <div className='col' >
                    <h2>Address_Of_MYVILLAGE</h2>
                    <p>Maddulaparva</p>
                    <p>Reddigudam mandal</p>
                    <p>Krishna Dristic</p>
                    <p>Andhra pradesh</p>
                </div>
                <div className='col' >
                 <a href="" style={{margin:'10px'}}><img src={img5}  alt='facebook icon'   height={"70px"}/></a>

                 <a href="" style={{margin:'10px'}}><img src={img6}  alt='instagram icon'   height={"70px"}/></a>

                 <a href="https://www.linkedin.com/in/bommina-bala-giri-raghuram-311007271/" style={{margin:'10px'}}><img src={img7}  alt='linkedin icon'   height={"70px"}/></a>

                 <a href="https://github.com/Balagiriraghuram" style={{margin:'10px'}}><img src={img8}  alt='github icon'   height={"70px"}/></a>
                </div>
                
             </div>
             
        </footer>
       
    
    </div>
}

export default Footor ;