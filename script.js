$(document).ready(function () {
    $("#btn").click(function () {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=Bishkek,KG&units=metric&appid=bccfa2f00f106c3d26705102ca41b5fa")
            .then(res => res.json())
            .then(data => {
                let weather = data.weather[0].main;
                console.log(weather);
                $("#weather-text").text("Weather: " + weather);
                if (weather === "Clear") {
                    $("#weather-img").attr("src", "imgggg/clear.jpg");
                    $("body").css("background", "#0298fcff");
                } else if (weather === "Clouds") {
                $("#weather-img").attr("src", "imgggg/cloudy.jpg");
                $("body").css("background", "#b0b0b0");
                } 
                else if (weather === "Rain") {
                $("#weather-img").attr("src", "imgggg/rainn.jpg");
                $("body").css("background", "#4f6d7a");
                } 
                else if (weather === "Snow") {
                $("#weather-img").attr("src", "imgggg/snow!.jpg");
                $("body").css("background", "#e8faff");
                } 
                else if (weather === "Thunderstorm") {
                $("#weather-img").attr("src", "imgggg/thunder-Photoroom.png");
                $("body").css("background", "#2b2b2b");
                } 
                else {
                $("#weather-img").attr("src", "imgggg/mist.png");
                $("body").css("background", "#cfcfcf");
                }
            });
    });
});
