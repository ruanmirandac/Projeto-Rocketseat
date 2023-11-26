// defininfo a função de clique para mudar modo light/dark

function toggleMode(){
    const html = document.documentElement // aqui eu faço o acesso a tag HTML do documento
    html.classList.toggle('light') // essa função TOGGLE (alternar) faz a mesma mudança do if else
    const img = document.querySelector('#profile img') // pegando a imagem do perfil (usamos a msm sintaxe do CSS)
 
    if(html.classList.contains('light')){  // se existe a classe 'light' na tag HTML
        //mudando a imagem para o modo light
        //setAttribute faz a adição ou edição de um atributo de algum elemento
        img.setAttribute('src', './assets/avatar-light.png')
        img.setAttribute('alt', 'foto do perfil modo light')  
    } else{
        img.setAttribute('src', './assets/avatar.png')
        img.setAttribute('alt', 'foto do perfil modo dark')    
    }
}