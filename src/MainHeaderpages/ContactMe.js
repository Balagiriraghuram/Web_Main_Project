import img5 from '../components/images/facebook.png';
import img6 from '../components/images/instagram.png';
import img7 from '../components/images/linkedin.png';
import img8 from '../components/images/github (1).png';


const ContactMe = () => {
    return <div  style={{margin:"50px"}}>
          <h1>Contact Me Page</h1>
          <h2>There are several ways to contactMe as : </h2>

          <h1>By facebook</h1>
          <a href="" style={{margin:'10px'}}><img src={img5}  alt='facebook icon'   height={"70px"}/></a>
          <br></br>

          <h1>By instagram</h1>
          <a href="" style={{margin:'10px'}}><img src={img6}  alt='instagram icon'   height={"70px"}/></a>
          <br></br>

          <h1>By linkedin</h1>
          <a href="https://www.linkedin.com/in/bommina-bala-giri-raghuram-311007271/" style={{margin:'10px'}}><img src={img7}  alt='linkedin icon'   height={"70px"}/></a>
          <br></br>
          <h1>By github</h1>
          <a href="https://github.com/Balagiriraghuram" style={{margin:'10px'}}><img src={img8}  alt='github icon'   height={"70px"}/></a>
          <br></br>
          <h1>By E-mail</h1> 
          <h2>balagiri9129@gmail.com</h2>
          <br></br>
          <h1>By Phone call / Whatsup : </h1> 
          <h2>+91 9701324083</h2>
     </div>
  };
  
  export default ContactMe;