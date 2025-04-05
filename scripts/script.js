// Certifique-se de que o script será executado após o carregamento completo da página
document.addEventListener("DOMContentLoaded", () => {
    // Seletores para os elementos do menu
    const menu = document.querySelector("#menu"); // Ícone do menu hambúrguer
    const menuX = document.querySelector("#menuX"); // Ícone de fechar (X)
    const menuPrincipal = document.querySelector(".menu-principal"); // Menu principal

    // Selecionar o logotipo
    const logo = document.querySelector("#logo img"); // Ícone do logotipo

    // Configuração inicial para garantir que o menu começa fechado
    menuPrincipal.classList.remove("active");
    menu.style.display = "flex"; // Exibe o ícone do menu hambúrguer
    menuX.style.display = "none"; // Garante que o ícone de fechar está oculto inicialmente

    // Função para abrir o menu
    function mostramenu() {
        menuPrincipal.classList.add("active"); // Adiciona a classe que ativa o menu
        menu.style.display = "none"; // Esconde o ícone de hambúrguer
        menuX.style.display = "flex"; // Mostra o ícone de fechar
    }

    // Função para fechar o menu
    function escondermenu() {
        menuPrincipal.classList.remove("active"); // Remove a classe que ativa o menu
        menu.style.display = "flex"; // Mostra o ícone de hambúrguer
        menuX.style.display = "none"; // Esconde o ícone de fechar
    }

    // Adiciona eventos de clique para os ícones
    menu.addEventListener("click", mostramenu); // Clique no ícone de hambúrguer para abrir o menu
    menuX.addEventListener("click", escondermenu); // Clique no ícone de fechar para fechar o menu

    // Adicionar evento de clique ao logotipo para recarregar a página
    logo.addEventListener("click", () => {
        location.reload(); // Recarrega a página
    });
});

