
var sessao = sessionStorage.getItem('login');

if(sessao == null){
 sessao = "não logado";
}


 document.getElementById('inicial').innerHTML = `
<html lang="pt-br">
 <head>
  <meta charset="UTF-8">
 <meta http-equiv="X-UA-Compatible" content="IE=edge">
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
 <title>Consumindo API</title>
 <link rel="stylesheet" href="/css/styles.css">
 <link rel="stylesheet" href="/css/w3.css">
 <link rel="stylesheet" href="/css/login.css">
 </head>
 `


 document.getElementById('header').innerHTML = `
 <header class="w3-margin-bottom"> 
 <div class="w3-bar w3-black">
   <a href="/index.html" class="w3-bar-item w3-button">Inicio</a>
   <a href="/marcacao/uploadImage.html" class="w3-bar-item w3-button">Upload de Avatar</a>
   <a href="/marcacao/criarJogador.html" class="w3-bar-item w3-button">Criar Jogador</a>
   <a href="/marcacao/editarJogador.html" class="w3-bar-item w3-button">Editar Jogador</a>
  
 </div> 
 </header>
 <br>
 <h3 class="w3-margin-bottom w3-bar-item w3-blue" id="titulo">Pelada do maruim &nbsp;&nbsp;&nbsp;&nbsp;${sessao}</h3>
 `