document.getElementById("enviar").addEventListener("click", function() {
  const nome = document.getElementById("nome").value;;
  const email = document.getElementById("email").value;
  alert("Ola, " + nome + " obrigado por se inscrever utilizando este email " + email);
});