import './Layers.css';

function Layers(props){

    return <div id = "parent" style={{margin : props.margin}}>

    <div >
        <div id = "frist" class="Layer" >
            {props.iteam3}
        </div>
    
        <div id = "second" class="Layer">
            {props.iteam2}
        </div>
    
        <div id = "third" class="Layer">
            {props.iteam1}
        </div>
    
        <div id = "frouth" class="Layer">
           {props.title}
        </div>
    
    </div>
    
    </div>
}

export default Layers ;