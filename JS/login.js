// Script para a navegação responsiva (toggle do menu)
        document.getElementById('navbarToggler').addEventListener('click', function() {
            var navbarNav = document.getElementById('navbarNav');
            navbarNav.classList.toggle('show');
        });

        // Script para redirecionar o formulário de login
        document.getElementById('loginForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Previne o envio padrão do formulário
            // Aqui você pode adicionar a lógica de autenticação real.
            // Por enquanto, apenas redireciona para 'home.html'
            window.location.href = 'home.html'; 
        });
