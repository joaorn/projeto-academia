// script.js
const planos = document.querySelectorAll('.plano');
const modal = document.getElementById('modalMatricula');
const planoSelecionadoSpan = document.getElementById('planoSelecionado');
const formMatricula = document.getElementById('formMatricula');

planos.forEach(plano => {
    plano.addEventListener('click', () => {
        const planoNome = plano.getAttribute('data-plano');
        planoSelecionadoSpan.textContent = planoNome;
        modal.style.display = 'block';
    });
});

function fecharModal() {
    modal.style.display = 'none';
}

formMatricula.addEventListener('submit', (event) => {
    event.preventDefault(); // Impede o envio padrão do formulário
    // Aqui você pode adicionar a lógica para enviar os dados do formulário,
    // por exemplo, via AJAX, para um servidor.
    console.log('Formulário de matrícula enviado!');
    fecharModal();
});