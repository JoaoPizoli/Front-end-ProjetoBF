import { criarAluno } from './api.js';

document.getElementById('cadastrar-aluno').addEventListener('click', async (event) => {
    event.preventDefault();

    const dadosAluno = {
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        password: document.getElementById('senha').value,
        instrumento: document.getElementById('instrumento').value,
        dataNascimento: document.getElementById('dataNascimento').value,
        matricula: document.getElementById('matricula').value,
    };

    await criarAluno(dadosAluno);
});
