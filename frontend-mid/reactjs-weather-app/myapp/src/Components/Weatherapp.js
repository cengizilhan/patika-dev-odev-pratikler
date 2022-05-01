import Button from "./Button";
import ThemeContext, { ThemeProvider } from "./ThemeContext";

export default function Weatherapp() {
 
    /*fetch('https://api.openweathermap.org/data/2.5/onecall?lat=41.01&lon=28.97&exclude=minutely&units=metric&appid=953871f836127956353a8f176a142782')
  .then(response => response.json())
  .then(data => console.log(data));*/

  return <div>
  

<ThemeProvider>
<Button></Button>
</ThemeProvider>


  </div>;
}


