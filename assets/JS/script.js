/* UMA FUNÇÃO RESPONSÁVEL PELA AÇÃO DE CLICAR NO BOTÃO E A JANELA MODAL ABRIR PARA O USUARIO*/
function acao(){

    let modal = document.querySelector('#modal')
    modal.style.display = 'block';
}

/* UMA FUNÇÃO RESPONSÁVEL PELA AÇÃO DE CLICAR NO X E A JANELA MODAL SE FECHAR*/
function fechar(){

    let modal = document.querySelector('#modal')
    modal.style.display = 'none';
}