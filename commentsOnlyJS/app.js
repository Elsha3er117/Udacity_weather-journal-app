// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
// Personal API Key for OpenWeatherMap API
let baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip='
let apiKey = '&appid=db6870f5b304e40ee400bd4574809613';
/* Global Variables */
const nZip = document.getElementById('zip');
const feelings = document.getElementById('feelings');
// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', performAction);
/* Function called by event listener */
function performAction(e){
    getData (baseURL,nZip.Value, apiKey)
    .then((data)=> {
        postData('/add',{
            temp: data.main.temp,
            date: newDate,
            UR: feelings.value
        });
        updateUI();
    });
    };
/* Function to GET Web API Data*/
const getData = async (baseURL, zip , key )=>{

    const res = await fetch(baseURL+zip+key)
    try {
      const data = await res.json();
      console.log(data)
      return data;
    }  catch(error) {
      console.log("error", error);
    }
}
/* Function to POST data */
const postData = async ( uri ='', data = {})=> {
    const response =await fetch(uri, {
        method:'POST',
        credentials: 'same-origin',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data),
    });
    try {
       return await response.json();
    }catch(error) {
        console.log("error", error); 
    }
}
//update ui
const updateUI = async () => { 
    const request = await fetch ('/al1')
try{
    const alData = await request.json()
    document.getElementById('date').innerHTML = `Date: ${alData.date}`; 
    document. getElementById('temp').innerHTML - `Temperetuer: ${alData.temperature}`;
    document.getElementById('content').innerHTML = `Feel: ${alData.usernes}`;
}
catch(error) {
console.log("error", error);
}
};
