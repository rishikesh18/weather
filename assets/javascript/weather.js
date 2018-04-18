    /*Description:
    used two api URl for weather information: one for current and one for forecast.
    On starting page, gets the user geo location and thus obtained latittude and longitude which is 
    used by another api (google api) to get the name of location and passed to weather api url.
    Api used from: Weather UnderGround API
    Used two url: One for current weather condition and another for forecast.    
    http://api.wunderground.com/api/{key}/forecast/q/"+city+".json"
    http://api.wunderground.com/api/{key}/conditions/q/"+city+".json
    
    The response gives difference parameters of current weather information and forecast. We have used icons,
    short description about present condition, some parameters and forecast for three phases (day-night-next day or night-nextday-next night)
    The main problem was to pass the city format to the url and fixed input area in the format that is accepted by API url.
    */


function getCity(city) {
   // var city = "nc/cary";

    //API for wether forecast, use one of the below two api key
    //var queryURL = "https://api.wunderground.com/api/87d18b0282c9396c/forecast/q/"+city+".json"; 
    var queryURL = "https://api.wunderground.com/api/e58ab528f4132c06/forecast/q/"+city+".json";

    $.ajax({
        url: queryURL,
        method: "GET"
        })
        
        .then (function(response) {
            //console.log(response.forecast.txt_forecast.date);
            if (response.forecast) {
               

                    console.log(queryURL);
                    console.log(response);
                    console.log(response.forecast.txt_forecast.date);
                    var x = document.createElement("IMG");
                    x.setAttribute("src", response.forecast.txt_forecast.forecastday[0].icon_url);
                    x.setAttribute("width", "70");
                    x.setAttribute("height", "auto");
                    x.setAttribute("alt", "The Pulpit Rock");            
                    console.log(x);
                    $("#duration1").html(response.forecast.txt_forecast.forecastday[0].title);
                    $("#forecat_first").html(x);
                    $("#forecat_first_description").html(response.forecast.txt_forecast.forecastday[0].fcttext_metric);
                    
                    var y = document.createElement("IMG");
                    y.setAttribute("src", response.forecast.txt_forecast.forecastday[1].icon_url);
                    y.setAttribute("width", "70");
                    y.setAttribute("height", "auto");
                    y.setAttribute("alt", "The Pulpit Rock");       
                    console.log(y);
                    $("#duration2").html(response.forecast.txt_forecast.forecastday[1].title);
                    $("#forecat_second").html(y);
                    $("#forecat_second_description").html(response.forecast.txt_forecast.forecastday[1].fcttext_metric);
                    
                    var z = document.createElement("IMG");
                    z.setAttribute("src", response.forecast.txt_forecast.forecastday[2].icon_url);
                    z.setAttribute("width", "70");
                    z.setAttribute("height", "auto");
                    z.setAttribute("alt", "The Pulpit Rock");       
                    console.log(z);
                    $("#duration3").html(response.forecast.txt_forecast.forecastday[2].title);
                    $("#forecat_third").html(z);
                    $("#forecat_third_description").html(response.forecast.txt_forecast.forecastday[2].fcttext_metric);
            }else{
                
                    $("#duration1").text("");
                    $("#forecat_first").text("");
                    $("#forecat_first_description").text("");
                    $("#duration2").text("");
                    $("#forecat_second").text("");
                    $("#forecat_second_description").text("");
                    $("#duration3").text("");
                    $("#forecat_third").text("");
                    $("#forecat_third_description").text("");
            }
        });
        
    //API url (use one of the two.)
    //var queryURL2 = "https://api.wunderground.com/api/87d18b0282c9396c/conditions/q/"+city+".json"
    var queryURL2 = "https://api.wunderground.com/api/e58ab528f4132c06/conditions/q/"+city+".json"
    console.log(queryURL2);

    $.ajax({
        url: queryURL2,
        method: "GET"
        })
        
        .then (function(response) {
            if (response.current_observation) {
               
                    console.log(response);
                
                    var x = document.createElement("IMG");
                    x.setAttribute("src", response.current_observation.icon_url);
                    x.setAttribute("width", "70");
                    x.setAttribute("height", "auto");
                    x.setAttribute("alt", "The Pulpit Rock");        
                    console.log(x);        
                    $("#current_condition").html(response.current_observation.weather); 
                    $("#current_img").html(x);
                    $("#current_data").html("<p>Temperature: "+response.current_observation.temp_c + " C</p></br>"+                                           
                                            "<p>Precipitation today (mm): "+response.current_observation.precip_today_metric+ "</p></br>");
                    $("#current_data2").html("<p>Relative Humidity: "+response.current_observation.relative_humidity + "</p></br>"+
                                            "<p>Wind: "+response.current_observation.wind_string + "</p></br>"+
                                            "<p>Visibility: "+response.current_observation.visibility_km + " km</p></br>"+
                                    "<p>Atmospheric Pressure (mb): "+response.current_observation.pressure_mb+ "</p></br>");
            } else {
                $("#current_condition").text("Cannot get the Weather information. Please re-enter City and State. If you still can not get weather information, please try with different name or nearby city"); 
                $("#current_img").text("");
                $("#current_data").text("");
                $("#current_data2").text("");
                
            }

        });

    var queryURL3 = "https://api.wunderground.com/api/e58ab528f4132c06/forecast10day/q/"+city+".json"

    console.log(queryURL3);
    
    $.ajax({
        url: queryURL3,
        method: "GET"
            })
            
        .then (function(response) {
            if (response.forecast) {
               

                console.log(queryURL);
                console.log(response);
                console.log(response.forecast.txt_forecast.date);
                var x1 = document.createElement("IMG");
                x1.setAttribute("src", response.forecast.txt_forecast.forecastday[3].icon_url);
                x1.setAttribute("width", "70");
                x1.setAttribute("height", "auto");
                x1.setAttribute("alt", "The Pulpit Rock");            
                console.log(x1);
                $("#day1").html(response.forecast.txt_forecast.forecastday[3].title);
                $("#forecat_day1").html(x1);
                $("#forecat_day1_description").html(response.forecast.txt_forecast.forecastday[3].fcttext_metric);

                var x2 = document.createElement("IMG");
                x2.setAttribute("src", response.forecast.txt_forecast.forecastday[4].icon_url);
                x2.setAttribute("width", "70");
                x2.setAttribute("height", "auto");
                x2.setAttribute("alt", "The Pulpit Rock");            
                console.log(x2);
                $("#day2").html(response.forecast.txt_forecast.forecastday[4].title);
                $("#forecat_day2").html(x2);
                $("#forecat_day2_description").html(response.forecast.txt_forecast.forecastday[4].fcttext_metric);

                var x3 = document.createElement("IMG");
                x3.setAttribute("src", response.forecast.txt_forecast.forecastday[5].icon_url);
                x3.setAttribute("width", "70");
                x3.setAttribute("height", "auto");
                x3.setAttribute("alt", "The Pulpit Rock");            
                console.log(x3);
                $("#day3").html(response.forecast.txt_forecast.forecastday[5].title);
                $("#forecat_day3").html(x3);
                $("#forecat_day3_description").html(response.forecast.txt_forecast.forecastday[5].fcttext_metric);

                var x4 = document.createElement("IMG");
                x4.setAttribute("src", response.forecast.txt_forecast.forecastday[6].icon_url);
                x4.setAttribute("width", "70");
                x4.setAttribute("height", "auto");
                x4.setAttribute("alt", "The Pulpit Rock");            
                console.log(x4);
                $("#day4").html(response.forecast.txt_forecast.forecastday[6].title);
                $("#forecat_day4").html(x4);
                $("#forecat_day4_description").html(response.forecast.txt_forecast.forecastday[6].fcttext_metric);

                var x5 = document.createElement("IMG");
                x5.setAttribute("src", response.forecast.txt_forecast.forecastday[7].icon_url);
                x5.setAttribute("width", "70");
                x5.setAttribute("height", "auto");
                x5.setAttribute("alt", "The Pulpit Rock");            
                console.log(x5);
                $("#day5").html(response.forecast.txt_forecast.forecastday[7].title);
                $("#forecat_day5").html(x5);
                $("#forecat_day5_description").html(response.forecast.txt_forecast.forecastday[7].fcttext_metric);

                var x6 = document.createElement("IMG");
                x6.setAttribute("src", response.forecast.txt_forecast.forecastday[8].icon_url);
                x6.setAttribute("width", "70");
                x6.setAttribute("height", "auto");
                x6.setAttribute("alt", "The Pulpit Rock");            
                console.log(x6);
                $("#day6").html(response.forecast.txt_forecast.forecastday[8].title);
                $("#forecat_day6").html(x6);
                $("#forecat_day6_description").html(response.forecast.txt_forecast.forecastday[8].fcttext_metric);
                
        }else{
            
                $("#day1").text("");
                $("#forecat_day1").text("");
                $("#fforecat_day1_description").text("");
               
        }
            });    
};

