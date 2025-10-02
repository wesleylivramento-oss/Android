function calcularLanhouse() {
   
    let valor = Number(document.getElementById("valor").value);
    let tempo = Number(document.getElementById("tempo").value);
    let saida1 = document.getElementById("saida1");
  
   
    if (valor <= 0 || tempo <= 0) {
      saida1.innerHTML = "⚠️ Preencha os valores corretamente.";
      return;
    }
  
   
    let blocos = Math.ceil(tempo / 15);
  
    
    let total = blocos * valor;
  
   
    saida1.innerHTML = `⏳ Tempo usado: <b>${tempo} minutos</b><br>
    🔹 Blocos cobrados: <b>${blocos} de 15 minutos</b><br>
    💰 Valor a pagar: <b>R$ ${total.toFixed(2)}</b>`;
  }
  