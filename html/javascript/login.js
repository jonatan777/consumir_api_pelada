
function autorizacao(){
    var user = document.getElementById('user').value
    var senha = document.getElementById('senha').value

    console.log(user)
    console.log(senha)
   
    const url = `http://181.215.135.83:8188/users/get/jogador/${user}`;

    fetch(url)
    .then((resp) => resp.json())
    .then(function (data) {
        let usuario = data;
          console.log(usuario)
        if(usuario.senha == senha){
         
            sessionStorage.setItem("login", usuario.login);
            window.location = "http://127.0.0.1:5500/index.html"
        }else {
          document.getElementById("result").innerHTML = `<h3>senha errada!</h3>`
        }
    })
    .catch(function (error) {
        console.log(error);
        naoAutorizado();
    });

}
/*
function redirectTime(){
    window.location = "http://127.0.0.1:5500/marcacao/criarJogador.html"
 }
*/
 function naoAutorizado(){
    document.getElementById("result").innerHTML = `<h3>usuário não existe</h3>`
 }