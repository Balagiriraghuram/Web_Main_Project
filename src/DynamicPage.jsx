

import { useState } from 'react';
import './DynamicPage.css';

function DynamicPage(props){

    
    const now = new Date().toLocaleTimeString();
    const dd = new Date().getDate();
    const mm = new Date().getMonth() + 1;
    const yy = new Date().getFullYear();

    const [time , setTime] = useState(now);
    const [DD , setDD] = useState(dd);
    
    function updateTime(){
        const newTime = new Date().toLocaleTimeString();
        setTime(newTime);

    }
    function updateDate(){
        const newDD = new Date().getDate();
        setDD(newDD);
    }
    setInterval(updateTime , 1000);
    return <div id = "DynamicPageparent" >
       <p id="time"> <p>Current time :<h1>{time}</h1> </p> </p>
       <p id="time"> <p>Current Date :<h1>{dd}-{mm}-{yy}</h1> </p> </p>
    </div>
}

export default DynamicPage ;