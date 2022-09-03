fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=minimal")
    .then(res=>res.json())
    .then(data=> {
        document.body.style.backgroundImage = `url(${data.urls.full}`
    })

    function getCurrentTime() {
        const date = new Date()
        document.getElementById("time").textContent = date.toLocaleTimeString("en-us", {timeStyle: "short"})
    }
    
    setInterval(getCurrentTime, 1000)

// ========================

    navigator.geolocation.getCurrentPosition(position => {
        fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial`)
            .then(res => {
                if (!res.ok) {
                    throw Error("Weather data not available")
                }
                return res.json()
            })
            .then(data => {
                // const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
                document.getElementById("weather").innerHTML = `
                    <p class="weather-temp">${Math.round(data.main.temp)}º</p>
                    <p class="weather-city">${data.name}</p>
                `
            })
            .catch(err => console.error(err))
    });