function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    var content = document.querySelector('.conteudo');
    var toggleBtn = document.querySelector('.toggle-btn');
    var subitemToggle = document.querySelector('.subitem-toggle');
    if (sidebar.style.width === '150px') {
        sidebar.style.width = '0';
        content.style.marginLeft = '0';
        toggleBtn.style.color = 'var(--cor5)';
    } else {
        var subitemLists = document.querySelectorAll('.subitem-list');
        subitemLists.forEach(function (subitemList) {
            subitemList.style.display = 'none';
        });
        sidebar.style.width = '150px';
        content.style.marginLeft = '70px';
        subitemToggle.children[0].classList.remove('bold-font');
        toggleBtn.style.color = '#000';
    }

    // Toggle para mostrar/ocultar subitens
    subitemToggle.addEventListener('click', function () {
        var subitemLists = document.querySelectorAll('.subitem-list');
        subitemLists.forEach(function (subitemList) {
            var displayStyle = window.getComputedStyle(subitemList).display;
            if (displayStyle === 'none') {
                subitemList.style.display = 'block';
            } else {
                subitemList.style.display = 'none';
            }
        });
    });
}

// Altera slide da página slides
function alterarIframe(url) {
    var iframe = document.getElementById('iframe');
    iframe.src = url;
    return false;
}

// Personalização da lista da página slides
function adicionarOuvintes() {
    var elementos = document.querySelectorAll('.item-lista-slide');
    for (var i = 0; i < elementos.length; i++) {
        elementos[i].addEventListener('click', function (event) {
            // Resetar estilos para todos os elementos
            var elementos = document.querySelectorAll('.item-lista-slide');
            for (var i = 0; i < elementos.length; i++) {
                // elementos[i].style.color = 'black';
                elementos[i].style.fontWeight = 'normal';
            }

            // Aplicar estilos apenas para o elemento clicado
            var elementoClicado = event.target;
            elementoClicado.style.fontWeight = 'bold';
        });
    }
}