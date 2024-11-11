const apiUrl = 'http://localhost:8080/'; 

async function login(email, password) {
    try {
        const response = await fetch(`${apiUrl}/admin/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (response.ok) {
            // Armazena o email para uso posterior
            localStorage.setItem('emailUsuario', email);
            // Redireciona para a página de validação
            window.location.href = 'validar-login.html';
        } else {
            alert(data.message);
        }
    } catch (error) {
        console.error('Erro na requisição:', error);
    }
}

// Função para verificar o código recebido por SMS
async function verifyCode(email, code) {
    try {
        const response = await fetch(`${apiUrl}/admin/verify-code`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, code }),
        });

        const data = await response.json();

        if (response.ok) {
            // Armazena o token JWT no localStorage
            localStorage.setItem('jwtToken', data.token);
            // Redireciona para o painel
            window.location.href = 'painel/painel.html';
        } else {
            alert(data.message);
        }
    } catch (error) {
        console.error('Erro na requisição:', error);
    }
}

// Função para criar um novo aluno
async function criarAluno(dadosAluno) {
    const token = localStorage.getItem('jwtToken');

    try {
        const response = await fetch(`${apiUrl}/alunos`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(dadosAluno),
        });

        const data = await response.json();

        if (response.ok) {
            alert('Aluno criado com sucesso!');
        } else {
            alert(data.message);
        }
    } catch (error) {
        console.error('Erro na requisição:', error);
    }
}


export { login, verifyCode, criarAluno };
