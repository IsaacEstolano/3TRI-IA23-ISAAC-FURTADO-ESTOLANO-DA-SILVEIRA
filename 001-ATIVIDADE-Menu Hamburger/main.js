const btHamburger = document.querySelector(".menu-hamburger")
const mainMenu = document.querySelector("nav.main-menu")

btHamburger.addEventListener("click", () => {
  btHamburger.classList.toggle("opened")
  mainMenu.classList.toggle("opened")
})
//-------------------------------------------------
const btDialog = document.querySelector(".bt-dialog")
const btModal = document.querySelector(".bt-modal")
const dialog = document.querySelector("dialog")

console.log(btDialog,btModal,dialog)

btDialog.addEventListener("click",() => dialog.show())
btModal.addEventListener("click",() => dialog.showModal())
