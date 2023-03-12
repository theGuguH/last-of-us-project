const botoesCarrossel = document.querySelectorAll('.botao');
const images = document.querySelectorAll('.imagem');

botoesCarrossel.forEach((botao, index) => {
    botao.addEventListener('click', () => {
        const botaoSelecionado = document.querySelector('.selecionado');
        botaoSelecionado.classList.remove('selecionado');
        botao.classList.add('selecionado');

        const imagemAtiva = document.querySelector('.ativa');
        imagemAtiva.classList.remove('ativa');
        images[index].classList.add('ativa');
    });
});