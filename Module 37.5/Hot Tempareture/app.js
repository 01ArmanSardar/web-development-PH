const API_KEY=`8584b285cafb664130a654271f7b41ce`

document.getElementById('SearchButton').addEventListener(function(){
   const city= document.getElementById('inputSearch').value
   const url=`https://api.openweathermap.org/data/2.5/weather?lat=${city}&lon={lon}&appid=${API_KEY}`
   console.log(url);
})