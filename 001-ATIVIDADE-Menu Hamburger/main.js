const btHamburger = document.querySelector(".menu-hamburger")
const mainMenu = document.querySelector("nav.main-menu")

btHamburger.addEventListener("click", () => {
  btHamburger.classList.toggle("opened")
  mainMenu.classList.toggle("opened")
})

// ----------------------------------------------------------------------------------


  const modal = document.getElementById('modal');

  // Função para abrir o modal
  function abrirModal() {
      modal.showModal();
  }

  // Função para fechar o modal
  function fecharModal() {
      modal.close();
  }
