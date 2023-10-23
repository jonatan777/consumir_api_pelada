
var sessao = sessionStorage.getItem('login');

if(sessao == null){
 sessao = "não logado";
}

/** 
 document.getElementById('inicial').innerHTML = `
 <html lang="pt-br">
 <head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="description" content="pelada do maruin todo domingo, PE-22 ENG-MARANGUAPE 6:00 AM, sistema de contagem de pontos e gols">
  <meta name="theme-color" content="#5f5eaa">
  <link rel="manifest" href="/manifest.json">
  <link rel="icon" href="/images/img_fundo/dev.webp">
  <link rel="apple-touch-icon" href="/images/img_fundo/responsive.png"></link>
  <title>Pelada do maruim</title>
  <link rel="stylesheet" href="/css/styles.css">
  <link rel="stylesheet" href="/css/w3.css">
  <link rel="stylesheet" href="/css/login.css">
 </head>
 `
  */
  
  

 document.getElementById('header').innerHTML = `
 <header class="w3-margin-bottom"> 
 <div class="w3-bar w3-black">
 <br>
 <img class="w3-circle w3-left w3-margin-bottom" id="logo" src ="/images/img_fundo/favicon.ico" alt="logo" width="40" height="40">
   <a href="/index.html" class="w3-bar-item w3-button  ">Inicio</a>
   <a href="/marcacao/uploadImage.html" class="w3-bar-item w3-button">Upload de Avatar</a>
   <a href="/marcacao/criarJogador.html" class="w3-bar-item w3-button">Criar Jogador</a>
   <a href="/marcacao/editarJogador.html" class="w3-bar-item w3-button">Editar Jogador</a>
   </div> 
 </header>
 <br>
 <h3 class="w3-margin-bottom w3-bar-item w3-blue w3-center w3-padding-16" id="titulo">Pelada do maruim &nbsp;&nbsp;admin:&nbsp;&nbsp;${sessao}</h3>
 `

 document.getElementById('footer').innerHTML = `
 <div class="w3-container w3-margin w3-padding-16">
 <br>
 <br>
<p>Web Designer</p>
<p>www.desenvolvimentowebfreelancer.com/</p> 
<p>jonataneduardo777@gmail.com</p>
<p>(81)98819-0488</p>
</div>
 `