$("#searchbtn").click(function(event){
    event.preventDefault();
    
    state2= $("#stateInput").val().trim();
    place= $("#cityInput").val().trim();
    city = state2+"/"+place;
    console.log(city);
    getCity(city);
    
   
});

function getLocation() {
   
        navigator.geolocation.getCurrentPosition(showPosition);        
}
 

function showPosition(position) {
    var getLatitude = position.coords.latitude;
    var getLongitude = position.coords.longitude;
    //console.log(getLatitude);
   // console.log(getLongitude);
    var apiCode = "AIzaSyBxbpX0AuckHtRbiG6fA8EFQoX6WDeZYFk";
    //var queryURL1 = "http://maps.googleapis.com/maps/api/geocode/json?latlng=" + getLatitude+"," + getLongitude+ "&sensor=true";
    var queryURL1 = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + getLatitude + "," + getLongitude + "&key=" + apiCode;
   
    console.log(queryURL1);
    $.ajax({
    url: queryURL1,
    method: "GET"
    })
    
        .then (function(response) {
            response.results[0].address_components.forEach(function(data1){
                    data1.types.forEach(function(data2){
                        if(data2 ==="locality"){
                            cityName=data1.long_name;
           
                        }
                        if(data2=== "administrative_area_level_1"){
                            state=data1.long_name;
           
                        }
                        if(data2=== "country"){
                            country=data1.long_name;
           
                        }
                    })
          
            });
        console.log(country);
        if(country !="United States"){
            state=country;
        }
        //console.log(response.results[0].address_components[5].long_name);
        //console.log(response.results[0].address_components[2].long_name);
        //console.log(response.results[0].address_components[6].long_name);
       // console.log(response.results[0].address_components[3].long_name);
      //  state=response.results[0].address_components[5].long_name;
        //cityName=response.results[0].address_components[2].long_name;
        var city= state+"/"+cityName;
        $("#userLocation").html(cityName +", " +state);
        getCity(city);
        });
        
}

$( document ).ready(function() {

    if (navigator.geolocation) {
         getLocation();
      //   getCity();
    }
    else {
        console.log("not available");
    
    }     

});

