function Get_weather() {
    const city = document.getElementById("input_search").value;
    const API = "bdde7694cfce2e5c7fa6e3a8e5f755e5";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}&lang=ru`;


    let temperature = document.getElementById("temperature");
    let city_name = document.getElementById("city_name");
    let description = document.getElementById("description");
    let icon_main = document.getElementById("icon_main");
    let humidity = document.getElementById("humidity")
    let sunrise = document.getElementById("sunrise")
    let sunset = document.getElementById("sunset")
    let speed = document.getElementById("speed")
    let clouds = document.getElementById("clouds-all")
    let visibility = document.getElementById("visibility") 

    let temp1 = document.getElementById("temp1");
    let temp2 = document.getElementById("temp2");
    let temp3 = document.getElementById("temp3");
    let temp4 = document.getElementById("temp4");
    let temp5 = document.getElementById("temp5");
    let temp6 = document.getElementById("temp6");
    let temp7 = document.getElementById("temp7");
    let temp8 = document.getElementById("temp8");
    let temp9 = document.getElementById("temp9");
    let temp10 = document.getElementById("temp10");
    let temp11 = document.getElementById("temp11");
    let temp12 = document.getElementById("temp12");
    let temp13 = document.getElementById("temp13");
    let temp14 = document.getElementById("temp14");
    let temp15 = document.getElementById("temp15");
    let temp16 = document.getElementById("temp16");
    let temp17 = document.getElementById("temp17");
    let temp18 = document.getElementById("temp18");
    let temp19 = document.getElementById("temp19");
    let temp20 = document.getElementById("temp20");
    let temp21 = document.getElementById("temp21");
    let temp22 = document.getElementById("temp22");
    let temp23 = document.getElementById("temp23");
    let temp24 = document.getElementById("temp24");
    let temp25 = document.getElementById("temp25");

    let icon1 = document.getElementById("icon1");
    let icon2 = document.getElementById("icon2");
    let icon3 = document.getElementById("icon3");
    let icon4 = document.getElementById("icon4");
    let icon5 = document.getElementById("icon5");
    let icon6 = document.getElementById("icon6");
    let icon7 = document.getElementById("icon7");
    let icon8 = document.getElementById("icon8");
    let icon9 = document.getElementById("icon9");
    let icon10 = document.getElementById("icon10");
    let icon11 = document.getElementById("icon11");
    let icon12 = document.getElementById("icon12");
    let icon13 = document.getElementById("icon13");
    let icon14 = document.getElementById("icon14");
    let icon15 = document.getElementById("icon15");
    let icon16 = document.getElementById("icon16");
    let icon17 = document.getElementById("icon17");
    let icon18 = document.getElementById("icon18");
    let icon19 = document.getElementById("icon19");
    let icon20 = document.getElementById("icon20");
    let icon21 = document.getElementById("icon21");
    let icon22 = document.getElementById("icon22");
    let icon23 = document.getElementById("icon23");
    let icon24 = document.getElementById("icon24");
    let icon25 = document.getElementById("icon25");

    let date1 = document.getElementById("date1");
    let date2 = document.getElementById("date2");
    let date3 = document.getElementById("date3");
    let date4 = document.getElementById("date4");
    let date5 = document.getElementById("date5");
    let date6 = document.getElementById("date6");
    let date7 = document.getElementById("date7");
    let date8 = document.getElementById("date8");
    let date9 = document.getElementById("date9");
    let date10 = document.getElementById("date10");
    let date11 = document.getElementById("date11");
    let date12 = document.getElementById("date12");
    let date13 = document.getElementById("date13");
    let date14 = document.getElementById("date14");
    let date15 = document.getElementById("date15");
    let date16 = document.getElementById("date16");
    let date17 = document.getElementById("date17");
    let date18 = document.getElementById("date18");
    let date19 = document.getElementById("date19");
    let date20 = document.getElementById("date20");
    let date21 = document.getElementById("date21");
    let date22 = document.getElementById("date22");
    let date23 = document.getElementById("date23");
    let date24 = document.getElementById("date24");
    let date25 = document.getElementById("date25");


    if (!city) {
        return;
    }

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === "404") {
                alert("Город не найден");
                return;
            }

            switch (data.weather[0].main) {
                case 'Clear':
                    icon_main.src = 'img/солнечно.png';
                    break;

                case 'Rain':
                    icon_main.src = 'img/дождливо.png';
                    break;

                case 'Snow':
                    icon_main.src = 'img/снег и гроза.png';
                    break;

                case 'Clouds':
                    icon_main.src = 'img/облачно.png';
                    break;

                case 'Haze':
                    icon_main.src = 'img/ветренно.png';
                    break;

                default:
                    icon_main.src = '';
            }

            temperature.textContent = `${Math.round(data.main.temp - 273.15)}°C`;
            city_name.textContent = `${data.name}, ${data.sys.country}`;
            description.textContent = `${data.weather[0].description}`;
            humidity.textContent = `${data.main.humidity}%`;
            sunrise.textContent = `${new Date(data.sys.sunrise * 1000).toLocaleString()}`;
            sunset.textContent = `${new Date(data.sys.sunset * 1000).toLocaleString()}`;
            speed.textContent = `${parseInt(data.wind.speed)} км/ч`;
            clouds.textContent = `${data.clouds.all}%`;
            visibility.textContent = `${data.visibility}м`;

            const lon = `${data.coord.lon}`
            const lat = `${data.coord.lat}`

            const url_2 = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API}&lang=ru`
            fetch(url_2)
                .then(response => response.json())
                .then(data => {
                    if (data.cod === "404") {
                        alert("Данные на 5 дней не найдены!");
                        return;
                    }
        
                    temp1.textContent = `${Math.round(data.list[1].main.temp - 273.15)}°C`
                    temp2.textContent = `${Math.round(data.list[2].main.temp - 273.15)}°C`
                    temp3.textContent = `${Math.round(data.list[3].main.temp - 273.15)}°C`
                    temp4.textContent = `${Math.round(data.list[4].main.temp - 273.15)}°C`
                    temp5.textContent = `${Math.round(data.list[5].main.temp - 273.15)}°C`
                    temp6.textContent = `${Math.round(data.list[6].main.temp - 273.15)}°C`
                    temp7.textContent = `${Math.round(data.list[7].main.temp - 273.15)}°C`
                    temp8.textContent = `${Math.round(data.list[8].main.temp - 273.15)}°C`
                    temp9.textContent = `${Math.round(data.list[9].main.temp - 273.15)}°C`
                    temp10.textContent = `${Math.round(data.list[10].main.temp - 273.15)}°C`
                    temp11.textContent = `${Math.round(data.list[11].main.temp - 273.15)}°C`
                    temp12.textContent = `${Math.round(data.list[12].main.temp - 273.15)}°C`
                    temp13.textContent = `${Math.round(data.list[13].main.temp - 273.15)}°C`
                    temp14.textContent = `${Math.round(data.list[14].main.temp - 273.15)}°C`
                    temp15.textContent = `${Math.round(data.list[15].main.temp - 273.15)}°C`
                    temp16.textContent = `${Math.round(data.list[16].main.temp - 273.15)}°C`
                    temp17.textContent = `${Math.round(data.list[17].main.temp - 273.15)}°C`
                    temp18.textContent = `${Math.round(data.list[18].main.temp - 273.15)}°C`
                    temp19.textContent = `${Math.round(data.list[19].main.temp - 273.15)}°C`
                    temp20.textContent = `${Math.round(data.list[20].main.temp - 273.15)}°C`
                    temp21.textContent = `${Math.round(data.list[21].main.temp - 273.15)}°C`
                    temp22.textContent = `${Math.round(data.list[22].main.temp - 273.15)}°C`
                    temp23.textContent = `${Math.round(data.list[23].main.temp - 273.15)}°C`
                    temp24.textContent = `${Math.round(data.list[24].main.temp - 273.15)}°C`
                    temp25.textContent = `${Math.round(data.list[25].main.temp - 273.15)}°C`
                    temp26.textContent = `${Math.round(data.list[26].main.temp - 273.15)}°C`
                    temp27.textContent = `${Math.round(data.list[27].main.temp - 273.15)}°C`
                    temp28.textContent = `${Math.round(data.list[28].main.temp - 273.15)}°C`
                    temp29.textContent = `${Math.round(data.list[29].main.temp - 273.15)}°C`
                    temp30.textContent = `${Math.round(data.list[30].main.temp - 273.15)}°C`

                    icon1.src = `http://openweathermap.org/img/w/${data.list[1].weather[0].icon}.png`
                    icon2.src = `http://openweathermap.org/img/w/${data.list[2].weather[0].icon}.png`
                    icon3.src = `http://openweathermap.org/img/w/${data.list[3].weather[0].icon}.png`
                    icon4.src = `http://openweathermap.org/img/w/${data.list[4].weather[0].icon}.png`
                    icon5.src = `http://openweathermap.org/img/w/${data.list[5].weather[0].icon}.png`
                    icon6.src = `http://openweathermap.org/img/w/${data.list[6].weather[0].icon}.png`
                    icon7.src = `http://openweathermap.org/img/w/${data.list[7].weather[0].icon}.png`
                    icon8.src = `http://openweathermap.org/img/w/${data.list[8].weather[0].icon}.png`
                    icon9.src = `http://openweathermap.org/img/w/${data.list[9].weather[0].icon}.png`
                    icon10.src = `http://openweathermap.org/img/w/${data.list[10].weather[0].icon}.png`
                    icon11.src = `http://openweathermap.org/img/w/${data.list[11].weather[0].icon}.png`
                    icon12.src = `http://openweathermap.org/img/w/${data.list[12].weather[0].icon}.png`
                    icon13.src = `http://openweathermap.org/img/w/${data.list[13].weather[0].icon}.png`
                    icon14.src = `http://openweathermap.org/img/w/${data.list[14].weather[0].icon}.png`
                    icon15.src = `http://openweathermap.org/img/w/${data.list[15].weather[0].icon}.png`
                    icon16.src = `http://openweathermap.org/img/w/${data.list[16].weather[0].icon}.png`
                    icon17.src = `http://openweathermap.org/img/w/${data.list[17].weather[0].icon}.png`
                    icon18.src = `http://openweathermap.org/img/w/${data.list[18].weather[0].icon}.png`
                    icon19.src = `http://openweathermap.org/img/w/${data.list[19].weather[0].icon}.png`
                    icon20.src = `http://openweathermap.org/img/w/${data.list[20].weather[0].icon}.png`
                    icon21.src = `http://openweathermap.org/img/w/${data.list[21].weather[0].icon}.png`
                    icon22.src = `http://openweathermap.org/img/w/${data.list[22].weather[0].icon}.png`
                    icon23.src = `http://openweathermap.org/img/w/${data.list[23].weather[0].icon}.png`
                    icon24.src = `http://openweathermap.org/img/w/${data.list[24].weather[0].icon}.png`
                    icon25.src = `http://openweathermap.org/img/w/${data.list[25].weather[0].icon}.png`
                    icon26.src = `http://openweathermap.org/img/w/${data.list[26].weather[0].icon}.png`
                    icon27.src = `http://openweathermap.org/img/w/${data.list[27].weather[0].icon}.png`
                    icon28.src = `http://openweathermap.org/img/w/${data.list[28].weather[0].icon}.png`
                    icon29.src = `http://openweathermap.org/img/w/${data.list[29].weather[0].icon}.png`
                    icon30.src = `http://openweathermap.org/img/w/${data.list[30].weather[0].icon}.png`

                    date1.textContent = `${data.list[1].dt_txt}`
                    date2.textContent = `${data.list[2].dt_txt}`
                    date3.textContent = `${data.list[3].dt_txt}`
                    date4.textContent = `${data.list[4].dt_txt}`
                    date5.textContent = `${data.list[5].dt_txt}`
                    date6.textContent = `${data.list[6].dt_txt}`
                    date7.textContent = `${data.list[7].dt_txt}`
                    date8.textContent = `${data.list[8].dt_txt}`
                    date9.textContent = `${data.list[9].dt_txt}`
                    date10.textContent = `${data.list[10].dt_txt}`
                    date11.textContent = `${data.list[11].dt_txt}`
                    date12.textContent = `${data.list[12].dt_txt}`
                    date13.textContent = `${data.list[13].dt_tx}`
                    date14.textContent = `${data.list[14].dt_txt}`
                    date15.textContent = `${data.list[15].dt_txt}`
                    date16.textContent = `${data.list[16].dt_txt}`
                    date17.textContent = `${data.list[17].dt_txt}`
                    date18.textContent = `${data.list[18].dt_txt}`
                    date19.textContent = `${data.list[19].dt_txt}`
                    date20.textContent = `${data.list[20].dt_txt}`
                    date21.textContent = `${data.list[21].dt_txt}`
                    date22.textContent = `${data.list[22].dt_txt}`
                    date23.textContent = `${data.list[23].dt_txt}`
                    date24.textContent = `${data.list[24].dt_txt}`
                    date25.textContent = `${data.list[25].dt_txt}`
                    date26.textContent = `${data.list[26].dt_txt}`
                    date27.textContent = `${data.list[27].dt_txt}`
                    date28.textContent = `${data.list[28].dt_txt}`
                    date29.textContent = `${data.list[29].dt_txt}`
                    date30.textContent = `${data.list[30].dt_txt}`
                    // date36.textContent = `${data.list[36].dt_txt}`
                    // date37.textContent = `${data.list[37].dt_txt}`
                    // date38.textContent = `${data.list[38].dt_txt}`
                    // date39.textContent = `${data.list[39].dt_txt}`
                    // date40.textContent = `${data.list[40].dt_txt}`
                    // date1.textContent = `${data.list[1].dt_txt}`
                    // date2.textContent = `${data.list[9].dt_txt}`
                    // date3.textContent = `${data.list[17].dt_txt}`
                    // date4.textContent = `${data.list[25].dt_txt}`
                    // date5.textContent = `${data.list[33].dt_txt}`
        
                })
        })
        .catch(error => {
            alert("Ошибка при получении данных");
            console.error('Ошибка при получении данных:'+ error);
        });
}