



function validarArquivo(){

    var arquivoInput = document.getElementById('arquivo');
    previaDaImagem = document.querySelector('.imagem');
    var caminhoArquivo = arquivoInput.value;
    
    var extensoesPermitidas = /(.jpg|.jpeg|.png|.gif)$/i;

    if(!extensoesPermitidas.exec(caminhoArquivo)){
        alert('Por favor envie um arquivo que tenha as extensões.jpeg/.jpg/.png/.gif .');
        arquivoInput.value = '';
        return false;

    }else{
        if (arquivoInput.files && arquivoInput.files[0]) {


            //console.log(arquivoInput.files[0].name);

            var reader = new FileReader();
     
            reader.onload = function(e) {
                 
              document.getElementById('visualizarImagem').innerHTML = '<img class="imagem" src='+e.target.result+' alt="Sua imagem" width="350" height="150">';
              document.getElementById('visualizarUrl').innerHTML =  '<p>https://apipelada.shop/get/image/'+arquivoInput.files[0].name+'</p>'
              
            
           //   var resultado = document.getElementById('form');
            //  console.log(resultado.su)
            };

               reader.readAsDataURL(arquivoInput.files[0]);

            //   console.log(arquivoInput.files[0].size / 1024 / 1024);

            //   console.log(arquivoInput.files[0].size);

                if (arquivoInput.files[0].size > 2097152) { 

                     alert("Tamanho do arquivo deve ser 2 MB!");

                     return false;

                }
   
        }

    }

}




      
function salvarImagem(){
    var arquivoInput = document.getElementById('arquivo');
    previaDaImagem = document.querySelector('.imagem');
    var caminhoArquivo = arquivoInput.value;
    const url = 'https://apipelada.shop/upload/image'
  
    const formData = new FormData();
    formData.append('image', arquivoInput.files[0]);   
    axios.post(url,  formData, 
        { headers: {'Content-Type': 'multipart/form-data',}},
      )
    .then(response => {
    // console.log(response.data.message);
     document.getElementById('visualizarRespostaServidor').innerHTML =  '<h3>'+response.data.message+'</h3>'
    })
    .catch(error => {
     console.log(error);
     document.getElementById('visualizarRespostaServidor').innerHTML =  '<h3>'+error+'</h3>'
    });
}


