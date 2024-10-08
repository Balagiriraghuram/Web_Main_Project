

function Slider(props){

    return <div>
        <br></br>
        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={props.img100} class="d-block w-100" alt={props.name} style={{ objectFit:"cover",height:"700px"}}/>
    </div>
    <div class="carousel-item">
      <img src={props.img200} class="d-block w-100" alt={props.name2} style={{ objectFit:"cover",height:"700px"}}/>
    </div>
    <div class="carousel-item">
      <img src={props.img300} class="d-block w-100" alt={props.name3}  style={{ objectFit:"cover",height:"700px"}}/>
    </div>
    <div class="carousel-item">
      <img src={props.img400} class="d-block w-100" alt={props.name3}  style={{ objectFit:"cover",height:"700px"}}/>
    </div>
    <div class="carousel-item">
      <img src={props.img500} class="d-block w-100" alt={props.name3}  style={{ objectFit:"cover",height:"700px"}}/>
    </div>
    
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
}

export default Slider ;