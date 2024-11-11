import { verifyCode } from './api.js';

document.getElementById('validar-codigo').addEventListener('click', async (event) => {
    event.preventDefault();

    const code = document.getElementById('codigo-validacao').value;
    const email = localStorage.getItem('emailUsuario');

    if (!email) {
        alert('Email não encontrado. Por favor, faça login novamente.');
        window.location.href = 'index.html';
        return;
    }

    await verifyCode(email, code);
});
