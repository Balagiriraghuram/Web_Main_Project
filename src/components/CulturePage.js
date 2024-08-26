import img1 from './images/Culture_2.jpg';
import img2 from './images/Culture_3.jpg';
import img3 from './images/Culture_4.jpeg';
import img4 from './images/Culture_5.jpg';
import './Culture.css';
import img5 from './images/Culture_4.jpg';
import img11 from './images/img11.jpg';
import img40 from './images/img40.jpg';
import Slider from './Slider.js'
function CulturePage(){

    return <div  >
       <div id ="CultureHeader">
         <h1>Culture of Andhra Pradesh - Explore the Dazzling Heritage</h1>
       </div>
       <Slider 
        img400 = {img5}
        img300 = {img3}
        img500 = {img11}
        img200 = {img40}
        img100 = {img1}/>
       <p className='Culturetext'>There has been a lot of discussion on the definition of culture and how to define a place by the traditions that its people follow. Just like the other states of the country, Andhra Pradesh has a whole new kind of diversity to offer to its residents and the ones flocking by to witness it. Some distinguishing features of the place include its delicacies, melodious music, rock-n-roll dance moves, free-spirited people and their creative bent of mind. The art & craft here are first class and have a superb quality that has helped the state to thrive and get identified uniquely. The finger-licking Andhra delicacies have a 'Nawabi' touch given to them. Can't control your curiosity already? Scroll down to find all about the eclectic culture of Andhra Pradesh.</p>

       <h2>Art & Craft Of Andhra Pradesh</h2>
       <img 
         src={img1}
         alt='Art & Craft Of Andhra Pradesh'
         height={"400px"}
         style={{margin:'0px 100px'}}/>
       <p className='Culturetext'>The art of Andhra Pradesh is not limited to being traditional or modern - you can find a variety of designs blended in different kinds of colours. There is something fresh about the paintings, handicrafts, and handlooms which are merely sub-categories of the art and craft found here. No other state can compete with Andhra in terms of its crafts and let's be honest, the state is bound to be incomplete without its existence. Right from when they are born, the Telugu people are trained to be experts in creating metal crafts, toys, saris, stone crafts, brassware and the like by following the traditional methods even today.

       Apart from Indians, people from all over the world to flock to Andhra Pradesh so as to experience this truly amazing form of art. The luxurious nature of the crafts of the state is a hit in India, as well as abroad, and is a huge income-generating source for the people of the state.</p>
      

       <h2>Ikat - Handlooms in Andhra Pradesh</h2>
       <img 
         src={img2}
         alt='Art & Craft Of Andhra Pradesh'
         height={"400px"}
         style={{margin:'0px 100px'}}/>
       <p className='Culturetext'>The state of Andhra Pradesh is also very famous due to the skilful hand-weaving quality displayed by the local residents, especially Ikat. This practice of using and selling hand-stitched clothes is a traditional practice being followed till date. The state has some royal dress material and saris with intricate designs to offer. All the handmade designs are very delicate and carefully woven. Every sari is adorned with a 'pallu' and a thin border which is embroidered with some kind of golden thread work. 

       Exclusive to Andhra Pradesh, Ikat is renowned the world-over for its intricate designs and patterns which are also closely followed in Orissa and Gujarata. It originates in the villages of Nalgonda district and involves weaving randomly dyed yarns in a geometric or zigzag patter giving the finished cloth an unparalleled beautiful design. Ikat handlooms can be described as the jewel in the crown of Andhra Pradesh culture.</p>

       <h2>Handicrafts of Andhra Pradesh</h2>
       <img 
         src={img3}
         alt='Handicrafts of Andhra Pradesh'
         height={"400px"}
         style={{margin:'0px 100px'}}/>
       <p className='Culturetext'>Since a long time, India has been identified by its traditional handicraft items occupying a special place in the heart. Andhra Pradesh has been able to keep that spirit alive and is yet another place to offer some exotic and alluring handicraft designs to its visitors. This has been possible with the training that has been given to the involved professionals with care and dedication. The people of the state are in love with their culture and their work itself showcases it. The handicraft culture of Andhra Pradesh is known for the impeccable Banjara embroidery, wood carving and metalwork.</p>


       <h2>Melodious Music of Andhra Pradesh</h2>
       <img 
         src={img4}
         alt='Melodious Music of Andhra Pradesh'
         height={"400px"}
         style={{margin:'0px 100px'}}/>
       <p className='Culturetext'>Andhra Pradesh has always been known for its rich musical heritage. This land has given birth to three legends in the world of Carnatic music namely Shyama Sastri, Thyagaraja and Muthuswami Dixtar. Since the Telugu language is spoken by most people in the state, it is, therefore, able to bring out the originality and the true spirit of the Carnatic music. Some famous Carnatic music composers include Kshetrayya, Annamacharya and Bhadrachala Ramadasa. This type of music is also said to be begun by the Holy Gods. Another very famous kind of music which has said to be originated from Carnatic music is folk music. This art has been passed on to the descendants over the years. Every music has a distinctive feature meaning that every composition of music has a different version altogether. The musical element and the hidden meaning behind the song is what makes it more meaningful and attractive. Another feature which separates the Carnatic music from the rest of the music is the fact that the song is always able to bring out the personality of the song composer completely thereby increasing the level of the language in the music</p>
    </div>
}

export default CulturePage ;