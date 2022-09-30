function Converter() {
    var tempElemento = document.getElementById("temp");
    var temp = tempElemento.value;
    var tempEmCelsius = parseFloat(temp);

    var tempEmFahrenheit = (tempEmCelsius * 9/5) + 32 ;
    console.log(tempEmFahrenheit);

    var elementoTempConvertida = document.getElementById("tempConvertida");
    var tempConvertida = tempEmFahrenheit + "ºF";
    elementoTempConvertida.innerHTML = tempConvertida;
}