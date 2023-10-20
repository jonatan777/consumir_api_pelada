

if(sessao == null || sessao == "não logado"){

    window.location = "https://www.peladadomaruin.com.br/marcacao/login.html"
}




/*
 * 
 * quando a pagina e carrega é preenchida uma tabela com dados da api
 * 
 */ 

const root = document.getElementById('root')
const url = 'http://181.215.135.83:8189/jogadores';

fetch(url)
	.then((resp) => resp.json())
	.then(function (data) {
		let jogadores = data;
	
		const tableBody = jogadores.map((jogador) => {
			return `
    <tr>
      <td><img class="w3-circle" src = ${jogador.imagen} width="40" height="40"></td>
      <td>${jogador.nome} 
      </td>
      <td>
      <button   onclick="editar(${jogador.id})">Editar</button>
      <button  onclick="deleteJogador(${jogador.id})">Deletar</button>
      </td>
    </tr>
    `
		}).join('')
		const table = `
		<div id="tabelaEditar">
		<table class="w3-table-all w3-hoverable" style="width:90%">

     <tr>
      <td>Imagem</td>
      <td>Nome</td>
      <td>Ação</td>
     </tr>
        ${tableBody}
   </table>
	</div>
	
	`;
		root.insertAdjacentHTML('beforeend', table)
	})
	.catch(function (error) {
		console.log(error);
	});

/**
 * 
 * a partir da tabela preenchida envia-se um id para fazer upgrade no objeto jogador atravez de um Form
 * 
 */ 
function editar(id) {

	root.innerHTML = '';

	const url = `http://181.215.135.83:8188/jogadores/${id}`;
	fetch(url)
		.then((resp) => resp.json())
		.then(function (data) {
			let jogador = data;

			document.getElementById("FormEditar").innerHTML = `

<br>

   <div class="w3-container" style="width: 80%; margin: 4% auto;">

       <div class="w3-container w3-blue">
         <h2>Editar Jogador</h2>
       </div>

	  <div class="w3-container w3-blue">
        <p>
           <label>Url Imagem</label>
           <input class="w3-input" type="text" id="imagem" value='${jogador.imagen}'></p>
        </p>
         <p>
           <label>Nome</label>
           <input class="w3-input" type="text" id="nome" value='${jogador.nome}'/>
         </p>
         <p>
           <label>posição</label>
           <input class="w3-input" type="text" id="posicao" value='${jogador.posicao}'/>
         </p>
         <p>
           <label>Jogos</label>
           <input class="w3-input" type="number" id="jogos" value='${jogador.jogos}'/>
         </p>
         <p>
           <label>Vitórias</label>
           <input class="w3-input" type="number" id="vitorias" value='${jogador.vitorias}'/>
         </p>
         <p>
           <label>Empates</label>
           <input class="w3-input" type="number" id="empates" value='${jogador.empates}'/>
         </p>
         <p>
           <label>Derrotas</label>
           <input class="w3-input" type="number" id="derrotas"value='${jogador.derrotas}'/>
         </p>
         <p>
           <label>Expulsão</label>
           <input class="w3-input" type="number" id="expulsao" value='${jogador.expulsao}'/>
         </p>
         <p>
           <label>Gols</label>
           <input class="w3-input" type="number" id="gols" value='${jogador.gols}'/>
         </p>
         <p>
			  <button class="w3-margin" type="submit" onclick="salvarEdicao(${jogador.id})">Salvar Edição</button>
        </p>
      </div>
   </div>
   `;
		})
		.catch(function (error) {
			console.log(error);
		});
}


/*
 * depois de fazer as modificações no objeto e chamado o metodo salvarEdicao() com o (id) do objeto modificado 
 * para ser enviado para a API.
 * se tudo estiver certo a resposta da API sera impresa na tela com o objeto modificado.
 */ 

function salvarEdicao(id) {
	var imagem = document.getElementById('imagem').value
	var nome = document.getElementById('nome').value
	var posicao = document.getElementById('posicao').value
	var jogos = document.getElementById('jogos').value
	var vitorias = document.getElementById('vitorias').value
	var empates = document.getElementById('empates').value
	var derrotas = document.getElementById('derrotas').value
	var expulsao = document.getElementById('expulsao').value
	var gols = document.getElementById('gols').value
	var pontos = vitorias * 3 + parseInt(empates);

	const jogador = {
		imagen: imagem,
		nome: nome,
		posicao: posicao,
		jogos: jogos,
		vitorias: vitorias,
		empates: empates,
		derrotas: derrotas,
		expulsao: expulsao,
		gols: gols,
		pontos: pontos
	};



	const url = `http://181.215.135.83:8188/jogadores/${id}`
  
	axios.put(url,  jogador, 
		 { headers: {'Content-Type': 'application/json'}},
	  )
	.then(response => {
	console.log(response.data);
    document.getElementById('visualizarRespostaServidor').innerHTML =  ''
	 document.getElementById('FormEditar').innerHTML = `  
	
	 <div class="w3-container w3-center" style="width:50%; margin: 4% auto;">
	 <h3>jogador modificado com sucesso</h3>
	 <div class="w3-card-4 w3-center w3-margin">
	     <img class="imagem" src=${response.data.imagen} alt="Sua imagem" width="50%" height="50%">
	 <div class="w3-container w3-center">
	  Nome: ${response.data.nome}<br>
	  Posição: ${response.data.posicao}
	  </div>
	  </div> 
	  <button class="w3-margin" onclick="redirectTime()">Recarregar pagina</button>
	  </div>
	 `
	})
	.catch(error => {
	 console.log(error);
	 document.getElementById('visualizarRespostaServidor').innerHTML =  '<h3>'+error+'</h3>'
	});

}


function deleteJogador(id){
const url = `http://181.215.135.83:8188/jogadores/${id}`
var re = confirm("Excluir jogador?");
if(re == false){
location.reload();
	
}else if(re == true){
  axios.delete(url)
    .then(response => document.getElementById('root').innerHTML =  `
	 <h1 class="w3-blue">excluído com sucesso!<h1><br>
	 <button class="w3-margin" onclick="redirectTime()">recarregar pagina</button>

	 
	 `)
    .catch(error => {
		document.getElementById('visualizarRespostaServidor').innerHTML =  `Error: ${error.message}`;

        console.error('There was an error!', error);
    });

	 
	}  
	
}


function redirectTime(){
	location.reload() = "editarJogador.html"
}


