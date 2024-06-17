let usuarios = [
    {
    nome: "joao",
    email: "email@email.com",
    idade: "18",
  },
  {
    nome: "joao",
    email: "email2@email.com",
    idade: "18",
  },
];
console.log("digite o email do usuario");
process.stdin.on("data", function (data) {
  entrada_usuario = data.toString().trim().toLowerCase();

  usuarios.forEach((usuario) => {
    if (entrada_usuario == usuario.email) {
      console.log(entrada_usuario, "esta presente");
      process.exit();
    } else {
      console.log(entrada_usuario, "não foi encontrado");
      console.log("digite novamente")
    }
  });
});
