import './AboutUs.css';



function AboutUs(props){

    return  <div id = "AboutUsparent" style={{height:props.height}}>
      <div id ="AboutUsHeader">
      <h1>About of MyVillage</h1>
       </div>
        <br />
        <div id = "textParent">
        <h2>Location</h2>
        <table id = "table" >
      
      <tr>
        <td>MyVillage Name </td>
        <td>Maddulaparva ( మద్దులపర్వ )</td>
      </tr>
      <tr>
        <td>Mandal Name</td>
        <td> Reddigudem</td>
      </tr>
      <tr>
       <td>District</td>
        <td> Krishna</td>
      </tr>
      <tr>
       <td>Language</td>
        <td> Telugu</td>
      </tr>
      
    </table>
        <p className="text">
         According to Census 2011 information the location code or village code of Maddulaparva village is 588995. <span id="text">Maddulaparva village is located in Reddigudem mandal of Krishna district in Andhra Pradesh, India</span>. It is situated 8km away from sub-district headquarter Reddigudem (tehsildar office) and 128km away from district headquarter Machilipatnam. As per 2009 stats, Maddulaparva village is also a gram panchayat.
        </p>
        <p className="text"> 
          The total geographical area of village is 2415 hectares. Maddulaparva has a total population of 4,268 peoples, out of which male population is 2,181 while female population is 2,087. Literacy rate of maddulaparva village is 56.40% out of which 62.63% males and 49.88% females are literate. There are about 1,104 houses in maddulaparva village. Pincode of maddulaparva village locality is 521215.
      </p >
      <p className="text">
         Nuzvid is nearest town to maddulaparva for all major economic activities, which is approximately 25km away
      </p>
    
    </div>


    <div id = "mapParent">
      <h1>Google Map of MyVillage</h1>
      <div id="map">
        <div style={{width: "100%"}}><iframe width="80%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=80%25&amp;height=600&amp;hl=en&amp;q=Maddulaparva+(My%20Village)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps systems</a></iframe></div>
      </div>
    </div>

    
    <table id = "table" >
      <caption>Population of MyVillage</caption>
      <thead style={{color: "red"}} >
        <tr>
          <th>Particulars</th>
          <th>Total</th>
          <th>Male</th>
          <th>Female</th>
        </tr>
      </thead>
      <tr>
        <td>Total Population</td>
        <td>4,268</td>
        <td>2,181</td>
        <td>2,087</td>
      </tr>
      <tr>
        <td>Literate Population</td>
        <td>2,407</td>
        <td>1,366</td>
        <td>1,041</td>
      </tr>
      <tr>
        
        <td>Illiterate Population</td>
        <td>1,861</td>
        <td>815</td>
        <td>1,046</td>
      </tr>
    </table>
    <table id = "table" >
      <caption>Connectivity of MyVillage</caption>
      <thead style={{color: "red"}} >
        <tr>
          <th>Type</th>
          <th>Status</th>
        </tr>
      </thead>
      <tr>
        <td>Public Bus Service</td>
        <td>Available within village</td>
      </tr>
      <tr>
        <td>Private Bus Service</td>
        <td>Available within 5 - 10 km distance</td>
      </tr>
      <tr>
       <td>Railway Station</td>
        <td>Available within 10+ km distance</td>
      </tr>
    </table>
  </div>
}

export default AboutUs ;