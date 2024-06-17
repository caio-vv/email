let usuarios = [usuario = {
    nome: "",
    email: "joao",
    idade: "",
}]

process.stdin.on("data", function (data){
    entrada_usuario = data.toString().trim().toLowerCase()

    usuarios.forEach(usuario => {
        if (entrada_usuario == usuario.email){
            console.log("boa")
        }   else {
            console.log("nah")
        }
    });

})