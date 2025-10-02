function calcularPromocao() {
   
    let descricao = document.getElementById("descricao").value;
    let preco = parseFloat(document.getElementById("preco").value);
  
 
    if (descricao === "" || isNaN(preco) || preco <= 0) {
      document.getElementById("saida").innerHTML = "⚠️ Preencha os campos corretamente.";
      document.getElementById("saida1").innerText = "";
      document.getElementById("saida2").innerText = "";
      return;
    }
  
   
    let total = preco * 2;
  
  
    let desconto = total - Math.floor(total);
  

    let valorFinal = total - desconto;
  
    document.getElementById("saida").innerHTML = "";
    document.getElementById("saida1").innerText = "Promoção de " + descricao;
    document.getElementById("saida2").innerText = "Leve 2 por apenas R$: " + valorFinal.toFixed(2);
  }
  