// // let latitude = document.getElementById("latitude_input");
// // let longitude = document.getElementById("longitude_input");
// // let location = document.getElementById("location");
// // let description = document.getElementById("description");

// // async function getWeather() {
    
// //     let api = "https://api.openweathermap.org/data/2.5/weather";
// //     let apiKey = "dbab5234b6d85b51135601e72dc8c17c";
  
// //     location.innerHTML = "Fetching...";
  
// //     //navigator.geolocation.getCurrentPosition(success, error);
  
   
// //     let url =
// //     api +
// //     "?lat=" +
// //     latitude.value +
// //     "&lon=" +
// //     longitude.value +
// //     "&appid=" +
// //     apiKey;
// //     console.log(url);
     
// //     let response = await fetch(url);
// //     //return response.json();
// //     let result = await response.json();
// //     console.log(result);
// //     let temp = result.main.temp;
// //     temperature.innerHTML = temp + "° F";
// //     location.innerHTML = result.name + " (" + latitude.value + "°, " + longitude.value + "°)";
// //     description.innerHTML = result.weather[0].main;
// // }
  
// window.addEventListener( "load", function () {
//     async function sendData() {
//         let api = "https://api.openweathermap.org/data/2.5/weather";
//         let apiKey = "dbab5234b6d85b51135601e72dc8c17c";
  
//         location.innerHTML = "Fetching...";
                    
           
//         let url =
//         api +
//         "?lat=" +
//         latitude.value +
//         "&lon=" +
//         longitude.value +
//         "&appid=" +
//         apiKey;
//         console.log(url);
            
//         let response = await fetch(url);
//         //return response.json();
//         let result = await response.json();
//         console.log(result);
//         let temp = result.main.temp;
//         temperature.innerHTML = temp + "° F";
//         location.innerHTML =
//         result.name + " (" + latitude + "°, " + longitude + "°)";
//         description.innerHTML = result.weather[0].main;
//     }
  
//     // Access the form element...
//     const form = document.getElementById( "myForm" );
//     console.log(form);
//     // ...and take over its submit event.
//     form.addEventListener( "submit", function ( event ) {
//       event.preventDefault();
  
//       sendData();
//     } );
//   } );

convertToC = (temp) => temp -273.13;
async function sendData() {
             let api = "https://api.weather.gov/points/";
            //let apiKey = "dbab5234b6d85b51135601e72dc8c17c";
      
            location.innerHTML = "Fetching...";
                        
            if(!latitude.value || !longitude.value )
            {
                alert("Please enter a latitude and longitude");
                return new Promise((resolve, reject) =>reject("Please provide a latitude and longitude"));
            }
            else{

             
            let url = api + latitude.value + ","  + longitude.value;
            
           
            
            console.log(url);
                
            let response = await fetch(url);  // fetches using coords
            //return response.json();
            let result = await response.json();
            
            console.log(result.properties);

            let new_url = await fetch(result.properties.forecast); //fetches forecast
            let new_result = new_url.json();
            let temp = new_result.main.temp;
            let wind_speed = new_result.wind.speed;
            temperature.innerHTML = (convertToC(temp)).toFixed(2)+ "°c";
            //location.innerHTML = new_result.name.value + " (" + latitude.value + "°, " + longitude.value + "°)";
            description.innerHTML = new_result.weather[0].main ;
            speed.innerHTML = wind_speed;
            return new_result;
            }
        }
      
