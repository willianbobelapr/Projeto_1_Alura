var formSignin = document.querySelector('#signin');
var formSignup = document.querySelector('#signup');
var btnColor = document.querySelector('.btnColor');

document.querySelector('#btnSignin').addEventListener('click', function() {
  formSignin.style.left = "25px";
  formSignup.style.left = "450px";
  btnColor.style.left = "0px";
});

document.querySelector('#btnSignup').addEventListener('click', function() {
  formSignin.style.left = "-450px";
  formSignup.style.left = "25px";
  btnColor.style.left = "110px";
});

function validarLogin(email, senha) {
  const usuariosRegistrados = [
    { email: 'willian.bobela@escola.pr.gov.br', senha: '123123' },
    { email: 'usuario2@example.com', senha: 'senha' }
  ];

  const usuarioValido = usuariosRegistrados.find(usuario => usuario.email === email && usuario.senha === senha);

  return usuarioValido !== undefined;
}

document.querySelector('#signin').addEventListener('submit', function(event) {
  event.preventDefault();

  const email = document.querySelector('#signin input[type="text"]').value;
  const senha = document.querySelector('#signin input[type="password"]').value;

  const loginValido = validarLogin(email, senha);

  if (loginValido) {
    window.location.href = "pagina.html";
  } else {
    alert("Email ou senha incorretos. Por favor, tente novamente.");
  }
});

document.querySelector('#signup').addEventListener('submit', function(event) {
  event.preventDefault();

  const email = document.querySelector('#signup input[type="text"]').value;
  const senha1 = document.querySelector('#signup input[type="password"]').value;
  const senha2 = document.querySelector('#signup input[type="password"]:nth-of-type(2)').value;

  // Verifique se as senhas inseridas coincidem
  if (senha1 !== senha2) {
    alert("As senhas não coincidem. Por favor, tente novamente.");
    return; // Impede o restante do código de ser executado
  }
document.querySelector('#btnSignup').addEventListener('click', () => {
    window.location.href = "index..html";
});
document.querySelector('.divCheck input[type="checkbox"]').addEventListener('click', function() {
  const senhaInput = document.querySelector('#signin input[type="password"]');
  if (this.checked) {
    senhaInput.type = "text";
  } else {
    senhaInput.type = "password";
  }
});
  // Validação adicional, como verificar se o email já está registrado, pode ser feita aqui

  // Adicione o novo usuário à lista de usuários registrados (ou a um banco de dados)
  const novoUsuario = { email: email, senha: senha1 };
  usuariosRegistrados.push(novoUsuario);

  // Redirecione o usuário para a página de login ou qualquer outra página desejada
  window.location.href = "index.html"; // Substitua "login.html" pelo nome da sua página de login
});
// Quando o formulário é enviado
document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;

    // Envie o email para o backend para gerar o código de verificação
    fetch('/send-verification-code', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: email })
    })
    .then(response => {
        if (response.ok) {
            // Redireciona para a página de verificação
            window.location.href = "/verificar-codigo.html";
        } else {
            alert("Erro ao enviar o código de verificação. Por favor, tente novamente.");
        }
    })
    .catch(error => {
        console.error('Erro:', error);
    });
});