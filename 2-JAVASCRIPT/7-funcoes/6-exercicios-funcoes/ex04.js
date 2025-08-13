// Converter Celsius para Fahrenheit

const entrada = requiri('prompt-sync')({sigint: true});
let tempCelsius = Number(entrada('informe a temperatura em Celsius(°C): '));

const conversorTemp = (cel) =>{(cel * (9/5)) + 32};

let tempFahrenheit = conversorTemp(tempCelsius);
console.log(`${tempFahrenheit} °F`);