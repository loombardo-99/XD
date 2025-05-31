// Funcionalidade do Navbar (Menu Hambúrguer)
        const navbarToggler = document.getElementById('navbarToggler');
        const navbarNav = document.getElementById('navbarNav');

        navbarToggler.addEventListener('click', () => {
            navbarNav.classList.toggle('show');
        });

        // Funcionalidade do Carrossel
        const carouselInner = document.querySelector('.carousel-inner');
        const carouselItems = document.querySelectorAll('.carousel-item');
        const carouselPrev = document.getElementById('carouselPrev');
        const carouselNext = document.getElementById('carouselNext');
        const carouselIndicators = document.getElementById('carouselIndicators');
        let currentIndex = 0;
        let slideInterval; // Variável para armazenar o intervalo do slide

        function updateCarousel() {
            carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
            updateIndicators();
        }

        function updateIndicators() {
            const indicators = carouselIndicators.querySelectorAll('li');
            indicators.forEach((indicator, index) => {
                if (index === currentIndex) {
                    indicator.classList.add('active');
                } else {
                    indicator.classList.remove('active');
                }
            });
        }

        function goToSlide(index) {
            currentIndex = index;
            updateCarousel();
            resetSlideInterval(); // Reinicia o intervalo ao navegar manualmente
        }

        carouselPrev.addEventListener('click', () => {
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : carouselItems.length - 1;
            updateCarousel();
            resetSlideInterval();
        });

        carouselNext.addEventListener('click', () => {
            currentIndex = (currentIndex < carouselItems.length - 1) ? currentIndex + 1 : 0;
            updateCarousel();
            resetSlideInterval();
        });

        carouselIndicators.addEventListener('click', (event) => {
            if (event.target.tagName === 'LI') {
                const slideToIndex = parseInt(event.target.dataset.slideTo);
                goToSlide(slideToIndex);
            }
        });

        // Autoplay do Carrossel
        function startSlideInterval() {
            slideInterval = setInterval(() => {
                currentIndex = (currentIndex < carouselItems.length - 1) ? currentIndex + 1 : 0;
                updateCarousel();
            }, 5000); // Muda de slide a cada 5 segundos
        }

        function resetSlideInterval() {
            clearInterval(slideInterval);
            startSlideInterval();
        }

        // Inicia o carrossel ao carregar a página
        document.addEventListener('DOMContentLoaded', () => {
            updateCarousel(); // Garante que o primeiro slide esteja visível e o indicador ativo
            startSlideInterval();
        });

        // Funcionalidade do Modal de Vídeo
        let scrollPosition = 0;

        function showVideo(videoSrc) {
            scrollPosition = window.scrollY;
            document.body.style.overflow = 'hidden';
            document.body.style.position = 'fixed';
            document.body.style.top = `-${scrollPosition}px`;
            
            const videoElement = document.getElementById('videoContent');
            videoElement.src = videoSrc;
            videoElement.load();
            videoElement.muted = true; // Garante que o vídeo esteja mudo para autoplay

            const videoModal = document.getElementById('videoModal');
            videoModal.classList.add('show');

            videoElement.play().then(() => {
                // Vídeo começou a ser reproduzido com sucesso
            }).catch(error => {
                console.error("Erro ao tentar reproduzir o vídeo:", error);
                // Substituindo alert() por uma mensagem no console, pois alert() não é permitido em imersivos.
                console.warn("Não foi possível reproduzir o vídeo. Isso pode ser devido a políticas de reprodução automática do navegador ou o arquivo de vídeo não foi encontrado. Verifique o caminho do arquivo e as permissões do navegador.");
                closeVideo();
            });
        }

        function closeVideo() {
            const videoElement = document.getElementById('videoContent');
            videoElement.pause();
            videoElement.src = '';
            const videoModal = document.getElementById('videoModal');
            videoModal.classList.remove('show');
            setTimeout(() => {
                document.body.style.overflow = '';
                document.body.style.position = '';
                document.body.style.top = '';
                window.scrollTo(0, scrollPosition);
            }, 300);
        }

        // Script para verificar o carregamento e funcionalidade
        document.addEventListener('DOMContentLoaded', function() {
            console.log("Página carregada com CSS puro e JavaScript personalizado.");
            // Você pode adicionar mais verificações aqui se necessário
        });
