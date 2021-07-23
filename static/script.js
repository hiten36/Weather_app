let date=new Date();
let date1=date.getDate();
let day=date.getDay();
let month=date.getMonth();
let dayObj={
    0:'Sunday',
    1:'Monday',
    2:'Tuesday',
    3:'Wednesday',
    4:'Thursday',
    5:'Friday',
    6:'Saturday'
}
let monthObj={
    0:'Jan',
    1:'Feb',
    2:'Mar',
    3:'Apr',
    4:'May',
    5:'June',
    6:'July',
    7:'Aug',
    8:'Sep',
    9:'Oct',
    10:'Nov',
    11:'Dec'
}
document.querySelector('.day').innerText=dayObj[day];
document.querySelector('.date').innerText=`${date1}, ${monthObj[month]}`;
document.querySelector('.search-btn').addEventListener('click',()=>{
    let q=document.getElementById('query').value;
    if(q!='')
    {
        if( document.querySelector('.output')!=undefined)
        {
            document.querySelector('.output').style.display='none';
        }
        document.querySelector('.w-box2').innerText='Fetching...';
        var url=`http://api.openweathermap.org/data/2.5/weather?q=${q}&units=metric&appid=d8b9d22050bb6ab31f9d6ea2fd77a884`;
        fetch(url).then((response)=>{
            return response.json();
        }).then((data)=>{
            if(data.cod=='200')
            {
                let temp=data.main.temp;
                let country=data.sys.country;
                let city=data.name;
                let main=data.weather[0].main;
                if(main=='Drizzle')
                {
                    var img="drizzle.svg";
                }
                if(main=='Clouds')
                {
                    var img="cloudy.png";
                }
                if(main=='Clear')
                {
                    var img="sunny.png";
                }
                if(main=='Mist')
                {
                    var img="mist.svg";
                }
                if(main=='Haze')
                {
                    var img="mist.svg";
                }
                if(main=='Rain')
                {
                    var img="rainy.png";
                }
                if(main=='Thunderstorm')
                {
                    var img="thunder.png";
                }
                
                let html=`<div class="location">
                    <p><span>${city}</span>, <span>${country}</span></p>
                </div>
                <div class="temp">
                    <h1>${temp}°C</h1>
                    <img src="${img}" alt="img">
                </div>`;
                document.querySelector('.w-box2').innerHTML=html;
            }
            else{
                document.querySelector('.w-box2').innerHTML="<h4>Enter a valid city!</h4>";
            }
        })
    }
    else
    {
        document.querySelector('.w-box2').innerHTML="<h4>Enter city name to search!</h4>";
    }
})