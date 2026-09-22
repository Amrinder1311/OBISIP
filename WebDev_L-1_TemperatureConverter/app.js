function convertTemperature() {

```
let temperature = Number(document.getElementById("temperature").value);
let fromUnit = document.getElementById("fromUnit").value;
let toUnit = document.getElementById("toUnit").value;
let result = document.getElementById("result");

if (document.getElementById("temperature").value === "") {
    result.innerText = "Please enter a temperature.";
    return;
}

let convertedTemperature;

// Celsius
if (fromUnit === "celsius") {

    if (toUnit === "fahrenheit") {
        convertedTemperature = (temperature * 9 / 5) + 32;
    }

    else if (toUnit === "kelvin") {
        convertedTemperature = temperature + 273.15;
    }

    else {
        convertedTemperature = temperature;
    }
}


// Fahrenheit
else if (fromUnit === "fahrenheit") {

    if (toUnit === "celsius") {
        convertedTemperature = (temperature - 32) * 5 / 9;
    }

    else if (toUnit === "kelvin") {
        convertedTemperature = (temperature - 32) * 5 / 9 + 273.15;
    }

    else {
        convertedTemperature = temperature;
    }
}


// Kelvin
else if (fromUnit === "kelvin") {

    if (toUnit === "celsius") {
        convertedTemperature = temperature - 273.15;
    }

    else if (toUnit === "fahrenheit") {
        convertedTemperature = (temperature - 273.15) * 9 / 5 + 32;
    }

    else {
        convertedTemperature = temperature;
    }
}


result.innerText =
    "Result: " + convertedTemperature.toFixed(2);
```

}

function clearFields() {

```
document.getElementById("temperature").value = "";

document.getElementById("fromUnit").value = "celsius";

document.getElementById("toUnit").value = "fahrenheit";

document.getElementById("result").innerText =
    "Enter a temperature and click Convert";
```

}
