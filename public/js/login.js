// Script para a navegação responsiva (toggle do menu)
document.getElementById('navbarToggler').addEventListener('click', function() {
    var navbarNav = document.getElementById('navbarNav');
    navbarNav.classList.toggle('show');
});

// Script para lidar com o envio do formulário de login
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio padrão do formulário

    // Simula um login bem-sucedido para qualquer credencial
    localStorage.setItem('loggedIn', 'true');
    alert('Login bem-sucedido! Bem-vindo ao Universo XD.');
    window.location.href = 'home.html'; // Redireciona para a página inicial
});