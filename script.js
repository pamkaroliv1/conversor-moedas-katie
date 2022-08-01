function Converter() {
    let input = parseFloat(document.getElementById("valor_inicial").value);
    let output = document.getElementById("resultado");
    let de = document.getElementById("moedasde");
    let para = document.getElementById("moedaspara");
    
    console.log(de.value)
  
    //dolar
    if (de.value == "USD" && para.value != "Dólar") {
      let valorEmDolar= input;
      let valor;
      if (para.value == "USD") {
        valor = `O valor em dolar é: \ ${valorEmDolar.toFixed(2)}`;
      } else if (para.value == "EUR") {
        valor = "O valor em euros é: €" + (valorEmDolar * 0.98).toFixed(2);
      } else if (para.value == "BRL") {
        valor = `O valor em Real é: \R${(valorEmDolar * 5.19).toFixed(2)}`;
      }
      output.innerHTML = valor;
    } else {
        output.innerHTML = '';
    }
  }


  // Euro
  if (de.value == "EUR" && para.value != "Euro") {
    let valorEmEuro= input;
    let valor;
    if (para.value == "EUR"){
      valor = "O valor em Euro é: €" + valorEmEuro.toFixed(2);
      } else if (para.value == "USD") {
      valor = `O valor em Dólar é: ${(valorEmEuro * 1.03).toFixed(2)}`;
    } else if (para.value == "BRL") {
      valor = `O valor em Real é: \R${(valorEmEuro * 5.32).toFixed(2)}`;
    }
    output.innerHTML = valor;
  } else {
      output.innerHTML = '';}
