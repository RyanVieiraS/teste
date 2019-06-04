$(document).on("click",".num",function(){
  var valor =  $("#visorCalculadora").val();
  $("#visorCalculadora").val(valor + $(this).val());
})

$(document).on("click", ".oper", function(){
  if($("#visorCalculadora").val() != ""){
    var valor1 = $("#visorCalculadora").val();
    $("#visorCalculadora").val(valor1 + $(this).val() + " ");
  } else {
      alert("O campo está vazio. Insira algum valor")
  }
})

$(document).on("click", ".numIgual", function(){
  var valorFinal = $("#visorCalculadora").val();
  var valorFinal2 = valorFinal.split(" ");

  switch(valorFinal2[1]){
     case "÷":
        var resultado = valorFinal2[0] / valorFinal2[2];
        break;
     case "x":
        var resultado = valorFinal2[0] * valorFinal2[2];
        break;
     case "+":
        var resultado = parseFloat(valorFinal2[0]) + parseFloat(valorFinal2[2]);
        break;
     case "-":
         var resultado = valorFinal2[0] - valorFinal2[2];
         break;
  }
  $("#visorCalculadora").val(resultado);
})

$(document).on("click", ".botaoReset", function(){
    $("#visorCalculadora").val("");
})
