function convertirCelsiusAFahrenheit(celcius){
    let fahrenheit = (celcius * 1.8 + 32)
    return fahrenheit
}

let celcius = parseFloat(prompt("Ingrese Los grados en Celcius"))

console.log(celcius,"°C son equivalentes a ",convertirCelsiusAFahrenheit(celcius),"°F")