// Função para enviar uma msg de confirmação, após apertar o botão
function msgDeConfirmacao() {
  // 
  let nome = document.getElementById("name").value;
  let caozinho = document.getElementById("dogs").value;

  if (nome.length != 0 && caozinho.length != 0) {

    let caozinhoNomeMaicusculo = "";
    if (caozinho === "caraEcaramelo") {
      caozinhoNomeMaicusculo = "Cara & Caramelo";
    } else {
      caozinhoNomeMaicusculo = caozinho.charAt(0).toUpperCase() + caozinho.slice(1);
    }

    alert(
      `Olá ${nome}! Bem-vindo(a) à ONG AdoCão!\n\n`+ 
      `Agradecemos seu interesse em adotar o(a) aumiguinho(a) ${caozinhoNomeMaicusculo}!\n` +
      `Recebemos suas informações com sucesso e, em breve, entraremos em contato!\n\n` + 
      `"Lambeijos!"`);
    }
  else {
    alert("Por favor, preencha as informações solicitadas!");
  }
}