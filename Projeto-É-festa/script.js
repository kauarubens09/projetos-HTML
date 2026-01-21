// Seleção de elementos
const botaoTema = document.getElementById('botao-tema');
const botaoTema2 = document.getElementById('botao-tema2');
const body = document.body;
const menuLateral = document.getElementById('Menu');
const overlay = document.getElementById('overlay');
const div1 = document.getElementById('sm-menu')
const div2 = document.getElementById('sb-menu')
const div3 = document.getElementById('ss-menu')
const div1g = document.getElementById('sm-menug')
const div2g = document.getElementById('sb-menug')
const div3g = document.getElementById('ss-menug')

// --- 1. LÓGICA DO MENU DESLIZANTE ---

/**
 * Abre o menu lateral adicionando a classe 'aberto'
 * @param {Event} event - Objeto de evento para parar a propagação
 */
function menu(event) {
    if (event) event.stopPropagation();
    menuLateral.classList.add('aberto');
    
    // Adiciona uma classe ao body para ativar o overlay
    document.body.classList.add('menu-aberto');
}

/**
 * Fecha o menu lateral removendo a classe 'aberto'
 */
function sair() {
    menuLateral.classList.remove('aberto');
    
    // Remove a classe do body para esconder o overlay
    document.body.classList.remove('menu-aberto');
}
function toggleMenu(idElemento, idIcone) {
    const elemento = document.getElementById(idElemento);
    const icone = document.getElementById(idIcone);

    if (elemento.style.display === 'block') {
        elemento.style.display = 'none';
        if (icone) icone.classList.remove('girar');
    } else {
        elemento.style.display = 'block';
        if (icone) icone.classList.add('girar');
    }
}
// Funções para o Menu Mobile
function abrirm() { toggleMenu('sm-menu', 'i1'); }
function abrirb() { toggleMenu('sb-menu', 'i2'); }
function abrirs() { toggleMenu('ss-menu', 'i3'); }

// Funções para o Menu Desktop (G)
// Note que usei os IDs que você definiu no HTML
function abrirmg() { toggleMenu('sm-menug', 'i1-g'); }
function abrirbg() { toggleMenu('sb-menug', 'i2-g'); }
function abrirsg() { toggleMenu('ss-menug', 'i3-g'); }
// Impede que cliques dentro do menu fechem o próprio menu
menuLateral.addEventListener('click', (e) => {
    e.stopPropagation();
});

// --- 2. LÓGICA DO TEMA (ESCURO / CLARO) ---

/**
 * Aplica visualmente o tema e troca o ícone
 * @param {boolean} isEscuro - Estado do tema
 */
function aplicarTema(isEscuro) {
    if (isEscuro) {
        body.classList.add('escuro');
        botaoTema.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
        body.classList.remove('escuro');
        botaoTema.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
}

// Evento de clique no botão de tema
botaoTema.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Inverte a classe no body e salva o estado
    const modoEscuroAtivo = body.classList.toggle('escuro');
    aplicarTema(modoEscuroAtivo);
    localStorage.setItem('tema', modoEscuroAtivo ? 'escuro' : 'claro');
});

// Verifica a persistência do tema ao carregar a página
const temaSalvo = localStorage.getItem('tema');
aplicarTema(temaSalvo === 'escuro');

// --- 3. SCROLL SUAVE PARA LINKS ---

const navLinks = document.querySelectorAll('.link');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        // Verifica se é um link interno (âncora)
        if (href && href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                const headerHeight = document.querySelector('header').offsetHeight;
                // Calcula a posição descontando o header fixo
                const targetPosition = target.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
        
                sair();
            }
        }
    });
});
function aplicarTema(isEscuro) {
    if (isEscuro) {
        body.classList.add('escuro');
        botaoTema2.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
        body.classList.remove('escuro');
        botaoTema2.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
}


botaoTema2.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Inverte a classe no body e salva o estado
    const modoEscuroAtivo = body.classList.toggle('escuro');
    aplicarTema(modoEscuroAtivo);
    localStorage.setItem('tema', modoEscuroAtivo ? 'escuro' : 'claro');
});

const temaSalvo2 = localStorage.getItem('tema');
aplicarTema(temaSalvo2 === 'escuro');


const navLinks2 = document.querySelectorAll('.link');

navLinks2.forEach(link => {
    link.addEventListener('click', function(e) {
        const href2 = this.getAttribute('href');
        if (href2 && href2.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                const headerHeight2 = document.querySelector('header').offsetHeight;
                const targetPosition2 = target.offsetTop - headerHeight2 - 20;
                
                window.scrollTo({
                    top: targetPosition2,
                    behavior: 'smooth'
                });
        
                sair();
            }
        }
    });
});