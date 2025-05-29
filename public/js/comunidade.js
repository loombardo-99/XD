// Função para alternar a visibilidade do menu principal (hamburguer)
        function toggleMenu() {
            const nav = document.getElementById('main-nav');
            const overlay = document.getElementById('overlay');
            const groupsColumn = document.getElementById('groups-column'); // Obter a coluna de grupos

            if (nav.classList.contains('open')) {
                nav.classList.remove('open');
                overlay.classList.remove('active');
                document.body.style.overflow = ''; // Reabilita a rolagem do corpo
            } else {
                // Se o menu de grupos estiver aberto, feche-o primeiro
                if (groupsColumn.classList.contains('open')) {
                    groupsColumn.classList.remove('open');
                }
                nav.classList.add('open');
                overlay.classList.add('active');
                document.body.style.overflow = 'hidden'; // Desabilita a rolagem do corpo
            }
        }

        // Função para alternar a visibilidade da coluna de grupos
        function toggleGroups() {
            const groupsColumn = document.getElementById('groups-column');
            const overlay = document.getElementById('overlay');
            const nav = document.getElementById('main-nav'); // Obter o menu principal

            if (groupsColumn.classList.contains('open')) {
                groupsColumn.classList.remove('open');
                overlay.classList.remove('active');
                document.body.style.overflow = ''; // Reabilita a rolagem do corpo
            } else {
                // Se o menu principal estiver aberto, feche-o primeiro
                if (nav.classList.contains('open')) {
                    nav.classList.remove('open');
                }
                groupsColumn.classList.add('open');
                overlay.classList.add('active');
                document.body.style.overflow = 'hidden'; // Desabilita a rolagem do corpo
            }
        }

        // Fecha o menu ou grupos se clicar fora deles ou no overlay
        document.addEventListener('click', function(event) {
            const nav = document.getElementById('main-nav');
            const menuIcon = document.querySelector('.menu-icon');
            const groupsColumn = document.getElementById('groups-column');
            const groupsToggleIcon = document.querySelector('.groups-toggle-icon');
            const overlay = document.getElementById('overlay');

            // Fecha o menu principal se estiver aberto e o clique não foi no menu nem no ícone
            if (nav.classList.contains('open') && !nav.contains(event.target) && !menuIcon.contains(event.target)) {
                nav.classList.remove('open');
                overlay.classList.remove('active');
                document.body.style.overflow = '';
            }
            // Fecha a coluna de grupos se estiver aberta e o clique não foi na coluna nem no ícone
            if (groupsColumn.classList.contains('open') && !groupsColumn.contains(event.target) && !groupsToggleIcon.contains(event.target)) {
                groupsColumn.classList.remove('open');
                overlay.classList.remove('active');
                document.body.style.overflow = '';
            }
        });

        // Função para lidar com a seleção do menu (redirecionamento)
        function handleMenuSelection(value) {
            if (value) {
                window.location.href = value;
            }
        }

        // --- Funções do Feed de Posts ---
        const postTextInput = document.getElementById('post-text-input');
        const postImageUpload = document.getElementById('post-image-upload');
        const postVideoUpload = document.getElementById('post-video-upload');
        const feedContainer = document.getElementById('feed-container');
        const feedLoadingIndicator = document.getElementById('feed-loading-indicator');

        function createPost() {
            const textContent = postTextInput.value.trim();
            const imageFile = postImageUpload.files[0];
            const videoFile = postVideoUpload.files[0];

            if (!textContent && !imageFile && !videoFile) {
                showFeedbackMessage('Por favor, digite um texto ou selecione uma imagem/vídeo para postar.');
                return;
            }

            const postItem = document.createElement('div');
            postItem.classList.add('post-item');

            const timestamp = new Date().toLocaleString('pt-BR', { hour: '2-digit', minute: '2-digit', day: '2-digit', month: '2-digit', year: 'numeric' });

            let mediaContent = '';
            if (imageFile) {
                const imageUrl = URL.createObjectURL(imageFile);
                mediaContent = `<img src="${imageUrl}" alt="Post Image">`;
            } else if (videoFile) {
                const videoUrl = URL.createObjectURL(videoFile);
                mediaContent = `<video controls src="${videoUrl}" onerror="this.src='https://placehold.co/600x300/000000/FFFFFF?text=Video+Indisponivel'" alt="Video de Exemplo"></video>`;
            }

            postItem.innerHTML = `
                <div class="post-header">
                    <div class="post-avatar">Você</div>
                    <div class="post-info">
                        <span class="username">Seu Usuário</span>
                        <span class="timestamp">${timestamp}</span>
                    </div>
                </div>
                <div class="post-content">
                    <p>${textContent}</p>
                    ${mediaContent}
                </div>
                <div class="post-actions">
                    <button><i class="fas fa-heart"></i> Curtir</button>
                    <button><i class="fas fa-comment"></i> Comentar</button>
                    <button><i class="fas fa-share"></i> Compartilhar</button>
                </div>
            `;

            feedContainer.prepend(postItem); // Adiciona o novo post no topo do feed

            // Limpa os campos após a postagem
            postTextInput.value = '';
            postImageUpload.value = '';
            postVideoUpload.value = '';
            showFeedbackMessage('Post criado com sucesso!');
        }

        // Simulação de carregamento infinito de posts
        let postCounter = 0;
        function loadMorePosts() {
            feedLoadingIndicator.classList.add('active'); // Mostra o indicador de carregamento
            setTimeout(() => {
                for (let i = 0; i < 3; i++) { // Adiciona 3 posts por vez
                    postCounter++;
                    const postItem = document.createElement('div');
                    postItem.classList.add('post-item');
                    const timestamp = new Date(Date.now() - (postCounter * 60 * 1000)).toLocaleString('pt-BR', { hour: '2-digit', minute: '2-digit', day: '2-digit', month: '2-digit', year: 'numeric' });

                    let content = '';
                    let media = '';
                    const postType = postCounter % 3; // Alterna entre tipos de post

                    if (postType === 0) {
                        content = `<p>Mais um dia incrível na programação! #devlife</p>`;
                    } else if (postType === 1) {
                        content = `<p>Adoro essa vista!</p>`;
                        media = `<img src="https://placehold.co/600x400/000000/FFFFFF?text=Mais+Imagens" alt="Imagem Aleatória">`;
                    } else {
                        content = `<p>Momento relaxante com música.</p>`;
                        media = `<video controls src="https://www.w3schools.com/html/mov_bbb.mp4" onerror="this.src='https://placehold.co/600x300/000000/FFFFFF?text=Video+Indisponivel'"></video>`;
                    }

                    postItem.innerHTML = `
                        <div class="post-header">
                            <div class="post-avatar">U${postCounter % 5 + 1}</div>
                            <div class="post-info">
                                <span class="username">Comunidade User ${postCounter}</span>
                                <span class="timestamp">${timestamp}</span>
                            </div>
                        </div>
                        <div class="post-content">
                            ${content}
                            ${media}
                        </div>
                        <div class="post-actions">
                            <button><i class="fas fa-heart"></i> Curtir</button>
                            <button><i class="fas fa-comment"></i> Comentar</button>
                            <button><i class="fas fa-share"></i> Compartilhar</button>
                        </div>
                    `;
                    feedContainer.appendChild(postItem);
                }
                feedLoadingIndicator.classList.remove('active'); // Esconde o indicador
            }, 1000); // Simula delay de carregamento
        }

        // Evento para carregamento infinito ao rolar
        feedContainer.addEventListener('scroll', () => {
            if (feedContainer.scrollTop + feedContainer.clientHeight >= feedContainer.scrollHeight - 50) {
                // Carrega mais posts quando o usuário está a 50px do final
                loadMorePosts();
            }
        });

        // Carrega alguns posts iniciais ao carregar a página
        window.addEventListener('load', () => {
            loadMorePosts();
        });


        // --- Funções de Grupos ---
        function joinGroup(buttonElement, groupName) {
            if (buttonElement.classList.contains('joined')) {
                showFeedbackMessage(`Você já está no grupo: ${groupName}`);
                return;
            }

            // Simula a ação de entrar no grupo
            setTimeout(() => {
                buttonElement.classList.add('joined');
                buttonElement.innerHTML = '<i class="fas fa-check"></i> Entrou';
                buttonElement.disabled = true; // Desabilita o botão
                showFeedbackMessage(`Você entrou no grupo: ${groupName}`);
            }, 500); // Pequeno delay para simular o processamento
        }

        // Função para exibir mensagem de feedback (substitui alert())
        function showFeedbackMessage(message) {
            const feedbackMessage = document.getElementById('feedback-message');
            feedbackMessage.textContent = message;
            feedbackMessage.classList.add('show');

            setTimeout(() => {
                feedbackMessage.classList.remove('show');
            }, 3000); // Mensagem desaparece após 3 segundos
        }
