(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-products-overlay-open]"),
    closeModalBtn: document.querySelector("[products-overlay-close]"),
    modal: document.querySelector("[data-products-overlay]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("products__overlay--hidden");
  }
})();
