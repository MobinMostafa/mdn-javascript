const select = document.querySelector("select");
const para = document.querySelector("p");

const setWeatherApp = () => {
    const choices = select.value;

    if(choices === "sunny"){
        para.textContent = "It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.";
    } else if( choices === "rainy"){
        para.textContent = "Rain is falling outside; take a rain coat and an umbrella, and don't stay out for too long.";
    } else if( choices === "snowing"){
        para.textContent = "The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.";
    } else if( choices === "overcast"){
        para.textContent = "It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.";
    }else {
        para.textContent = "";
    }
}

select.addEventListener("change", setWeatherApp)