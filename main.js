const kelvin = 0; // forecasted temperature, mesured in kelvin
var celsius = kelvin - 273; // converting kelvin units to celsius
var farenheit = (celsius * (9 / 5) + 32); // converting celsius units to farenheit
var floorFarenheit = Math.floor(farenheit); // rounding farenheit down to the nearest smaller integer

console.log(`The temperature is ${floorFarenheit} degrees Farenheit`);

var newton = (celsius * 0.33);
var floorNewton = Math.floor(newton);

console.log(`The temperature is ${floorNewton} degrees Newton`);
