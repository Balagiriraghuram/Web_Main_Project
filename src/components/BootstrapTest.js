
import img1 from './images/MainSlide.jpeg';
import Carousel from 'react-bootstrap/Carousel';


function BootstrapTest(){

    return <div>
       <Carousel>
      <Carousel.Item>
      <img 
         src={img1} 
         alt="MainSlide" 
         height="800px" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img 
         src={img1} 
         alt="MainSlide" 
         height="800px" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img 
         src={img1} 
         alt="MainSlide" 
         height="800px" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    </div>
}
export default BootstrapTest ;