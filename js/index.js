import { login } from './api.js';

document.getElementById('entrar').addEventListener('click', async (event) => {
    event.preventDefault();

    const email = document.getElementById('matricula').value;
    const password = document.getElementById('senha').value;

    await login(email, password);
});
