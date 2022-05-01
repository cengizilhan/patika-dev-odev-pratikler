import ThemeContext from "./ThemeContext";
import {useContext } from "react";


function Button() {
    const {theme,setTheme}=useContext(ThemeContext);
  
    


  return <div>
 {JSON.stringify(theme)}
<select defaultValue=""  onChange={(e)=>selectEvent(e)} >
  <option  value="Istanbul">İstanbul</option>
  <option  value="Ankara">Ankara</option>
  <option value="Izmir">İzmir</option>
 
</select>

  </div>;
}
function selectEvent (e)
{
    console.log(e.target.value)
    SetCity(e.target.value)
}

function SetCity(key){
    
    let location;
  
    switch (key) {
        case "Istanbul":
            location="lat=41.01&lon=28.97";
            break;
            case "Ankara":
            location="lat=39.92&lon=32.86";
            break;
            case "Izmir":
            location="lat=38.42&lon=27.14";
            break;
    
        default:
            break;
    }

//https://api.openweathermap.org/data/2.5/onecall?lat=39.12&lon=32.86&exclude=minutely&units=metric&appid=953871f836127956353a8f176a142782&lang=tr

    let endpoint=`https://api.openweathermap.org/data/2.5/onecall?${location}&exclude=minutely&units=metric&appid=953871f836127956353a8f176a142782&lang=tr`;
    fetch(endpoint)
    .then(response => response.json())
    .then(data => {console.log(data);
        setTheme(data);
console.warn(data); 
console.warn(useContext(ThemeContext));
}
);
}


export default Button;
